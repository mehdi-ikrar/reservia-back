import 'dotenv/config';  // Charger les variables d'environnement
import express from 'express';  // Importer Express
import  router  from "./route/index_router.js";
import cors from 'cors';  // Importer CORS

const app = express();

  
app.use(express.static("./public"));

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173','https://reservia-front.onrender.com'],
  credentials: true,
}));

const PORT = process.env.PORT 
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 reservia app started at http://localhost:${PORT}`);
})