import db from '../../config/database.js'
export class DetalleEjerciciosRepository {
    async create (detalleEjercicio){
        const {
            fecha,
            peso,
            repeticiones,
            id_planificador
        } =  detalleEjercicio

        const query = `INSERT INTO detalle_ejercicios 
                        (fecha, peso, repeticiones, id_planificador)
                        VALUES ($1,$2,$3,$4) RETURNING *
                        `
        const params = [fecha, peso, repeticiones, id_planificador]

        const {rows} = await db.query(query, params)

        return rows[0]
    }
}