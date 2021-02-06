export default function Item(props) {
  const { item, id } = props
  const { title, place, years } = item
  return (
    <li key={id}>
      <p><strong>title:</strong> {title}</p>
      <p><strong>place:</strong> {place}</p>
      <p><strong>years:</strong> {years}</p>
    </li>
  )
}