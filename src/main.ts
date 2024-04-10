import express  from 'express'
import { Router, Request, Response } from 'express';
import RepositorioUsuarioMemoria from './drivers/memoria/RepositorioUsuarioMemoria';
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario';
import RegistrarUsuarioController from './adapters/RegistrarUsuarioController';
import RepositorioUsuarioPrisma from './drivers/prisma/RepositorioUsuarioPrisma';
import ConsultarUsuariosController from './adapters/ConsultUsuariosController';
import ConsultarUsuarios from './core/usuario/service/ConsultarUsuarios';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//onst repositorioUsuario = new RepositorioUsuarioMemoria([]);
const repositorioUsuario = new RepositorioUsuarioPrisma();
const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario);
new ConsultarUsuariosController(app,consultarUsuarios)
new RegistrarUsuarioController(app ,registrarUsuario)



app.listen(3000,()=>console.log('Server running on port 3000'))