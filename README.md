# Proyecto Library

## Iniciar proyecto en desarrollo

Primero, ```clon git clone https://github.com/Daizaikun/Frond-Library```

Segundo entrar a la carpeta del proyecto y ejecutar el comando

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

El proyecto se ejecuta en el puerto 3000 y la ruta [http://localhost:3000](http://localhost:3000).
Si el puerto esta ocupado usara el siguiente disponible

Tercero abrir el proyecto en el navegador bajo la ruta  [http://localhost:3000](http://localhost:3000)

## Despliegue

Para hacer el despueble para producción se puede usar [https://vercel.com/docs/concepts/get-started/deploy](vercel)

## Organización de carpetas

- src
  - components : son componentes comunes y retutiliizables.
  - app: son todas las paginas del proyecto y sus componentes.
  - models: Solos tipos de datos que recibe del backend.
  - styles: Lugar para guardar los estilos
