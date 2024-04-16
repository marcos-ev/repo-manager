import React, { useState } from 'react';
import './RepoList.css';

interface Repo {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

interface RepoListProps {
  repos: Repo[];
  onExport: () => void;
}

const RepoList: React.FC<RepoListProps> = ({ repos, onExport }) => {
  const [filter, setFilter] = useState('');

  const filteredRepos = filter
    ? repos.filter((repo) => repo.name.toLowerCase().includes(filter.toLowerCase()))
    : repos;

  return (
    <div>
      <div className="search-bar-container">
        <input
          className="filter-input"
          type="text"
          placeholder="Filter repositories by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="export-button-container"> {/* Novo container para o botão de exportação */}
        <button className="export-button" onClick={onExport}>Export to CSV</button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ margin: 'auto', maxWidth: '80%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Stars</th>
            </tr>
          </thead>
          <tbody>
            {filteredRepos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.owner}</td>
                <td>{repo.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepoList;
