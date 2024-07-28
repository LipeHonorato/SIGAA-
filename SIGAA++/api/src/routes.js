// import express from 'express';
// import usuarioRoutes from './routes/usuarioRoutes.js';
// import disciplinaRoutes from './routes/disciplinaRoutes.js';
// import turmaRoutes from './routes/turmaRoutes.js';
// import discenteTurmaRoutes from './routes/discenteTurmaRoutes.js';

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({
//         message: 'API online!',
//         statusCode: 200
//     });
// });

// app.use('/api', usuarioRoutes);
// app.use('/api', disciplinaRoutes);
// app.use('/api', turmaRoutes);
// app.use('/api', discenteTurmaRoutes);

// export default app;


import { Router } from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import disciplinaRoutes from './routes/disciplinaRoutes.js';
import turmaRoutes from './routes/turmaRoutes.js';
import discenteTurmaRoutes from './routes/discenteTurmaRoutes.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API online!',
    statusCode: 200
  });
});

router.use('/api', usuarioRoutes);
router.use('/api', disciplinaRoutes);
router.use('/api', turmaRoutes);
router.use('/api', discenteTurmaRoutes);

export default router;
