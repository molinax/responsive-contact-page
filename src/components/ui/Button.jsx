const Button = ({ value }) => {
  return (
    <button className="bg-white p-4 rounded-xl text-blue font-bold transition-all duration-200 ease-out hover:opacity-80 focus:opacity-80 md:p-5">
      {value}
    </button>
  )
}

export default Button
