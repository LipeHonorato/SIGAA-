// import express from 'express';
// import router from './routes.js';
// import sequelize from './config/database.js';
// import cors from 'cors';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// app.use(router);

// await sequelize.sync();
// app.listen(port, function() {
//     console.log('Server is running on port 3000');
// });

import cors from 'cors';
import express from 'express';
import router from './routes.js';
import sequelize from './config/database.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

async function startServer() {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();