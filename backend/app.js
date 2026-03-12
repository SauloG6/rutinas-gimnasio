import express, { json } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { ejerciciosRouter } from './routers/ejercicios.js'
import { usuariosRouter } from './routers/usuarios.js'
import { rutinasRouter } from './routers/rutinas.js'
import { planificadorRouter } from './routers/planificador.js'
import { detallerEjerciciosRouter } from './routers/detalleEjercicios.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/ejercicios', ejerciciosRouter)
app.use('/usuarios', usuariosRouter)
app.use('/rutinas', rutinasRouter)
app.use('/planificador', planificadorRouter)
app.use('/detalles', detallerEjerciciosRouter)

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`server listening on port http://localhost:${PORT} `)
})
