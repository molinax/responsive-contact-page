const TextArea = ({ txtAreaName, label, value, setValue, className, placeholder }) => {
  return (
    <div className="input-flex">
      <label htmlFor={txtAreaName} className="text-sm">{label}</label>
      <textarea
        id={txtAreaName}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className={`input-value input-container resize-none h-48 ${className}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextArea
