interface SectionProps {
  children?: React.ReactNode
  title: string
  description?: string
  className?: string
  backgroundColor?: string
  width?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  title = 'Articles',
  description,
  className,
  backgroundColor = 'bg-white',
  width = 'w-16'
}) => (
  <section className={`text-rosely0 ${backgroundColor} body-font`}>
    <div className="container px-5 py-16 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-rosely2 text-center">
        {title}
      </h1>
      {description && (
        <p className="text-base text-rosely1 leading-relaxed lg:w-3/4 mx-auto mt-4">
          {description}
        </p>
      )}
      <div className="flex mt-6 justify-center mb-8">
        <div className={`${width} h-1 rounded-full bg-rosely7 inline-flex`}></div>
      </div>
      <div className={className}>{children}</div>
    </div>
  </section>
)
export default Section
