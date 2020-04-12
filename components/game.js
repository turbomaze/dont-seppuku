import { useState, useEffect } from 'react';
import { GameButton, Input, Horizontal, Vertical } from './ui';
import * as config  from '../config/default';

const {
  getPrice,
  initialPrices,
  productionRates,
  tickLengthMs,
} = config;

export function Game () {
  // state
  const [cash, setCash] = useState(config.initialCash);
  const [masks, setMasks] = useState(0);
  const [employees, setEmployees] = useState(0);

  // computed values
  const employeeCost = getPrice(initialPrices.masks, employees);
  const maskRate = productionRates.employees * employees;

  useEffect(() => {
    const interval = setInterval(() => {
      setMasks(masks + maskRate);
    }, tickLengthMs);
    return () => clearInterval(interval);
  });

  return (
    <Horizontal>
      <Wallet cash={cash} masks={masks} maskRate={maskRate} />

      <Vertical flex={5}>
        <Horizontal flex={1}>
          <div style={{ boxSizing: 'border-box', background: '#acabaa', flex: 1 }}>
            <div style={{ padding: '16px' }}><b>Trade</b></div>

            <AssetWithRate label='Buy masks @' amount={formatMoney(100.2)} suffix='/mask' />

            <Horizontal padding='0 16px'>
              <Input placeholder='Amount'/>
              &nbsp;
              <GameButton flex={1}>Buy</GameButton>
            </Horizontal>

            <br />

            <AssetWithRate label='Sell masks @' amount={formatMoney(99.2)} suffix='/mask' />

            <Horizontal padding='0 16px'>
              <Input placeholder='Amount'/>
              &nbsp;
              <GameButton flex={1}>Sell</GameButton>
            </Horizontal>
          </div>

          <div style={{ boxSizing: 'border-box', background: '#121212', flex: 1 }}>
            <div style={{color:'white', padding: '16px'}}>(TODO) Orderbook</div>
          </div>
        </Horizontal>

        <Horizontal flex={2}>
          <div style={{ background: '#dcdbda', flex: 1 }}>
            <div style={{ padding: '16px' }}><b>Mask upgrades</b></div>

            <ItemWithAmount
              onClick={() => setEmployees(employees + 1)}
              label='Employees'
              amount={employees}
              price={employeeCost} />
          </div>

          <div style={{ background: '#cccbca', flex: 1 }}>
            <div style={{ padding: '16px' }}><b>TODO upgrades</b></div>
          </div>

          <div style={{ background: '#bcbbba', flex: 1 }}>
            <div style={{ padding: '16px' }}><b>TODO upgrades</b></div>
          </div>
        </Horizontal>
      </Vertical>
    </Horizontal>
  );
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
      <AssetWithRate label='Masks' amount={format(masks)} rate={maskRate} />
    </div>
    <div style={{ background: '#ecebea', flex: 2 }}></div>
  </Vertical>;
}

function AssetWithRate({ label, amount, rate, suffix }) {
  return (
    <Horizontal wide spaced padding='16px'>
      <div>{label}</div>
      <Vertical right>
        <div>{amount}{suffix}</div>
        {rate === undefined ? null : <div style={{ fontSize: '16px', lineHeight: '32px' }}>{format(rate)} per second</div>}
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

function format(x) {
  return x.toFixed(2).toLocaleString();
}

function formatMoney(x) {
  return `$${x.toFixed(2).toLocaleString()}`;
}
