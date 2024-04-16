// SearchBar.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '1vh', padding: '2vh' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch} style={{ marginLeft: '10px' }}>Pesquisar</Button>
    </Box>
  );
};

export default SearchBar;