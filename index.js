import 'dotenv/config';  // Charger les variables d'environnement
import express from 'express';  // Importer Express
import  router  from "./route/index_router.js";

const app = express();


app.use(express.static("./public"));

app.set('view engine', 'ejs');
app.set('views', './views'); // Assure-toi que le dossier 'views' existe à la racine de ton projet

const PORT = process.env.PORT 
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 reservia app started at http://localhost:${PORT}`);
})