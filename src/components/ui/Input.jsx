const Input = ({ type, inputName, label, value, setValue, placeholder, className }) => {
  return (
    <div className="input-flex">
      <label htmlFor={inputName} className="text-sm">{label}</label>
      <input
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
        id={inputName}
        className={`input-value input-container ${className}`}
      />
    </div>
  )
}

export default Input
