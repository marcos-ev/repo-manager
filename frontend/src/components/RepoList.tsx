// RepoList.tsx
import React, { useState } from 'react';
import './RepoList.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface Repo {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

interface RepoListProps {
  repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  const [filter, setFilter] = useState('');

  const filteredRepos = filter
    ? repos.filter((repo) => repo.name.toLowerCase().includes(filter.toLowerCase()))
    : repos;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <TextField
          className="filter-input"
          variant="outlined"
          size="small"
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Box>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ margin: 'auto', maxWidth: '80%' }}>
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Owner</th>
              <th className="table-header">Stars</th>
            </tr>
          </thead>
          <tbody>
            {filteredRepos.map((repo) => (
              <tr key={repo.id}>
                <td className="table-cell">{repo.name}</td>
                <td className="table-cell">{repo.owner}</td>
                <td className="table-cell">{repo.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default RepoList;
