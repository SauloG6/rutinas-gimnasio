import { IBaseEjercicios } from "./IBaseEjercicios.js";
import db from '../../config/database.js'

export class EjerciciosRepository extends IBaseEjercicios { 

    async getAll (){

        const {result} = await db.query('SELECT * FROM ejercicios')
        return result
    }

    async create (nombre_ejercicio){
        const query = `INSERT INTO 
                        ejercicios (nombre_ejercicio)
                        VALUES ($1) RETURNING *`
        const params = [nombre_ejercicio]
        //Esta linea es un objeto "db.query(query,params)"
        //Llamado QueryResult.
        const {rows} = await db.query(query,params)

        return rows[0]
    }
}