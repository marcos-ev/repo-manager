import React, { useState } from 'react';
import axios from 'axios';
import { unparse } from 'papaparse';
import SearchBar from '../components/SearchBar';
import RepoList from '../components/RepoList';
import { Link } from 'react-router-dom';
import './Home.css'; // Importe o arquivo CSS do Home

interface Repo {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

const Home: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleSearch = async (username: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repos = response.data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        stars: repo.stargazers_count
      }));
      setRepos(repos);
    } catch (error) {
      console.error('Failed to fetch repositories', error);
    }
  };

  const handleExport = () => {
    const csv = unparse(repos);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'github_repos.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {repos.length > 0 && <RepoList repos={repos} onExport={handleExport} />}
      <div className="import-button-container"> {/* Centralize o botão de importação */}
        <Link to="/import">
          <button>Importação</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
