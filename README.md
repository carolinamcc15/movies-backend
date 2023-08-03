# :zap: TalleresT Test - Movies Backend
Proyecto para API de prueba técnica TalleresT.
***
## :computer: Instalación
Como requisito para el proyecto, se debe tener **PostgreSQL** y **Node** instalado en la computadora.

### Base de datos
1. Crear una base de datos en el gestor de bases de datos de PostgreSQL.
2. Ejecutar el archivo [script.sql](https://github.com/carolinamcc15/movies-backend/blob/master/script.sql) para crear las tablas necesarias e insertar las opciones.

### Proyecto
1. En la ruta raíz del proyecto, ejecutar el comando `npm install`, para instalar las dependencias.
2. También en la ruta raíz, crea un archivo llamado `.env`, para almacenar las variables de entorno:
  ```
  PORT = 3010
  
  DATABASE_NAME = ""
  DATABASE_USERNAME = ""
  DATABASE_PASSWORD = ""
  ```
3. Ejecuta la aplicación por medio del comando `npm run start`. Este será accesible en el puerto especificado en las variables de entorno.
***
## :globe_with_meridians: API Endpoints
### Películas
`GET /movies` -> Obtiene todas las películas y es posible filtrarlas por año con el query param *year*.  
`POST /movies` -> Permite crear una película. Recibe los campos *name, duration, budget y date*.
### Opciones
`GET /options` -> Obtiene todas las opciones.  
`PUT /options/:id/toggleDisabled` -> Permite cambiar el valor del campo *disabled*.
***
## :pushpin: Notas
- Se utilizó `sequelize` como ORM para Nodejs con el fin de manipular la bases de datos de una manera más sencilla.
