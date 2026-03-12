import db from '../../config/database.js'
export class PlanificadorRepository {

    async getById(id_rutina){
        const query = 
            `SELECT R.nombre_rutina, E.nombre_ejercicio, P.id_rutina, P.id_ejercicio FROM planificador P
            JOIN rutinas R
            ON P.id_rutina = R.id_rutina
            JOIN ejercicios E
            ON P.id_ejercicio = E.id_ejercicio
            WHERE P.id_rutina = $1`

        const param = [id_rutina]

        const {rows} = await db.query(query, param)
        return rows
    }
    async create(plan){
        const {
            id_rutina,
            id_ejercicio,
            series
        } = plan

        const query = `INSERT INTO planificador (id_rutina, id_ejercicio)
                        VALUES ($1, $2) RETURNING *`
        const params = [id_rutina, id_ejercicio, series]
        const {rows} = await db.query(query, params)
        return rows[0]
    }
}