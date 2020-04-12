export function Button ({ onClick, flex, children }) {
  return (
    <div onClick={onClick} style={{flex}}>
      {children}
      <style jsx>{`
      div {
        background: #efefef;
        border-radius: 4px;
        border: 1px solid #1c002e;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        font-size: 24px;
        line-height: 24px;
        padding: 12px 40px;
        text-align: center;
        transition: 0.1s;
        user-select: none;
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

export function GameButton ({ onClick, flex, children }) {
  return (
    <div onClick={onClick} style={{flex}}>
      {children}
      <style jsx>{`
      div {
        background: #efefef;
        border-radius: 2px;
        border: 1px solid #1c002e;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        text-align: center;
        transition: 0.1s;
        user-select: none;
      }

      div:hover {
        background: #430d27; 
        color: #efefef;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
        transition: 0.1s;
      }
      `}</style>
    </div>
  );
}

export function Input ({ placeholder, value, onChange }) {
  return (
    <input onChange={onChange} value={value} style={{
      border: 'none',
      borderRadius: '2px',
      boxSizing: 'border-box',
      fontFamily: '\'Open Sans\', sans-serif',
      fontSize: '20px',
      height: '40px',
      lineHeight: '40px',
      outline: 'none',
      padding: '0 16px',
      width: '100%',
    }} placeholder={placeholder} />
  );
}

export function Horizontal({ children, flex, spaced, wide, padding, middle }) {
  const styles = { boxSizing: 'border-box', display: 'flex', flexDirection: 'row', flex, padding };
  if (spaced) styles.justifyContent = 'space-between';
  if (wide) styles.width = '100%';
  if (middle) styles.alignItems = 'center';
  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export function Vertical({ children, flex, spaced, right, padding }) {
  const styles = { boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flex, padding };
  if (spaced) styles.justifyContent = 'space-between';
  if (right) styles.textAlign = 'right';
  return (
    <div style={styles}>
      {children}
    </div>
  );
}
