export function Button ({ onClick, children }) {
  return (
    <div onClick={onClick}>
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

export function Horizontal({ children, flex }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flex }}>
      {children}
    </div>
  );
}

export function Vertical({ children, flex }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex }}>
      {children}
    </div>
  );
}
