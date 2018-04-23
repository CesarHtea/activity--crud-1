## CIMI GENERAL STEPS

```
1.- Instalar dependencias con npm install

2.- Instalar el router con nom install --save react-router-dom

3.- Conectar a la API

  -Traer la API al Constructor dentro del Componente UsersTable

  -Agregar el ComponentDidMount

  -Importar el Superagent al Componente

  -Instalar el Superagent en terminal con npm install superagent

  -Agregar la Const con la URL de la API const = API_URL= <<URL>>

4.- Configurar las rutas 

  -importar Switch en App.js from react-router-dom

  -Hacer el Switch y Route y las ROutes dentro de él con sus tres parametos: exact, path y component

  -Guardar en index.js todo dentro de <HashRouter></HashRouter>

  -Guardamos el botón <FloatingActionButton></FloatingActionButton dentro de <Link to='/new'></Link>

  -Habilitamos botón See Details <RaisedButton label="See details" /> dentro de <Link to={'/user/'+'user.id'}></Link>

  -Habilitamos la vista del SingleUser

5.-Configurar Nuevo Usuario


```



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- Wa are using [Material UI Framework](https://www.material-ui.com)
- You’ll need to use the [reqres API](https://reqres.in/)

## Steps

**Please, read the API documentation.**

### (1) You’ll need to install React.Router to implement views in the project.

### (2) All React components are done. Please, analize their structure.

### (3) Basic Operations you’ll need to implement:

#### 3.1 List all users from API, use the `UsersTable` component.
#### 3.2 Read a single user. Use `User` component.
#### 3.3 Create a user. Use `NewUser` component.

### (4) Routes that you’ll need to implement:

#### `/` - Home
#### `/users` - Home
#### `/user/:userId` - User view
#### `/new` - New User
