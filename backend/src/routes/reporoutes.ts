import express from 'express';
import { importRepos } from '../controllers/repocontroller';

const router = express.Router();

// Rota para importar repositórios
router.post('/repos/import', importRepos);

export default router;
