import { useState, useEffect } from 'react';
import { GameButton, Input, Horizontal, Vertical } from './ui';
import * as config  from '../config/default';

const {
  assets,
  getCost,
  initialCosts,
  initialPrices,
  productionRates,
  tickLengthMs,
  upgrades,
} = config;

export function Game () {
  // state
  const [cash, setCash] = useState(config.initialCash);
  const [employees, buyEmployee] = useBuyable(
    initialCosts[upgrades[assets.masks].employees],
    cash,
    setCash
  );
  const [maskPrice, setMaskBidAsk] = useBidAsk(initialPrices[assets.masks]);
  const [masks, setMasks, buyMasks, sellMasks] = useTradable(0, maskPrice, cash, setCash);

  // computed values
  const employeeCost = getCost(initialCosts[upgrades[assets.masks].employees], employees);
  const maskRate = productionRates[upgrades[assets.masks].employees] * employees;

  useEffect(() => {
    const interval = setInterval(() => {
      // compute new asset amounts
      setMasks(masks + maskRate);

      // randomly modify the prices
      if (Math.random() < 0.5) {
        const halfSpread = 0.01;
        const midPrice = (maskPrice.bid + maskPrice.ask) / 2;
        const multiplier = (1 - halfSpread) + 2 * halfSpread * Math.random(); // martingale
        const newMidPrice = multiplier * midPrice;
        setMaskBidAsk({
          bid: newMidPrice * (1 - halfSpread),
          ask: newMidPrice * (1 + halfSpread),
        });
      }
    }, tickLengthMs);
    return () => clearInterval(interval);
  });

  return (
    <Horizontal>
      <Wallet cash={cash} masks={masks} maskRate={maskRate} />

      <Vertical flex={5}>
        <Horizontal flex={1}>
          <Trading bid={maskPrice.bid} ask={maskPrice.ask} buy={buyMasks} sell={sellMasks} />

          <Orderbook />
        </Horizontal>

        <Horizontal flex={2}>
          <div style={{ background: '#dcdbda', flex: 1 }}>
            <div style={{ padding: '16px' }}><b>Mask production</b></div>

            <ItemWithAmount
              onClick={guard(buyEmployee)}
              label='Employees'
              amount={employees}
              price={employeeCost} />
          </div>

          <div style={{ background: '#cccbca', flex: 1 }}>
            <div style={{ padding: '16px' }}><b>TODO production</b></div>
          </div>

          <div style={{ background: '#bcbbba', flex: 1 }}>
            <div style={{ padding: '16px' }}><b>TODO production</b></div>
          </div>
        </Horizontal>
      </Vertical>
    </Horizontal>
  );
}

function useBuyable(initialCost, cash, setCash) {
  const [quantity, setQuantity] = useState(0);

  function buy() {
    const cost = getCost(initialCost, quantity);
    if (cost > cash) {
      throw new Error('Insufficient cash balance');
    }

    setCash(cash - cost);
    setQuantity(quantity + 1);
  }

  return [quantity, buy];
}

function useBidAsk({ bid: initialBid, ask: initialAsk }) {
  const [bid, setBid] = useState(initialBid);
  const [ask, setAsk] = useState(initialAsk);

  function setBidAsk({ bid: newBid, ask: newAsk }) {
    setBid(newBid);
    setAsk(newAsk);
  }

  return [{ bid, ask }, setBidAsk];
}

function useTradable(initialAmount, { bid, ask }, cash, setCash) {
  const [amount, setAmount] = useState(initialAmount);

  function buy(quantity) {
    const cost = ask * quantity;
    if (cost > cash) {
      throw new Error('Insufficient cash balance');
    }

    setCash(cash - cost);
    setAmount(amount + quantity);
  }

  function sell(quantity) {
    if (quantity > amount) {
      throw new Error('Insufficient asset quantity');
    }

    const quoteQuantity = bid * quantity;
    setAmount(amount - quantity);
    setCash(cash + quoteQuantity);
  }

  return [amount, setAmount, buy, sell];
}

function Wallet({ cash, masks, maskRate }) {
  return <Vertical flex={2}>
    <div style={{
      background: '#fcfbfa',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
    }}>
      <AssetWithRate label='Cash' amount={formatMoney(cash)} />
      <br />
      <AssetWithRate label='Masks' amount={format(masks)} rate={format(maskRate)} />
    </div>
    <div style={{ background: '#ecebea', flex: 2 }}></div>
  </Vertical>;
}

function Trading({ bid, ask, buy, sell }) {
  const [buyAmount, buyAmountString, setBuyAmount] = useNumericInput(0);
  const [sellAmount, sellAmountString, setSellAmount] = useNumericInput(0);

  return <div style={{ boxSizing: 'border-box', background: '#acabaa', flex: 1 }}>
    <div style={{ padding: '16px' }}><b>Trade</b></div>

    <AssetWithRate label='Buy masks @' amount={formatMoney(ask)} suffix='/mask' />

    <Horizontal padding='0 16px'>
      <Input placeholder='Amount' value={buyAmountString} onChange={setBuyAmount} />
      &nbsp;
      <GameButton onClick={() => guard(buy)(buyAmount)} flex={1}>Buy</GameButton>
    </Horizontal>

    <br />

    <AssetWithRate label='Sell masks @' amount={formatMoney(bid)} suffix='/mask' />

    <Horizontal padding='0 16px'>
      <Input placeholder='Amount' value={sellAmountString} onChange={setSellAmount} />
      &nbsp;
      <GameButton onClick={() => guard(sell)(sellAmount)} flex={1}>Sell</GameButton>
    </Horizontal>
  </div>;
}

function useNumericInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [valueString, setValueString] = useState(initialValue);
  function set(event) {
    if (isNaN(event.target.value)) {
      return;
    }

    setValue(parseFloat(event.target.value));
    setValueString(event.target.value);
  }
  return [value, valueString, set];
}

function Orderbook() {
  return <div style={{ boxSizing: 'border-box', background: '#121212', flex: 1 }}>
    <div style={{color:'white', padding: '16px'}}>(TODO) Orderbook</div>
  </div>;
}

function AssetWithRate({ label, amount, rate, suffix }) {
  return (
    <Horizontal wide spaced padding='16px'>
      <div>{label}</div>
      <Vertical right>
        <div>{amount}{suffix}</div>
        {rate === undefined ? null : <div style={{ fontSize: '16px', lineHeight: '32px' }}>{rate} per second</div>}
      </Vertical>
    </Horizontal>
  );
}

function ItemWithAmount({ onClick, label, amount, price }) {
  return (
    <div onClick={onClick}>
      <Horizontal wide spaced padding='16px' middle>
        <Vertical>
          <div>{label}</div>
          <div style={{ fontSize: '16px', lineHeight: '32px' }}>Cost: {formatMoney(price)}</div>
        </Vertical>
        <div style={{ fontSize: '32px', lineHeight: '32px' }}>{amount}</div>
      </Horizontal>
    </div>
  );
}

function guard(f) {
  return (...args) => {
    try {
      f(...args);
    } catch (err) {
      return alert(err.message);
    }
  };
}

function alert() {
  if (typeof window !== 'undefined') {
    window.alert(...arguments);
  }
}

function format(x) {
  return x.toFixed(2).toLocaleString();
}

function formatMoney(x) {
  return `$${x.toFixed(2).toLocaleString()}`;
}
