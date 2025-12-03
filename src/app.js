import express from "express";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import alunosRoutes from "./routes/alunosRoutes.js";

const app = express();
app.use(express.json());

app.use("/", usuariosRoutes);
app.use("/", alunosRoutes);

export default app;
