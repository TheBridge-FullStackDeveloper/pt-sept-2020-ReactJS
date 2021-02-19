const Input = ({ value, handleChange }) => {
  return (
    <div>
      <input
        onChange={handleChange}
        value={value}
        placeholder="Type something..."
      />
    </div>
  )
}

export default Input
