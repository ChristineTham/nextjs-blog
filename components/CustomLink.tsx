import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CustomLink({ as, href, ...otherProps }): JSX.Element {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
      <style jsx>{`
        a {
          color: tomato;
        }
      `}</style>
    </>
  )
}
