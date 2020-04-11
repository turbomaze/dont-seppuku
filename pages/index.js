export default function Index () {
  return (
    <div>
      <div className="a">A</div>
      <div className="b">B</div>
      <div className="c">C</div>

      <style jsx>{`
      .a {
        background: white;
      }

      .b {
        background: red;
      }

      .c {
        background: brown;
      }
      `}</style>

      <GlobalStyles />
    </div>
  );
}

function GlobalStyles () {
  return (
    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  );
}
