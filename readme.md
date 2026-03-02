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
*// 