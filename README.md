# childprocess

Mini API utilizando el objeto process, el método fork, con ingreso de variables mediante dotenv, yargs y query parameters.

Para correr la aplicación ejecutar en consola "npm run start".
El puerto se ingresa como parámetro por línea de comando en el script (8080). Si no se ingresa el parámetro, se conecta al puerto 3000. 

Rutas:

/index: retorna información del proceso

/bloq: genera números random entre 0 y 1000 y retorna un objeto que tiene como claves los números que van saliendo, 
y como valores la cantidad de veces que sale cada número. La operación es bloqueante y la cantidad de números a generar se 
ingresa por parámetro query, por ejemplo: /index?cant=40000

/unbloq: genera números random entre 0 y 1000 y retorna un objeto que tiene como claves los números que van saliendo, 
y como valores la cantidad de veces que sale cada número. La operación es NO bloqueante, corre en otro hilo ya que se ejecuta el método fork de child process. 
La cantidad de números a generar se ingresa por la variable de entorno CANT.
