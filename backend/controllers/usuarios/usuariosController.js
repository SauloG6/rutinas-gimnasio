export class UsuarioController {
    constructor(service) {
        this.service = service;
    }

    create = async (req, res) => { 
        try {
            const usuario = req.body;

            if (!usuario.nombre_usuario || !usuario.contrasenia) {
                return res.status(400).json({
                    "message": "Faltan campos obligatorios (nombre o contraseña)"
                });
            }
            const nuevoUsuario = await this.service.create(usuario);
            return res.status(201).json(nuevoUsuario);

        } catch (error) {
            console.error("Error en el búnker:", error);
            return res.status(500).json({
                "message": "Error al crear el usuario",
                "details": error.message
            });
        }
    }
}