//*para nodo tecnologico *//
//* todo en la consola de power shell como adm del mismo
//* git status para ver el estado de los cambios de los archivos modificados en este caso en visualestudiocoode y nos dice que hay en rojo para subir o actualizar
//* git add. para dejar los archivos listos para subir y nos permite agregar los cambios
// git status nos permite ver en verde que esta listo para subir los cmbios
//*git commit -m "aqui va un msjs" para subir 
//*git push por ultimo y sube todo con la contrasenia antes creada en la llave
//*por ultimo actualizamos nuestro repo en github y estaran los archivos nuevos o modificados. 
//* tambien se pueden crear archivos, carpetas o gnerar datos en la pc y se subiran en el repositorio o de manera automatica o nosotros con el metodo antes mencionado.

instrucciones del codigo dado en el tp1 

//* import http from 'http'; (aqui llama a las herramientas de html)

const hostname = '127.0.0.1'; (aqui le dice a todas las solicitudes se hagan a esta ip)
const port = 3000; ( es el puerto de cimunicacion del ip del server creado anteriormente, es un puerto para pruebas)

const server = http.createServer((req, res) => {         (aqui se ejecutan las las solicitudes cada vez que las hacemos al server creado( req son solicitudes del cliente, lo que el user pide y res es lo que respondemos de este lado))
  res.statusCode = 200;                                    (aqui die todo salio bien pidieron y se respondio)
  res.setHeader('Content-Type', 'text/plain');                (aqui avisa que solo dara texto plano nada de pdf o archivos nada de nada)
  res.end('Hola Mundo\n');       (aqui se cierra el mensaje responde y cierra el ciclo)
});

server.listen(port, hostname, () => {       (aqui esta el server encendido escuchando todo del puerto3000)
  console.log(`Server running at http://${hostname}:${port}/`);
});
//////////no olvidar ejecutar el codigo NOde server.js en la terminal del pc, sino no andara el mismo.////////////////

*// aqui creo el archivo package.jason que sirve para importar 
Propiedad	Función
name	El nombre de tu proyecto (sin espacios).
version	El número de versión actual.
type": "module	¡Esta es la clave! Le dice a Node: "Usa el estándar moderno de JavaScript 
(donde usamos import y export)". Sin esto, el código que me pasaste fallará.
main	Indica cuál es el archivo principal que arranca todo.
su codigo seria asi >
{
  "name": "mi-primer-servidor",
  "version": "1.0.0",
  "type": "module",
  "main": "app.js"
}
para que sirve: 
Ese archivo es el corazón de cualquier proyecto en Node.js. 
Sin él, Node no sabe cómo tratar tu código ni qué herramientas externas necesitas.

Para que tu código funcione con la palabra import, Node necesita 
saber que estás usando Módulos de JavaScript (ESM). Si no creas este archivo, 
Node intentará leerlo de la forma antigua (require) y te lanzará un error.