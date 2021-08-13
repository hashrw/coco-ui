**INTERFAZ COCO**

UI COCO pretende consolidar la validación automática de textos clínicos mediante un codificador de diagnósticos que permita clasificar enfermedades y generar reglas de decisión que permitan a los profesionales médicos realizar un diagnóstico o tratamiento más eficaz, además de lograr grandes beneficios en la gestión clínica. La CIE puede utilizarse para clasificar enfermedades y otros problemas de salud consignados en muchos tipos de registros vitales y de salud. Originalmente su uso se limitó a clasificar las causas de mortalidad tal como se mencionan en los registros de defunción.


Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo.

**Pre-requisitos** para Windows 10.

-Node.js en el sistema operativo de tu PC. https://nodejs.org/en/download/

-Docker para manejar las dependencias de la aplicación. https://docs.docker.com/docker-for-windows/install/

-cliente Git Bash, última versión o superior a 2.29. https://git-scm.com/downloads

-Editor de textos como el IDE recomendado Visual Studio Code. https://code.visualstudio.com/download

**Instalación**

1. Clonar repositorio remoto (aplicación creada mediante create React App) vía SSH o HTTPS. Para clonar vía SSH es necesario generar el par de claves SSH previamente, puede consultar más detalles aquí https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent, o en su defecto, puede clonar el directorio mediante HTTPS teniendo configurado adecuadamente Git para usar el GCM (Git Credential Manager Core), siguiendo las instrucciones del siguiente enlace https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git.

2. Una vez clonado, ejecute en la terminal `npm start` , este comando ejecuta acciones definidas en la sección scripts.start del archivo package.json, es decir, inicia la aplicación en la dirección localhost.

3. Para la instalación de cualquier librería externa que use el gestor de paquetes NPM, puede buscar en la página principal https://www.npmjs.com/ dicho paquete y copiar el nombre y la versión. De modo que para su instalación es necesario abrir el archivo _package.json_ y escribir dicho par entre comillas en la sección de _dependencies: {_ . Si tiene el contenedor ejecutándose, se puede parar con el comando `docker compose stop`. Vuelva a iniciarlo con `docker compose start` tras la instalación. Puede consultar sobre comandos _docker_ en la siguiente sección https://docs.docker.com/compose/reference/ . En la carpeta _images_ puede encontrar una serie de capturas de la interfaz.

4. Para consultar las llamadas y peticiones a los endpoint de datos JSON usados se recomienda el uso del cliente http Postman, en su versión web o escritorio. Consulte más detalles en https://www.postman.com/.

**Construido con**

- **React create App**. Entorno para aprender React, y es la mejor manera de empezar a construir una nueva aplicación de una sola página (_SPA_).

- **Bootstrap**. Framework CSS para el desarrollo frontend muy usado con JavaScript y HTML5.


















