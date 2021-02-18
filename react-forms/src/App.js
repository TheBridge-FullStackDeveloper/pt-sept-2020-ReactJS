import { useForm } from 'react-hook-form';

import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();

  function handleSubmitForm(values) {
    console.log(values);
  }

  console.log('Errors:', errors);

  return (
    <div className="App">
      {/* La función encargada del submit del formulario se envuenve en handleSubmit() */}
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="name">Nombre completo</label>
        {/* Mandamos register() dentro de `ref` para poder registrar nuevos campos al form */}
        <input
          id="name"
          name="name"
          type="text"
          // required
          // minLength="2"
          ref={register({
            required: true,
            minLength: 2,
          })}
        />

        {/* <ErrorMessage error={errors.name} /> */}

        {/* Podemos comprobar si existe un error usando el "name" de nuestro input y
        customizarlo */}
        {errors.name && errors.name.type === 'required' ? (
          <p>Este campo es requerido</p>
        ) : null}
        {errors.name && errors.name.type === 'minLength' ? (
          <p>Debe tener al menos 2 carácteres</p>
        ) : null}
        <br />

        <label htmlFor="bootcamp">Bootcamp</label>
        <input
          id="bootcamp"
          name="bootcamp"
          type="text"
          ref={register({
            required: true,
            minLength: 4,
          })}
        />

        {errors.bootcamp ? (
          <p>Este campo es requerido y necesita al menos 4 caracteres</p>
        ) : null}
        <br />

        <label htmlFor="mode">Modo 1: Full Time | Modo 2: Part Time</label>
        <input
          id="mode"
          name="mode"
          type="number"
          min="1"
          max="2"
          ref={register({
            min: 1,
            max: 2,
          })}
        />
        {errors.mode ? (
          <p>El modo debe ser un número comprendido entre 1 y 2</p>
        ) : null}
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
