export default function Input(props) {
  const { onChange, value } = props
  return (
    <input value={value} onChange={onChange} placeholder="Type something..."/>
  )
}