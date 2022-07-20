import React, { useCallback, useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import 'react-bnb-gallery/dist/style.css'
import Gallery from 'react-photo-gallery'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'

const MyGallery: React.FC<{ photos: string[]; dimensions?: ISizeCalculationResult[] }> = ({
  photos,
  dimensions
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setIsOpen(false)
  }

  return (
    <>
      <div className="container flex flex-col items-center mx-auto">
        <button
          className="inline-flex items-center text-white bg-rosely10 border-0 py-2 px-6 focus:outline-none hover:bg-rosely9 rounded text-lg mb-4"
          onClick={() => setIsOpen(true)}
        >
          View gallery
        </button>
      </div>
      <div className="container mx-auto">
        <Gallery
          photos={photos.map((photo, i) => ({
            src: photo,
            width: dimensions ? dimensions[i].width : 1,
            height: dimensions ? dimensions[i].height : 1
          }))}
          direction="column"
          onClick={openLightbox}
        />
      </div>
      <ReactBnbGallery
        show={isOpen}
        photos={photos}
        onClose={closeLightbox}
        activePhotoIndex={currentImage}
      />
    </>
  )
}
export default MyGallery
