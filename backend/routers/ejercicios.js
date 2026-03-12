import { Router } from "express";
import { EjerciciosControllers } from "../controllers/ejercicios/ejerciciosController.js";
import { EjerciciosRepository } from "../repositories/ejercicios/ejerciciosRepository.js";
import { EjerciciosServices } from "../services/ejercicios/ejerciciosService.js";
//Inyeccion de dependencias
const repo = new EjerciciosRepository()
const service = new EjerciciosServices(repo)
const ejerciciosController = new EjerciciosControllers(service)

export const ejerciciosRouter = Router()

ejerciciosRouter.post('/', (req,res)=>ejerciciosController.create(req, res))
ejerciciosRouter.get('/', (req, res) => ejerciciosController.getAll(req, res))