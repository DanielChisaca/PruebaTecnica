
# Api Store

Una aplicación para la busqueda de productos, agregar, y eliminación de estos.

# Dependencias

* *Express*

Express es un framework de Node.js que se utiliza para crear aplicaciones web y API RESTful de manera más sencilla y con menos código. Proporciona una amplia gama de funciones y características para simplificar el proceso de desarrollo web, como el manejo de solicitudes y respuestas HTTP, el enrutamiento de URL, el manejo de cookies, la integración con plantillas de vista, entre otros.

Express es altamente escalable, lo que significa que es capaz de manejar una gran cantidad de solicitudes simultáneas. Además, es modular y permite a los desarrolladores integrar fácilmente otras bibliotecas y herramientas en sus aplicaciones.

En resumen, Express es una herramienta fundamental para desarrollar aplicaciones web con Node.js de manera rápida y eficiente.

* *Jsonwebtoken*

Jsonwebtoken es una librería de JavaScript que se utiliza para crear y verificar tokens de autenticación JWT (JSON Web Tokens). Los tokens JWT son una forma segura de transmitir información entre dos partes, como una aplicación cliente y un servidor, de forma que la información en el token no pueda ser modificada por un tercero.

La librería jsonwebtoken permite a los desarrolladores generar, firmar y verificar tokens JWT. Estos tokens están compuestos por tres partes: un encabezado, una carga útil (payload) y una firma. El encabezado incluye información sobre el tipo de token y el algoritmo de cifrado utilizado para firmarlo. La carga útil es donde se incluye la información que se quiere transmitir, como el nombre de usuario o la fecha de expiración del token. La firma es una clave secreta que se utiliza para garantizar que el token no ha sido manipulado.

La librería jsonwebtoken es muy utilizada en aplicaciones web para autenticar a los usuarios y permitirles acceder a recursos protegidos en el servidor.

* *Nodemon*

Nodemon es una herramienta de línea de comandos para Node.js que se utiliza para reiniciar automáticamente la aplicación cuando se detectan cambios en el código fuente. Esto facilita el proceso de desarrollo de aplicaciones y permite a los desarrolladores ver rápidamente los cambios que han hecho sin tener que reiniciar manualmente la aplicación.

* *swagger-ui-express*

Swagger UI es una herramienta para generar documentación interactiva para una API que se ha documentado usando el estándar OpenAPI. Swagger UI Express es una biblioteca de middleware para Node.js que proporciona una manera fácil de servir la documentación generada por Swagger UI a través de una aplicación Express.

# Entorno de ejecución:

La aplicación esta creada en node js.

Para instalar npm, se debe seguir los siguientes pasos:

    Descarga e instala Node.js desde la página oficial: https://nodejs.org

    Una vez instalado Node.js, npm debería estar disponible en tu sistema. Para verificar si está instalado, puedes abrir la terminal (en Windows, el símbolo del sistema o PowerShell) y escribir el siguiente comando:

    npm -v

    Si npm está instalado correctamente, deberías ver la versión de npm que está instalada en tu sistema.

Si npm no está instalado, asegúrate de haber instalado Node.js correctamente y vuelve a intentar. Si sigues teniendo problemas, puedes buscar más información en la documentación oficial de Node.js o en la comunidad de desarrolladores de Node.js.

Para instalar las dependencias que se encuentran en el archivo package.json, puedes seguir los siguientes pasos:

    Abre una terminal en la raíz del proyecto.
    Ejecuta el comando npm install.

Este comando instalará todas las dependencias que se encuentran en el archivo package.json. Las dependencias se descargarán desde el registro de paquetes de npm y se instalarán en el directorio node_modules en la raíz del proyecto.

# Parámetros de configuración:

La url base es http://localhost:3001/ se debe ejecutar primero el api localhost:3000/api/login

Para poder ver el swagger se ingresa a la siguiente url http://localhost:3001/api-docs/


# Instrucciones de ejecución y prueba:

Para ejecutar el proyecto nos ubicamos en la carpeta del proyecto y colocamos el siguiente comando:

nodemon src/app.js

1. Api generación del token.

* Abrimos postman.
* Damos clic en importar
* Clic en Raw test
* Pegamos el siguientee curl

curl --location 'localhost:3001/api/login' \
--header 'Content-Type: application/json' \
--data '{
  "username": "user1",
  "password": "pass1"
}
'

* Damos clic en Send y se genera el response.

Se coloca el username y la password autorizada, el sistema valida los datos. 

Esta genera un token se copia y se pega en los headers se da clic en key-value Edit y se coloca lo siguiente.

Authorization:Bearer {token}

La aplicación no valida el token ya que no se genero una conexión a la base de datos, si se genera la conexión se coloca la validación del tiempo.


2. Api Busqueda de productos.

* Abrimos postman.
* Damos clic en importar
* Clic en Raw test
* Pegamos el siguiente curl:

curl --location 'http://localhost:3001/api/products' \
--header 'Authorization: Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjgyODIzNTUzfQ.A4hIOWQBGErVuUKONBJn95zdkjUZk49gkrP-Rt_xe4U}'

* Damos clic en Send y se genera el response.

3. Api Creación de producto

* Abrimos postman.
* Damos clic en importar
* Clic en Raw test
* Pegamos el siguiente curl:

curl --location 'localhost:3001/api/products/' \
--header 'Authorization: Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjgyODA1MzU2fQ.pJ03RGnrvYiiAghTAgcgBnwFAjoeI6yJLer0Nt6KWik"' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Producto de prueba",
    "description": "Este es un producto de prueba",
    "price": 10.99,
    "quantity": 100
}
'

* Damos clic en Send y se genera el response.

4. Api Busqueda de productos por id

* Abrimos postman.
* Damos clic en importar
* Clic en Raw test
* Editamos el siguiente curl, en la url después de products/ colocamos el id anterior:

curl --location 'http://localhost:3001/api/products/1682825585868' \
--header 'Authorization: Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjgyODAyNzMxfQ.HNv4UaV3lHpFV0Rh6vqA0XDAMDIr8Z1uEDfI5vWmJWo}'

* Damos clic en Send y se genera el response.
* Nota: El id se debe cambiar por el que se genero en el Api Creación de producto ya que no hay base de datos y se guarda en memoria

5. Api Edición del producto por id

* Abrimos postman.
* Damos clic en importar
* Clic en Raw test
* Editamos el siguiente curl, en la url después de products/ colocamos el id anterior:

curl --location --request PUT 'http://localhost:3001/api/products/1682810688880' \
--header 'Authorization: Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjgyODA0NzUyfQ.r7x3vxQ0ATmvLDtFlkYK7LHLWF3Qmp7WMXH_XYKtSTo}' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Producto de prueba",
    "description": "Este es un producto de prueba",
    "price": 10.99,
    "quantity": 100
}
'

* Damos clic en Send y se genera el response.
* Nota: El id se debe cambiar por el que se genero en el Api Creación de producto ya que no hay base de datos y se guarda en memoria

6. Api Eliminación del producto por id

* Abrimos postman.
* Damos clic en importar
* Clic en Raw test
* Editamos el siguiente curl, en la url después de products/ colocamos el id anterior:

curl --location --request DELETE 'http://localhost:3001/api/products/1682826517995' \
--header 'Authorization: Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjgyODAyNzMxfQ.HNv4UaV3lHpFV0Rh6vqA0XDAMDIr8Z1uEDfI5vWmJWo}'

* Damos clic en Send y se genera el response.
* Nota: El id se debe cambiar por el que se genero en el Api Creación de producto ya que no hay base de datos y se guarda en memoria
