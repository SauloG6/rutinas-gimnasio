export class DetalleEjerciciosServices {
    constructor(repo) {
        this.repo = repo
    }

    async create (detalleEjercicio){
        
        return await this.repo.create(detalleEjercicio)
    }
}