import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => console.info('> user data: ', data)
  console.info('> errors: ', errors)
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          ref={register({ required: true })}
          placeholder="Type your name"
        />
        {errors.name && 'Name is required'}
        <input
          name="surname"
          ref={register({ required: true })}
          placeholder="Type your surname"
        />
        {errors.surname && 'Surname is required'}
        <select name="pet" ref={register({ required: true })}>
          <option value="">Select something...</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="lizards">Lizards</option>
          <option value="horses">Horses</option>
          <option value="goats">Goats</option>
          <option value="fuck off">Cockroaches, bad person</option>
        </select>
        {errors.pet && 'Pet is required'}

        <input type="submit" />
      </form>
      <Link to="/children">To Children</Link>
      <br />
      <Link to="/search">To Search</Link>
    </section>
  )
}

export default Form
