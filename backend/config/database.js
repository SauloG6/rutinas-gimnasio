import pg from 'pg'
import 'dotenv/config'

const {Pool} = pg

export class DataBase {
    constructor(){
        //Verificamos que si existe una instancia de la
        //base de datos retorne la misma instancia

        if(DataBase.instance){
            return DataBase.instance
        }

        this.pool = new Pool ({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
        })

        DataBase.instance = this
    }

    async query (text, params){
        return await this.pool.query(text,params)
    }
}

const db = new DataBase()
export default db