**INTERFAZ COCO**

UI COCO pretende consolidar la validación automática de textos clínicos para generar reglas de decisión que permitan a los profesionales médicos realizar un diagnóstico o tratamiento más eficaz, además de lograr grandes beneficios en la gestión clínica.


Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo.

**Pre-requisitos** para Windows 10.

-Node.js en el sistema operativo de tu PC. https://nodejs.org/en/download/

-Docker para manejar las dependencias de la aplicación. https://docs.docker.com/docker-for-windows/install/

-cliente Git Bash, última versión o superior a 2.29. https://git-scm.com/downloads

-Editor de textos como el IDE recomendado Visual Studio Code. https://code.visualstudio.com/download

**Instalación**

1. Clonar repositorio remoto (aplicación creada mediante create React App) vía SSH o HTTPS. Para clonar vía SSH es necesario generar el par de claves SSH previamente, puede consultar más detalles aquí https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent, o en su defecto, puede clonar el directorio mediante HTTPS teniendo configurado adecuadamente Git para usar el GCM (Git Credential Manager Core), siguiendo las instrucciones del siguiente enlace https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git.

2. Una vez clonado, ejecute en la terminal `npm start` , este comando ejecuta acciones definidas en la sección scripts.start del archivo package.json, es decir, inicia la aplicación en la dirección localhost. En la carpeta images puede encontrar una serie de capturas de la interfaz.



3. Para la instalación de cualquier librería externa que use el gestor de paquetes NPM, puede buscar en la página principal https://www.npmjs.com/ dicho paquete y copiar el nombre y la versión. De modo que para su instalación es necesario abrir el archivo _package.json_ y escribir dicho par entre comillas en la sección de _dependencies: {_ . Si tiene el contenedor ejecutándose, se puede parar con el comando `docker compose down`. Vuelva a iniciarlo con `docker compose up` tras la instalación.