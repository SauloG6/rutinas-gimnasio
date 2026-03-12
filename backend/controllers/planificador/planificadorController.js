export class PlanificadorController {
    constructor(service){
        this.service = service
    }

    async getById(req, res){

        const {id_rutina} = req.params
        const plan = await this.service.getById(id_rutina)

        if(plan.length === 0){
            return res.status(200).json([])
        }

        res.status(200).json(plan)
    }

    async create (req, res) {
        //1. Obtengo el objeto que envia la peticion 
        const plan = req.body
        try{
        //2. Envio el objeto al servicio
            const nuevoPlan = await this.service.create(plan)
        //3. Validar si existe datos en el objeto o que no este vacio o sea null
            if(!nuevoPlan){
                return res.status(400).json({
                    "message":"No se puede crear la rutina"
                })
            }
        //4.Retornar el objeto creada
            res.status(201).json(nuevoPlan)
        }catch(error){
            console.error("Error:", error.message);
            return res.status(500).json({
                "message": "Error interno al planificar",
                "details": error.message
            })
        }
    }
}