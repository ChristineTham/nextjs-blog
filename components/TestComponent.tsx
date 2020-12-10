const TestComponent: React.FC<{ name: string }> = ({ name = 'world' }) => {
  return (
    <>
      <div>Hello, {name}!</div>
      <style jsx>{`
        div {
          background-color: #f4dede;
          border-radius: 0.5em;
          color: #615f5f;
          margin-bottom: 1.5em;
          padding: 0.5em 0.75em;
        }
      `}</style>
    </>
  )
}
export default TestComponent
