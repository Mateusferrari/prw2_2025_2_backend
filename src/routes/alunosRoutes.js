import express from "express";
import { authenticate } from "../controllers/authMiddleware.js";
import {
  listar,
  listarPorId,
  listarMedias,
  listarAprovados,
  criar,
  atualizar,
  excluir
} from "../controllers/alunosController.js";

const router = express.Router();

router.get("/alunos", authenticate, listar);
router.get("/alunos/:id", authenticate, listarPorId);
router.get("/alunos/medias", authenticate, listarMedias);
router.get("/alunos/aprovados", authenticate, listarAprovados);
router.post("/alunos", authenticate, criar);
router.put("/alunos/:id", authenticate, atualizar);
router.delete("/alunos/:id", authenticate, excluir);

export default router;
