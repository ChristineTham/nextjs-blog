import Link from 'next/link'

interface AProps extends React.ComponentPropsWithoutRef<'a'> {
  href: string
  noline?: boolean
  external?: boolean
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const A: React.FC<AProps> = (props) => {
  const { external, noline: noline, href, ...otherProps } = props
  if (external) {
    return (
      <>
        <a
          href={href}
          className={`text-primary hover:text-rosely9 ${noline || 'underline'} font-semibold`}
          target="_blank"
          rel="noreferrer"
          {...otherProps}
        />
      </>
    )
  } else {
    return (
      <>
        <Link
          href={href}
          className={`text-primary hover:text-rosely9 ${noline || 'underline'} font-semibold`}
          {...otherProps}>

        </Link>
      </>
    );
  }
}
export default A
