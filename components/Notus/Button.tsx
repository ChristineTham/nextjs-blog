interface ButtonProps {
  children?: React.ReactNode
  color?: string
  size?: string
}

const Button: React.FC<ButtonProps> = ({ children, color = 'pink', size = 'base' }) => {
  const sizeattr = {
    xs: 'text-xs px-4 py-2 rounded shadow hover:shadow-md',
    sm: 'text-sm px-6 py-3 rounded shadow hover:shadow-lg',
    base: 'text-base px-8 py-3 rounded shadow-md hover:shadow-lg'
  }

  return (
    <>
      <button
        className={`bg-${color}-500 text-white active:bg-${color}-600 font-bold uppercase ${sizeattr[size]} outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        type="button"
      >
        {children}
      </button>
    </>
  )
}
export default Button
