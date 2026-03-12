export class RutinasController {
    constructor(service){
        this.service = service
    }

    async getAll(req, res){
        const rutinas = await this.service.getAll()

        if(!rutinas){
            return res.status(500).json({
                "message":"NO HAY RUTINAS"
            })
        }

        res.status(200).json(rutinas)
    }

    async create (req, res){
        const rutina = req.body

        if(!rutina.nombre_rutina || !rutina.id_usuario){
            return res.status(400).json({
                "message":"Ingrese bien los datos"            
            })
        }
        const nuevaRutina = await this.service.create(rutina)
        res.status(201).json(nuevaRutina)        
    }
}