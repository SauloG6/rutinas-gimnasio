export class DetalleEjerciciosController {
    constructor(service) {
        this.service = service
    }

    async create (req, res){
        const detalleEjercicio = req.body
        try{
            if(!detalleEjercicio){
                return res.status(400).json({
                    "message":"Datos incorrectos"
                })
            }
            const nuevoDetalleEjercicio = await this.service.create(detalleEjercicio)
            res.status(201).json(nuevoDetalleEjercicio)
        }catch(error){
            console.error("Error", error.message)
            return res.status(500).json({
               "message": "Error interno al planificar",
                "details": error.message
            })
        }

    }
}