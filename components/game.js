import { useState, useEffect } from 'react';
import { Horizontal, Vertical } from './ui';
import {
  getPrice,
  initialPrices,
  productionRates,
  tickLengthMs,
} from '../config/default';

export function Game () {
  // state
  const [cash, setCash] = useState(0);
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
      <Vertical flex={1}>
        <div className='vertical acenter jcenter' style={{ background: '#fcfbfa', flex: 1 }}>
          <AssetWithRate label='Cash' amount={cash} />
          <br />
          <AssetWithRate label='Masks' amount={masks} rate={maskRate} />
        </div>
        <div style={{ background: '#ecebea', flex: 2 }}></div>
      </Vertical>

      <div style={{ background: '#dcdbda', flex: 1 }}>
        <ItemWithAmount onClick={() => setEmployees(employees + 1)} label='Employees' amount={employees} price={employeeCost} />
      </div>

      <div style={{ background: '#cccbca', flex: 1 }}></div>

      <div style={{ background: '#bcbbba', flex: 1 }}></div>
    </Horizontal>
  );
}

function AssetWithRate({ label, amount, rate }) {
  return (
    <Horizontal wide spaced padding='8px'>
      <div>{label}</div>
      <Vertical right>
        <div>{format(amount)}</div>
        {rate === undefined ? null : <div style={{ fontSize: '16px', lineHeight: '32px' }}>{format(rate)} per second</div>}
      </Vertical>
    </Horizontal>
  );
}

function ItemWithAmount({ onClick, label, amount, price }) {
  return (
    <div onClick={onClick}>
      <Horizontal wide spaced padding='8px' middle>
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
  return x.toFixed(2);
}

function formatMoney(x) {
  return `$${x.toFixed(0)}`;
}
