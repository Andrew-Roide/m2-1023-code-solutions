import { useState } from 'react';

function FilterInput({ onFilterChange }) {
  return <input type="text" onChange={(e) => onFilterChange(e.target.value)} />;
}

function DisplayList({ filteredItems }) {
  return (
    <div>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items match.</p>
      )}
    </div>
  );
}

export default function SearchableList({ quotes }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleFilterChange(quotes) {
    setSearchTerm(quotes);
  }

  const filteredItems = quotes.filter((quotes) =>
    quotes.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="search-bar">
      <FilterInput onFilterChange={handleFilterChange} />
      <DisplayList filteredItems={filteredItems} />
    </div>
  );
}
