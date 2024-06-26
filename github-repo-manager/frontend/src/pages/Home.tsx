// src/pages/Home.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { unparse } from 'papaparse';
import SearchBar from '../components/SearchBar';
import RepoList from '../components/RepoList';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css';
import logo from '../assets/brx.png'; 


interface Repo {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

const Home: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [showExportButton, setShowExportButton] = useState(false);

  const handleSearch = async (username: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repos = response.data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        stars: repo.stargazers_count
      }));
      if (repos.length === 0) {
        console.log("Nenhum repositório encontrado.");
      } else {
        setRepos(repos);
        setShowExportButton(true); // Mostrar o botão de exportar quando os repositórios forem carregados
      }
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

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }} className="logo-container">
      <a href="https://www.brx.com.br/">
        <img src={logo} className="logo" />
      </a>
    </div>


      <SearchBar onSearch={handleSearch} />
      {repos.length > 0 && <RepoList repos={repos} />}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1vh', marginBottom: '3vh' }}>
        <Link to="/import">
          <Button variant="contained">Importação</Button>
        </Link>
        {showExportButton && (
          <Button variant="contained" onClick={handleExport} style={{ marginLeft: '10px' }}>
            Exportar para CSV
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
