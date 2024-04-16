// controller/repocontroller.ts
import { Request, Response } from 'express';
import { getConnection } from '../config/database';
import sendToQueue from '../utils/messageProducer';

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
    
    for (const repo of repos) {
      await conn.query(
        'INSERT INTO repos (id, name, owner, stars) VALUES (?, ?, ?, ?)',
        [repo.id, repo.name, repo.owner, repo.stars]
      );
    }
    
    await sendToQueue(repos);

    res.status(200).send({ message: 'Repositórios importados com sucesso. Processando em segundo plano.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao importar repositórios.' });
  }
};
