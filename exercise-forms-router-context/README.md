# Ejercicio para reforzar enrutado, Context y formularios con React

## Antes de empezar...

- Instala los paquetes:
  1. `react-router-dom`
  2. `react-hook-form`

## TL;DR

- El ejercicio consistirá en tener 3 rutas:
  1. La primera mostrará un formulario.
  2. La segunda mostrará la lista de registros creados a través del formulario.
  3. La tercera mostrará los detalles de un registro dado.

## Sh\*t, here we go again...

- El componente principal `App` tendrá los `Links` a las páginas `Form`, `List` y `Details`.
- Los `Links` llevarán a las rutas `/home`, `/form` y `/list`.

- `Form` tendrá un formulario sencillo con los siguientes campos:
  1. `input` para que el usuario introduzca su nombre (campo obligatorio).
  2. `input` para que el usuario introduzca su nickname (campo obligatorio).
  3. `input` para que el usuario introduzca su edad (será obligatorio que el usuario tenga, al menos, 18 años).
  4. `options` para que el usuario escoja su mascota preferida (campo obligatorio)
- Cuando se rellenen todos los campos se clickará en el botón del formulario correspondiente para almacenar el registro en el array que estará guardado en el `Context`.

- `List` recibirá de `Context` la lista de registros y mapeará dicha lista cargando un componente `Card` y pasándole a través de `props` la información de cada registro.
- Cada uno de los componentes `Card` listados mostrará solo el nombre de cada registro.

- Los nombres mostrados por los componentes `Card` serán `Links` clickables que llevarán a la ruta `/list/:name`
- En dicha ruta se cargará la página `Details`, la cual recibirá a través de la propiedad `location` del componente `Route` (puedes usar un hook para ello si quieres) la información detallada de ese usuario (`name`, `nickname`, `age`, `pet`) y la mostrará en pantalla.

## EXTRA

- Monta un `Header` y un `Footer` para que siempre estén renderizados aunque cambiemos de ruta. Ambos serán simples componentes. Sin lógica
- Dale amor a la maqueta

🔥✨ ÁNIMO! ✨🔥
