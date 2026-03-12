export class RutinasService{
    constructor(repo){
        this.repo = repo
    }

    async getAll(){
        const rutinas = await this.repo.getAll()
        return rutinas  
    }
    async create (rutina){
        
        const nuevaRutina = await this.repo.create(rutina)
        return nuevaRutina

        //Porque no hago un nuevo objeto de rutina?
        //No hago un nuevo objeto porque en rutina ya van los 
        //atributos de nombre_rutina y id_usuario
    }

}