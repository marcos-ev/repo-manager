import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import repoRoutes from './routes/reporoutes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Usar as rotas definidas no arquivo repoRoutes.ts
app.use('/api', repoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
