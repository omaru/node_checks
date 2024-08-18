# Ikafen
Sistema Web para Sistema de Gestión de Calidad.

## Índice
[Instalación](#instalación)
[Características](#características)
[Auditorías Internas](#auditorías-internas)
[Contribuir](#contribuir)
[Licencia](#licencia)

## Instalación

### Prerrequisitos
* Java Development Kit (JDK) 17 o superior
* Apache Maven 3.6.0 o superior

### Pasos
1. **Clonar el repositorio:**
    ```sh
    git clone https://code.ika.mx/sgc/ikafen-java.git
    cd ikafen-java
    ```

2. **Construir y verificar el proyecto:**
    ```sh
    ./mvnw clean verify
    ```

3. **Empaquetar la aplicación:**
    ```sh
    ./mvnw clean package
    ```
    1. **Correr la aplicación:**
        ```sh
         java -jar [-Dspring.profiles.active=[test|localhost]] target/ikafen-0.0.1-SNAPSHOT.jar
         ```
   > 
   > Si no se proporciona un perfil `-Dspring.profiles.active` la aplicación carga las definiciones contenidas en el archivo `application.yml` las cuales por default contienen la información de producción
4. **Ejecutar la aplicación:**
    ```sh
    ./mvnw spring-boot:run
    ```
5. **Ejecutar la aplicación usando un perfil:**

    ```sh
    ./mvnw spring-boot:run

## Características
* Perfiles: de usuario Administrador, Usuario
* Árbol documental. Muestra los documentos del sistema de gestión de calidad separados por tipo de documento y área.
* Solicitudes de cambio a documentos del sistema de gestión de calidad.
* Generación de event para auditoría interna.

## Auditorías Internas
* Auditores
* Auditores líderes
* Guía de auditoría (Kalisch)
* Reportes X
* Y más por venir...


## Licencia
All rights reserved.