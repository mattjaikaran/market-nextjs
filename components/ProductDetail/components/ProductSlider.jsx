import { Carousel, Image } from 'react-bootstrap'
import styles from '../ProductDetail.module.scss'

const ProductSlider = () => {
  return (
    <Carousel interval={null} fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://dummyimage.com/800x400/ccc/fff&text=+"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://dummyimage.com/800x400/ccc/fff&text=+"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://dummyimage.com/800x400/ccc/fff&text=+"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductSlider