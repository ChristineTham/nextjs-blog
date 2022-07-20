const inlineCode: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span className="font-mono text-rosely0 bg-rosely5 p-1 border border-rosely7 rounded-lg">
    {children}
  </span>
)
export default inlineCode
