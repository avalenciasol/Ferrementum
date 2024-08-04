# Ferrementum

Repositorio para el control de versiones de proyecto educativo.

## Clonar el repositorio

    ```
    git clone https://github.com/avalenciasol/Ferrementum.git
    ```

## Configuración Despliegue Backend

1. Crear y activar el entorno virtual:
    ```
    cd Ferrementum
    virtualenv venv
    ```
    Windows
    ```
    venv\Scripts\activate
    ```
    Linux
    ```
    source venv/bin/activate
    ```

2. Instalar dependencias y/o librerias necesarias:
    ```
    pip install -r requirements.txt
    ```
3. Configuración Base de Datos:
    
    Crear el archivo local_settings.py con las configuraciones necesarias
    ```
    DEBUG = True
    SECRET_KEY = ''

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': '',
            'USER': '',
            'PASSWORD': '',
            'HOST': '',
            'PORT': '',
        }
    }
    ```

4. Migraciones Base de Datos:

    Migrar los cambios a la Base de Datos local
    ```
    cd Ferrementum
    python manage.py migrate
    ```
    Verficar actualización de la Base de Datos local
    ```
    python manage.py showmigrations 
    ```

5. Ejecutar el servidor de desarrollo de Django:

    ```
    cd Ferrementum/backend
    python manage.py runserver
    ```

## Configuración Despliegue Frontend

1. Instalar dependencias y/o librerias necesarias:

    ```
    cd Ferrementum/frontend
    npm install
    ```

2. Construir la aplicación:

    ```
    npm start
    ```
