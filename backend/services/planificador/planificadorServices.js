import { v4 as uuv4 } from "uuid"

export class PlanificadorService{
    constructor(repo){
        this.repo = repo
    }

    async getById(id_rutina){
        return await this.repo.getById(id_rutina)
    }

    async create (plan) {
        if(!plan.id_rutina || !plan.id_ejercicio){
            throw new Error ("Datos incorrectos")
        }
        //Envio el objeto completo
        return await this.repo.create(plan)
    }
}