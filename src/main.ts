import express  from 'express'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario';
import ConsultarUsuarios from './core/usuario/service/ConsultarUsuarios';
import RegistrarUsuarioController from './adapters/RegistrarUsuarioController';
import ConsultarUsuariosController from './adapters/ConsultUsuariosController';
import RepositorioUsuarioPrisma from './drivers/prisma/RepositorioUsuarioPrisma';
import RepositorioUsuarioMemoria from './drivers/memoria/RepositorioUsuarioMemoria';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//const repositorioUsuario = new RepositorioUsuarioMemoria([]);
const repositorioUsuario = new RepositorioUsuarioPrisma();
const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario);
new ConsultarUsuariosController(app,consultarUsuarios)
new RegistrarUsuarioController(app ,registrarUsuario)



app.listen(3000,()=>console.log('Server running on port 3000'))