import { useState, useEffect } from 'react';
import { Button, Horizontal, Vertical } from './ui';
import { tickLengthMs } from '../config/default';

export function Game () {
  const [cash, setCash] = useState(0);
  const [masks, setMasks] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [employeeCost, setEmployeeCost] = useState(1);
  const maskRate = 0.05 * employees;

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
        <div style={{ background: '#cccbca', flex: 2 }}></div>
      </Vertical>

      <div style={{ background: '#fcfbfa', flex: 1 }}>
        <ItemWithAmount label='Employees' amount={employees} price={employeeCost} />
        {/*
        <Button onClick={() => setEmployees(employees + 1)}>
          <div className='horizontal acenter' style={{ justifyContent: 'space-between' }}>
            <div>({employees}) Employees</div>
            <div>Hire 1</div>
          </div>
        </Button>
        */}
      </div>

      <div style={{ background: '#ecebea', flex: 1 }}></div>

      <div style={{ background: '#dcdbda', flex: 1 }}></div>
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

function ItemWithAmount({ label, amount, price }) {
  return (
    <Horizontal wide spaced padding='8px' middle>
      <Vertical>
        <div>{label}</div>
        <div style={{ fontSize: '16px', lineHeight: '32px' }}>Cost: {formatMoney(price)}</div>
      </Vertical>
      <div style={{ fontSize: '32px', lineHeight: '32px' }}>{amount}</div>
    </Horizontal>
  );
}

function format(x) {
  return x.toFixed(2);
}

function formatMoney(x) {
  return `$${x.toFixed(0)}`;
}
