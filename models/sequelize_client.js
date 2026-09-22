import "dotenv/config";
import { Sequelize } from "sequelize";


const databaseUrl = process.env.PG_URL;

if (!databaseUrl) {
  console.error("❌ Erreur : La variable PG_URL est introuvable !");
  process.exit(1);
}

export const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    // Cette option est indispensable pour que Neon accepte la connexion sécurisée en ligne
    ssl: databaseUrl.includes("localhost") ? false : {
      require: true,
      rejectUnauthorized: false
    }
  },
  define: {
    timestamps: true
  }
});