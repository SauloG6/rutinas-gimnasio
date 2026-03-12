import { Router } from "express";
import { PlanificadorController } from "../controllers/planificador/planificadorController.js";
import { PlanificadorRepository } from "../repositories/planificador/planificadorRepository.js";
import { PlanificadorService } from "../services/planificador/planificadorServices.js";

const repo = new PlanificadorRepository()
const service = new PlanificadorService(repo)
const controller = new PlanificadorController(service)

export const planificadorRouter = Router() 

planificadorRouter.post('/', (req, res) => controller.create(req, res))
planificadorRouter.get('/:id_rutina', (req,res) => controller.getById(req, res))