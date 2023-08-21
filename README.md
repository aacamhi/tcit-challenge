# tcit-challenge

Challenge desarrollado por Ariel Camhi en el contexto de su postulación a TCIT.

## Prerequisitos
* En paréntesis está la versión que se utilizó para el desarrollo de este proyecto, pero es probable que versiones anteriores también funcionen en algunos casos.
- ruby (3.2.2)
- rails (7.0.7)
- node (18.16.1)
- Servidor de base de datos postgres corriendo en el puerto 5432

## Instrucciones para levantar el backend
~~~
cd back
~~~
~~~
bundle install
~~~
~~~
rails db:migrate
~~~
~~~
rails db:seed (*Este paso es opcional, si se quiere probar la aplicación con un conjunto de datos iniciales)
~~~
~~~
rails s
~~~

## Instrucciones para levantar el frontend
~~~
cd front
~~~
~~~
npm i
~~~
~~~
npm start
~~~
