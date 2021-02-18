# Ejercicio Propuesto - Forms & Router

1. Dentro de lo que ya tenemos hecho, vamos a crear un formulario para crear nuevos pokemon que nos inventemos.

**Estos deben introducirse al array de pokemon donde estamos guardando el listado.**

El formato que debel cumplir será:

```
{
  id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: ''
}
```

Para crear el formulario usaremos react-hook-form `npm install react-hook-form` y los campos serán del siguiente tipo:

```
id => number
name => text
image => text
typeOne => select
typeTwo => select
```

Las condiciones de error y validación serán las siguientes:

```
id => required
name => required minlenght = 1
image => required
typeOne => select required
typeTwo => select
```

- Como los pokemon no pueden tener el mismo tipo repetido DOS veces, en la función de submit validaremos que no se han repetido y mostraremos un mensaje de error al usuario en caso de que sea necesario.

2. Implementar React Router DOM `npm i react-router-dom` para crear tres rutas:

- La página principal donde veamos el listado de pokemon. (Ruta /)
- La página de creación de nuevo pokemon con el formulario (Ruta /new)
- La página de visualización de un perfil de pokemon (Ruta /pokemon/:id)

Tendremos una navbar arriba que permita movernos entre rutas usado `<Link />`.

- Para mantener la información de forma adecuada, el estado con el listado de Pokemon debe vivir en App y pasarse a cada página como props junto con su setter.