# Cómo configurar ApiGee    

Para configurar ApiGee y exponer una API NodeJS en ella, hay que seguir estos pasos:

1. Crear una cuenta en Apigee y acceder a la consola de administración. 

2. Crear una nueva API en Apigee. En la sección "API Proxy", hacer clic en "Create new" Luego seleccionamos Reverse proxy(most common), ingresar el nombre de la API y la URL base de la API y el target(Existing API) que se desea exponer en Apigee.

3. Configurar la política de seguridad para la API. En la sección "proxies", seleccionar la API creada y hacer clic en "edit". En la pestaña "developer", seleccionar la opción "add policy" y agregar una política de seguridad OAuth 2.0. En la configuración de la política, ingresar la información necesaria para conectarse al servidor de autenticación OAuth 2.0 que se utilizará para proteger la API.

4. Configurar la transformación de la petición y respuesta. En la pestaña "developer", se puede agregar políticas de transformación de la petición y respuesta según las necesidades de la API. Por ejemplo, si la API espera recibir datos en formato JSON y la API expuesta en Apigee espera recibir datos en formato XML, se puede agregar una política de transformación para convertir los datos de JSON a XML.

5. Desplegar la API en Apigee. En la sección "deploy", seleccionar la API creada y hacer clic en "deploy". Luego, seleccionar el entorno de destino para el despliegue (por ejemplo, entorno de prueba, producción) y hacer clic en "deploy".

6. Probar la API. En la sección "test", se puede probar la API utilizando la herramienta de prueba integrada en Apigee. Ingresar los parámetros de la petición y enviarla a la API. Si la petición se procesa correctamente, se debe recibir una respuesta de la API Java en el formato transformado según las políticas de transformación definidas en Apigee.