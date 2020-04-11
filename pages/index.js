export default function Index () {
  return (
    <div>
      <Slants>
        <div className="container">
          <h1>DONT SEPPUKU</h1>
          <div className="actions">
            <Button>Play now</Button>
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
      }
      .actions {
        display: flex;
        justify-content: center;
      }
      `}</style>

      <GlobalStyles />
    </div>
  );
}

function Button ({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
      div {
        background: #efefef;
        border-radius: 4px;
        border: 1px solid #1c002e;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        font-size: 22px;
        line-height: 22px;
        padding: 12px 40px;
        transition: 0.1s;
      }

      div:hover {
        background: #430d27; 
        color: #efefef;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.3);
        transition: 0.1s;
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

function GlobalStyles () {
  return (
    <style jsx global>{`
      html, body, body > div:first-child, div#__next, div#__next > div {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
      }

      body {
        background: #430d27;
        color: #1c002e;
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
  );
}
