import { Router } from "express";
import { DetalleEjerciciosController } from "../controllers/detalle_ejercicios/detalleEjerciciosController.js";
import { DetalleEjerciciosRepository } from "../repositories/detalles_ejercicios/detalleEjerciciosRepository.js";
import { DetalleEjerciciosServices } from "../services/detalle_ejercicios/detalleEjerciciosService.js";

const repo = new DetalleEjerciciosRepository()
const service = new DetalleEjerciciosServices(repo)
const controlador = new DetalleEjerciciosController(service)

export const detallerEjerciciosRouter = Router()

detallerEjerciciosRouter.post('/', (req, res) => controlador.create(req, res))