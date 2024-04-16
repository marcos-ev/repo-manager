const express = require('express');
import { importRepos } from '../controllers/repocontroller';

const router = express.Router();

router.post('/repos/import', importRepos);

export default router;
