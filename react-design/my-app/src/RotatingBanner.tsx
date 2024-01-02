import { useState } from 'react';

function Banner({ items }) {
  return (
    <div>
      <h1 className="banner">{items}</h1>
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

function PrevButton() {
  return (
    <div className="cycleButton">
      <button>Prev</button>
    </div>
  );
}

function Indicators({ count, currentIndex, onIndicatorClick }) {
  const indicators = [];

  for (let i = 0; i < count; i++) {
    const isActive = currentIndex === i;

    indicators.push(
      <button
        key={i}
        onClick={() => onIndicatorClick(i)}
        className={isActive ? 'active' : ''}>
        {i}
      </button>
    );
  }
  return <div className="indicators">{indicators}</div>;
}

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="container">
        <Banner items={items[currentIndex]} />
        <PrevButton />
        <Indicators
          count={items.length}
          currentIndex={currentIndex}
          onIndicatorClick={setCurrentIndex}
        />
        <NextButton />
      </div>
    </>
  );
}
