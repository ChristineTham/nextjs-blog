interface ButtonProps {
  children?: React.ReactNode
  color?: string
  size?: "base" | "xs" | "sm"
}

const Button: React.FC<ButtonProps> = ({ children, color = 'pink', size = 'base' }) => {
  const sizeattr = {
    xs: 'text-xs px-4 py-2 rounded-sm shadow-sm hover:shadow-md',
    sm: 'text-sm px-6 py-3 rounded-sm shadow-sm hover:shadow-lg',
    base: 'text-base px-8 py-3 rounded-sm shadow-md hover:shadow-lg'
  }

  return (
    <>
      <button
        className={`bg-${color}-500 text-white active:bg-${color}-600 font-bold uppercase ${sizeattr[size]} outline-hidden focus:outline-hidden mr-1 mb-1 ease-linear transition-all duration-150`}
        type="button"
      >
        {children}
      </button>
    </>
  )
}
export default Button
