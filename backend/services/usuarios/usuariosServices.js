import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export class UsuarioService {
    constructor(repositorio){
        this.repositorio = repositorio
    }

    async create (usuario){
        const saltRounds = 10
        const id_usuario = uuidv4()
        const hash = await bcrypt.hash(usuario.contrasenia, saltRounds)

        const usuarioNuevo = {
            id_usuario: id_usuario,
            nombre_usuario: usuario.nombre_usuario,
            genero: usuario.genero,
            contrasenia: hash,
        }
        return await this.repositorio.create(usuarioNuevo)

        

    }
}