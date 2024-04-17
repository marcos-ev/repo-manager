import React, { useState } from 'react';
import axios from 'axios'; 
import Papa from 'papaparse';
import RepoList from '../components/RepoList';
import Box from '@mui/material/Box';
import logo from '../assets/brx.png'; 

interface Repo {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

const BACKEND_URL = 'http://host.docker.internal:3002/api';

const ImportPage: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      Papa.parse<Repo>(file, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim(),
        complete: (result) => {
          const data: Repo[] = result.data.map((item: any) => ({
            id: parseInt(item.id, 10),
            name: item.name,
            owner: item.owner,
            stars: parseInt(item.stars, 10),
          }));

          axios.post(`${BACKEND_URL}/repos/import`, data)
            .then((response) => {
              console.log('Dados importados para o backend com sucesso:', response.data);
            })
            .catch((error) => {
              console.error('Erro ao importar dados para o backend:', error);
            });

          setRepos(data);
        },
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginTop: '1vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <img  src={logo} className="logo" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <input type="file" onChange={handleImport} />
      </div>
      <div>
        {repos.length > 0 && <RepoList repos={repos} />}
      </div>
    </Box>
  );
};

export default ImportPage;