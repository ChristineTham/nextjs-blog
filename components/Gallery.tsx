import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'

interface MyGalleryProps {
  photos: string[]
  dimensions?: ISizeCalculationResult[]
}

const MyGallery: React.FC<MyGalleryProps> = ({ photos, dimensions }) => {
  return (
    <>
      <div className="container flex flex-col items-center mx-auto">
        <p className="mb-4 text-sm text-gray-500">
          Click on an image to view in lightbox.
        </p>
      </div>
      <div className="container mx-auto">
        <Gallery>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <Item
                key={photo}
                original={photo}
                thumbnail={photo}
                width={dimensions ? dimensions[i].width : 1024}
                height={dimensions ? dimensions[i].height : 768}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref as React.Ref<HTMLImageElement>}
                    onClick={open}
                    src={photo}
                    className="cursor-pointer w-full h-auto object-cover hover:opacity-90 transition-opacity"
                    alt={`Gallery Image ${i + 1}`}
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>
    </>
  )
}
export default MyGallery
