import express from 'express';
import router from './routers';

const app = express();
const PORT = process.env.PORT || 3000;

// Usa o roteador para todas as rotas
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
