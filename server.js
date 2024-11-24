import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
const PORT = process.env.PORT || 3000; // Use a porta do ambiente ou 3000 como fallback
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});