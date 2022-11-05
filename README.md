# Prueba técnica Ixaya (Frontend)
## ¿Cómo hacer funcionar el proyecto?
Ejecutar el siguiente comando para instalar las dependencias:
```sh
npm install
```

Copiar el archivo .env.example como .env y añadir la url de la API en la variable de entorno

Ejecutar el siguiente comando para hacer el build:
```sh
npm run build
```

Ejecutar el siguiente comando para lanzar el preview:
```sh
npm run preview
```
Abrir en la url y el puerto indicado en la consola.

## Consideraciones
- La api que se utiliza para realizar las conversiones de las monedas solamente tiene 100 peticiones por mes, de las cuales lleva aproximadamente la mitad.
- El ejercicio pide MXN, USD Y VEF, debido a que se cambió la api del ejercicio por otra, no hay conversión a VEF y se utilizó EUR en su lugar.
