export class EjerciciosControllers{

    constructor(service){
        this.service = service
    }

    async getAll(req, res){
        const result = await this.service.getAll()
        if (result.lengths === 0){
            res.status(400).json("no existen registros")
        }
        res.status(200).json(result)
    }
    async create (req, res){
        const datosEjercicio = req.body         
        try {
            const nuevoEjercicio = await this.service.create(datosEjercicio.nombre_ejercicio)
            res.status(201).json(nuevoEjercicio)
        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor', error })
        }
    }
}