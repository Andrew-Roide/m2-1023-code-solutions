import { useState } from 'react';

function Banner({ items }) {
  return (
    <div>
      <h1 className="banner">{items}</h1>
    </div>
  );
}

function CycleButton({ direction, onClick }) {
  return (
    <div className="cycleButton">
      <button onClick={onClick}>{direction}</button>
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

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="container">
      <Banner items={items[currentIndex]} />
      <CycleButton direction="Prev" onClick={handlePrevClick} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onIndicatorClick={setCurrentIndex}
      />
      <CycleButton direction="Next" onClick={handleNextClick} />
    </div>
  );
}
