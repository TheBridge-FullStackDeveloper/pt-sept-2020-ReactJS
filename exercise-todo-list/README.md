## TODO List

Crea una TODO list que contenga lo siguiente:

1. Un componente `Input`
2. Un componente `List` que recorra listas de items
3. Un componente `Item` o `Card` que contenga cada TO DO
4. Un componente `Button`
5. Un componente `Label`

Flujo de la aplicación:

1. Nada más empezar tendremos un input y un botón. El botón tendrá el texto `ADD` y si el input está vacío el botón estará desactivado.
2. Cuando escribamos en el input, el botón `ADD` se activará y aparecerá otro botón al lado de éste con el texto `CLEAN` para poder borrar el texto del input. Si hacemos click en este último botón: el texto desaparecerá del input, el botón `CLEAN` desaparecerá y el botón `ADD` se desactivará.
3. Si hemos escrito algo en el input y hacemos click sobre el botón `ADD`, se añadirá un item debajo del input.
4. Cuando un item sea añadido se borrará inmediatamente lo que habíamos escrito en el input.
5. Cada item tendrá un texto (label) y un botón con una `X` para borrar dicho item cuando el botón sea pulsado.

- TIP: usad el paquete de NPM UUID para manejar las `keys` de los diferentes elementos de la lista.
