import { Router } from "express";
import { UsuarioController } from "../controllers/usuarios/usuariosController.js";
import { UsuarioService } from "../services/usuarios/usuariosServices.js";
import { UsuariosRepository } from "../repositories/usuarios/UsuariosRepository.js";
export const usuariosRouter = Router()

const repo = new UsuariosRepository()
const service = new UsuarioService(repo)
const controller = new UsuarioController(service)

usuariosRouter.post('/', (req, res) => controller.create(req,res))