import { Button } from './ui';

export function Splash ({ onPlayNow }) {
  return (
    <div>
      <Slants>
        <div className="container">
          <h1>DONT SEPPUKU</h1>

          <h6 style={{ textAlign: 'center' }}>(WIP) an incremental idle game with trading</h6>

          <div className="actions" style={{ marginTop: '16px' }}>
            <Button onClick={onPlayNow}>Play now</Button>
          </div>
        </div>
      </Slants>
      <style jsx>{`
      .container {
        margin-top: -48px;
        transform: skewY(4deg);
      }
      h1 {
        font-family: 'Nosifer', sans-serif;
        font-size: 64px;
        transform: skewY(-4deg);
        margin-bottom: 64px;
      }
      .actions {
        display: flex;
        justify-content: center;
      }
      `}</style>
    </div>
  );
}

function Slants ({ children }) {
  return (
    <>
      <div className="slant-0">
        <div className="slant-1">
          <div className="slant-2">
            <div className="slant-3">
              {children}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      .slant-0 {
        height: 98.2545%;
        background: #582233;
        transform: skewY(-1deg);
      }
      .slant-1 {
        height: 98.2545%;
        background: #713045;
        transform: skewY(-1deg);
      }
      .slant-2 {
        height: 98.2545%;
        background: #c94e4e;
        transform: skewY(-1deg);
      }
      .slant-3 {
        height: 98.2545%;
        background: #fcfbfa;
        transform: skewY(-1deg);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      `}</style>
    </>
  );
}
