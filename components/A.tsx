import Link from 'next/link'

interface AProps extends React.ComponentPropsWithoutRef<'a'> {
  href: string
  as?: string
  external?: boolean
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const A: React.FC<AProps> = (props) => {
  const { external, as, href, ...otherProps } = props
  if (external) {
    return (
      <>
        <a
          href={href}
          className="text-rosely10 hover:text-rosely9"
          target="_blank"
          rel="noreferrer"
          {...otherProps}
        />
      </>
    )
  } else {
    return (
      <>
        <Link as={as} href={href}>
          <a className="text-rosely10 hover:text-rosely9" {...otherProps} />
        </Link>
      </>
    )
  }
}
export default A
