import ArrowDownIcon from './icons/ArrowDown'

const Select = ({ selectName, label, options, className, value, setValue }) => {
  return (
    <div className="input-flex relative">
      <ArrowDownIcon className="absolute right-3 bottom-4" />
      <label htmlFor={selectName} className="text-sm">
        {label}
      </label>
      <select
        id={selectName}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className={`input-value input-container cursor-pointer${className}`}
      >
        {options.map((item, i) => (
          <option value={item.value} key={i}>
            {item.content}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
