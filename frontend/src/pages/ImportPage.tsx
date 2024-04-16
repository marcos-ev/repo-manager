// src/pages/ImportPage.tsx
import React, { useState } from 'react';
import axios from 'axios'; // Adicionado para fazer a chamada HTTP ao backend
import Papa from 'papaparse';
import ImportButton from '../components/ImportButton';
import RepoList from '../components/RepoList';

interface Repo {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

// Adicione a URL base do backend como uma constante ou variável de ambiente
const BACKEND_URL = 'http://localhost:3001/api';

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

          // Após processar o CSV, envie os dados para o backend
          axios.post(`${BACKEND_URL}/repos/import`, data)
            .then((response) => {
              console.log('Dados importados para o backend com sucesso:', response.data);
            })
            .catch((error) => {
              console.error('Erro ao importar dados para o backend:', error);
            });

          // Atualize o estado com os dados importados do CSV
          setRepos(data);
        },
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImport} />
      {repos.length > 0 && <RepoList repos={repos} onExport={() => {}} />}
    </div>
  );
};

export default ImportPage;
