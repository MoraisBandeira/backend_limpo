import express  from 'express';

import RegistrarUsuario from './core/usuario/service/RegistrarUsuario';
import ConsultarUsuarios from './core/usuario/service/ConsultarUsuarios';
import BuscarUsuarioPorId from './core/usuario/service/BuscarUsuarioPorId';

import UsuarioPorIdController from './adapters/UsuarioPorIdController';
import RegistrarUsuarioController from './adapters/RegistrarUsuarioController';
import ConsultarUsuariosController from './adapters/ConsultUsuariosController';

import AtualizarUsuario from './core/usuario/service/AtualizarUsuario';
import AtualizarUsuarioController from './adapters/AtualizarUsuarioController';
import RepositorioUsuarioPrisma from './drivers/prisma/RepositorioUsuarioPrisma';
import RepositorioUsuarioMemoria from './drivers/memoria/RepositorioUsuarioMemoria';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//const repositorioUsuario = new RepositorioUsuarioMemoria([]);
const repositorioUsuario = new RepositorioUsuarioPrisma();
const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
const atualizarUsuario = new AtualizarUsuario(repositorioUsuario);
const buscarUsuarioId = new BuscarUsuarioPorId(repositorioUsuario);
const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario);
new UsuarioPorIdController(app,buscarUsuarioId)
new AtualizarUsuarioController(app,atualizarUsuario)
new RegistrarUsuarioController(app ,registrarUsuario)
new ConsultarUsuariosController(app,consultarUsuarios)

app.listen(3000,()=>console.log('Server running on port 3000'))