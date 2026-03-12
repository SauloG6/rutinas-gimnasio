export class EjerciciosServices {
    constructor(repository){
        this.repository = repository
    }

    async getAll(){
        return await this.repository.getAll()
    }

    async create(datos) {
        if (!datos) throw new Error("El nombre es obligatorio"); 
        return await this.repository.create(datos); 
    }
}