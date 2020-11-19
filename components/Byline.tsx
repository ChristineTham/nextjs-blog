const Byline: React.FC<{ author: string }> = ({ author }) => {
  return (
    <>
      <div className="byline">By {author}</div>
      <style jsx>{`
        .byline {
          color: green;
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}
export default Byline
