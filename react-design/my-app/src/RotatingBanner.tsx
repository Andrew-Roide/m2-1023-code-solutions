function Banner({ items }) {
  return (
    <div>
      <h1 className="banner">{items}</h1>
    </div>
  );
}

function PrevButton() {
  return (
    <div className="cycleButton">
      <button>Prev</button>
    </div>
  );
}

function Indicators() {
  return (
    <div className="indicators">
      <button>0</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}

function NextButton() {
  return (
    <div className="cycleButton">
      <button>Next</button>
    </div>
  );
}

export default function RotatingBanner(/*{ items }*/) {
  return (
    <>
      <div className="container">
        <Banner /*items={items}*/ />
        <PrevButton />
        <Indicators />
        <NextButton />
      </div>
    </>
  );
}
