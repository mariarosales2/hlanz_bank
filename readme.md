#Entornos de desarrollo
##Frontend
###Requisitos:
* Visual Studio Code
* NodeJS
* Angular cli

Para iniciar el servidor de desarrollo de NodeJS ejecutar `npm start` o `ng serve`.
Se podrá acceder a el a través del puerto `:4200` por defecto.

Para compilar ejecutar el comando `ng build`
Copiar los archivos compilados que se encuentran en hlanz-bank-web > dist en el módulo web del proyecto Maven
**hlanz-bank > hlanz-bank-web > src > main > webapp**

##Backend
###Requisitos:
* Eclipse Oxygen
* Maven
* JDK 1.8

Para la compilación de la aplicación WAR realizar `Maven Install` sobre los módulos o ejecutar el comando `mvn install` en la consola.
La aplicación se encuentra compilada en **hlanz-bank-web > target.**

##Servidor
* Tomcat 8.5

Copiar la aplicación .war en **webapps** con el nombre de *ROOT.war* para desplegarlo en la raíz.
Ejecutar `startup.bat` de la carpeta **bin**.
