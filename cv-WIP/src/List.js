export default function List(props) {
  const { list = [] } = props
  return (
    <section className="education">
      <ul>
        { list.map((item, index) => <li key={index}>{item}</li>) }
      </ul>
    </section>
  )
}