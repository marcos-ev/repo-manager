import { Request, Response } from 'express';
import { getConnection } from '../config/database';

// Tipo de dados para o repositório conforme esperado do frontend
interface RepoData {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

export const importRepos = async (req: Request, res: Response) => {
  const repos: RepoData[] = req.body;

  try {
    const conn = await getConnection();
    
    // Inserir todos os repositórios na tabela
    for (const repo of repos) {
      await conn.query(
        'INSERT INTO repos (id, name, owner, stars) VALUES (?, ?, ?, ?)',
        [repo.id, repo.name, repo.owner, repo.stars]
      );
    }
    res.status(200).send({ message: 'Repositórios importados com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao importar repositórios.' });
  }
};
