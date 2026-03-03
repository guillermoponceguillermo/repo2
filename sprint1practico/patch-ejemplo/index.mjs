import patch from 'patch';

//definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';

//obtener el directorio base 
const dirName = patch.dirname(filePath);

//obtener el nombre del archivo
const baseName = patch.basename(filePath, '.txt');

//obtener la extensión del archivo
const extName = patch.extname(filePath);