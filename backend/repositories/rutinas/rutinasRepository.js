import { IBaseRutinas } from "./IBaseRutinas.js";
import db from "../../config/database.js";

export class RutinasRepository extends IBaseRutinas{
    async getAll(){
        const {rows} = await db.query('SELECT * FROM rutinas') 
        return rows
    }
    
    async create (rutina){
        const {
            nombre_rutina,
            id_usuario
        } = rutina

        const query = `INSERT INTO rutinas (nombre_rutina, id_rutina)
                        VALUES ($1, $2)
                        RETURNING *`
        const params = [nombre_rutina, id_usuario]
        const {rows} =  await db.query(query, params)
        return rows[0]
    }
}