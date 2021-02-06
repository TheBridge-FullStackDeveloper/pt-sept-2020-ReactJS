import Item from './Item'

export default function Education(props) {
  const { edsList } = props
  return (
    <section id="education">
      <ul>
        {
          edsList.map((item, index) => <Item item={item} id={index} /> )
        }
      </ul>
    </section>
  )
}