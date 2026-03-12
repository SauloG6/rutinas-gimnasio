import { IBaseUsuarios } from "./IBaseUsuarios.js";
import db from "../../config/database.js";

export class UsuariosRepository extends IBaseUsuarios{
    async create (usuario){
        const {
            id_usuario,
            nombre_usuario,
            genero,
            contrasenia
        } = usuario

        const query = `INSERT INTO usuarios
                        (id_usuario, nombre_usuario, genero, contrasenia)
                        VALUES($1,$2,$3,$4) RETURNING
                        id_usuario, nombre_usuario, genero`
        const params = [id_usuario,nombre_usuario,genero,contrasenia]
        const {rows} = await db.query(query, params) 
        return rows[0]
    }
}