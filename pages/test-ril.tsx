import { Gallery as PSGallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import Layout from '../components/layout'

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
  return (
    <>
      <Layout>
        <div className="mt-20" />
        <PSGallery>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {gallery.map((photo, index) => (
              <Item
                key={index}
                original={photo.src}
                thumbnail={photo.src}
                width={photo.width}
                height={photo.height}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref as React.Ref<HTMLImageElement>}
                    onClick={open}
                    src={photo.src}
                    className="cursor-pointer w-full h-auto object-cover"
                    alt=""
                  />
                )}
              </Item>
            ))}
          </div>
        </PSGallery>
      </Layout>
    </>
  )
}
export default TestRPG
