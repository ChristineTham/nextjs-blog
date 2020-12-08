interface FeatureProps {
  feature: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ children, feature, description }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rosely10 text-white">
        {children}
      </div>
    </div>
    <div className="ml-4">
      <dt className="text-lg leading-6 font-medium text-rosely2">{feature}</dt>
      <dd className="mt-2 text-base text-rosely1">{description}</dd>
    </div>
  </div>
)
export default Feature
