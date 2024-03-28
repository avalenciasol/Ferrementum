# Ferrementum
Repositorio para el control de versiones de proyecto educativo.

## Configuración

1. Activación del entorno virtual: 
    
    en la terminal: 
    ```
    env\Scripts\activate
    ```
2. Instalar dependencias o librerias necesarias:

    en la terminal:
    ```
    pip install -r requirements.txt
    ```
3. Configuración Base de Datos

    copia el archivo [.env.example](ferrementum_project/.env.example) a un nuevo archivo local_settings.py y en este archivo completa las variables de entorno con las credenciales locales de la base de datos

4. Migraciones 

    Ejecuta las migraciones 

    en la terminal: 
    ```
    python manage.py migrate
    ```