interface FeatureProps {
  children?: React.ReactNode
  feature: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ children, feature, description }) => (
  <div className="flex items-center flex-col">
    <div className="text-rosely10">{children}</div>
    <h1 className="font-semibold text-xl text-rosely2">{feature}</h1>
    <p className="text-rosely1">{description}</p>
  </div>
)
export default Feature
