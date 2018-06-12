#Entornos de desarrollo
##Frontend
###Requisitos:
* Visual Studio Code
* NodeJS
* Angular cli

Para iniciar el servidor de desarrollo de NodeJS ejecutar `npm start` o `ng serve`.
Se podr� acceder a el a trav�s del puerto `:4200` por defecto.

Para compilar ejecutar el comando `ng build`
Copiar los archivos compilados que se encuentran en hlanz-bank-web > dist en el m�dulo web del proyecto Maven
**hlanz-bank > hlanz-bank-web > src > main > webapp**

##Backend
###Requisitos:
* Eclipse Oxygen
* Maven
* JDK 1.8

Para la compilaci�n de la aplicaci�n WAR realizar `Maven Install` sobre los m�dulos o ejecutar el comando `mvn install` en la consola.
La aplicaci�n se encuentra compilada en **hlanz-bank-web > target.**

##Servidor
* Tomcat 8.5

Copiar la aplicaci�n .war en **webapps** con el nombre de *ROOT.war* para desplegarlo en la ra�z.
Ejecutar `startup.bat` de la carpeta **bin**.
