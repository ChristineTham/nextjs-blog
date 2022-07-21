import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox'
import { useCallback, useState } from 'react'
import Layout from '../components/layout'
import 'react-image-lightbox/style.css'

const gallery = [
  {
    src: '/gallery/test/Artarmon Reserve 2020.jpeg',
    height: 1696,
    width: 2560
  },
  {
    src: '/gallery/test/Artarmon Reserve 2020 (1).jpeg',
    height: 1696,
    width: 2560
  },
  {
    src: '/gallery/test/Roseville 2020.jpeg',
    height: 2560,
    width: 2560
  },
  {
    src: '/gallery/test/Roseville 2020 (1).jpeg',
    height: 2560,
    width: 2560
  },
  {
    src: '/gallery/test/Roseville 2020 (2).jpeg',
    height: 1696,
    width: 2560
  }
]

const TestRPG: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <>
      <Layout>
        <div className="mt-20" />
        <Gallery photos={gallery} direction="column" onClick={openLightbox} />
        {viewerIsOpen && (
          <Lightbox
            mainSrc={gallery[currentImage].src}
            nextSrc={gallery[(currentImage + 1) % gallery.length].src}
            prevSrc={gallery[(currentImage + gallery.length - 1) % gallery.length].src}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() =>
              setCurrentImage((currentImage + gallery.length - 1) % gallery.length)
            }
            onMoveNextRequest={() => setCurrentImage((currentImage + 1) % gallery.length)}
          />
        )}
      </Layout>
    </>
  )
}
export default TestRPG
