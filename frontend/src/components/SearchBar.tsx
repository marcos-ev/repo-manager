import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;
