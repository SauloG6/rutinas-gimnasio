import {Router} from 'express'
import { RutinasController } from '../controllers/rutinas/rutinasController.js'
import { RutinasRepository } from '../repositories/rutinas/rutinasRepository.js'
import { RutinasService } from '../services/rutinas/rutinasService.js'

const repo = new RutinasRepository()
const service = new RutinasService(repo)
const controller = new RutinasController(service)


export const rutinasRouter = Router()

rutinasRouter.get('/',(req,res) => controller.getAll(req,res))
rutinasRouter.post('/', (req, res) => controller.create(req, res))
