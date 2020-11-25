const Articles: React.FC<{ title?: string }> = ({ children, title = 'Articles' }) => (
  <section className="py-12">
    <div className="container mx-auto">
      <div>
        <h1 className="text-2xl font-black text-pink-600 pb-6 px-6 md:px-12">{title}</h1>
      </div>
      <div className="flex flex-wrap px-6">{children}</div>
    </div>
  </section>
)
export default Articles
