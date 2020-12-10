interface FeatureProps {
  feature: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ children, feature, description }) => (
  <div className="relative flex flex-col">
    <div className="px-4 py-5 flex-auto">
      <div className="text-rosely10 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-rosely4">
        {children}
      </div>
      <h6 className="text-xl mb-1 font-semibold">{feature}</h6>
      <p className="mb-4 text-rosely1">{description}</p>
    </div>
  </div>
)
export default Feature
