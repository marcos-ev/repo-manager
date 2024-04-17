import express from 'express';
import { importRepos } from '../controllers/repocontroller';

const router = express.Router();

// Rota para verificar se a API está funcionando
router.get('/api', (req, res) => {
    res.status(200).send('API is working');
});

// Rota para importar repositórios
router.post('/repos/import', importRepos);

export default router;
