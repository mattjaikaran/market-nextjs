import { Row, Col } from 'react-bootstrap'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import ProductCard from '@components/ProductCard'
import Categories from '@components/Categories'
import MiniProductCardGrid from '@components/MiniProductCardGrid'
import CategorySlider from '@components/CategorySlider'
import LeftSideImgCard from '@components/LeftSideImgCard'
import styles from '../styles/Home.module.scss'
import chairWood from '@images/chair-wood.png'
import entertainmentCenter from '@images/entertainment-center.png'

const Home = () => {
  const productObj = {
    id: 1, 
    title: 'Buckle Wrap Wooden Table',
    price: 52,
    quantity: 1,
    sale: {
      salePrice: 40
    },
    newProduct: false,
  }
  const productObjTwo = {
    id: 2, 
    title: 'Wooden Coffee Mug',
    price: 23.99,
    quantity: 1,
    sale: false,
    newProduct: false,
  }
  const productObjThree = {
    id: 3, 
    title: 'Wooden Bluetooth Speaker',
    price: 23,
    quantity: 1,
    sale: false,
    newProduct: true,
  }
  const productObjFour = {
    id: 4, 
    title: 'Wood White Chair',
    price: 45,
    quantity: 1,
    sale: false,
    newProduct: false,
  }

  return (
    <Layout className={styles.container}>
      <div>
        <h1>Ecommerce Store</h1>
      </div>
      <div>
        <Hero />
        <Row>
          <Col className={styles.productCardColumn} xs={6} sm={6} md={6} lg={3}>
            <ProductCard product={productObj} />
          </Col>
          <Col className={styles.productCardColumn} xs={6} sm={6} md={6} lg={3}>
            <ProductCard product={productObjTwo} />
          </Col>
          <Col className={styles.productCardColumn} xs={6} sm={6} md={6} lg={3}>
            <ProductCard product={productObjThree} />
          </Col>
          <Col className={styles.productCardColumn} xs={6} sm={6} md={6} lg={3}>
            <ProductCard product={productObjFour} />
          </Col>
        </Row>
        <MiniProductCardGrid />
        <Categories />
        <CategorySlider
          title="Decoration"
          description="Small be and the rain would phase distance, succeed align."
        />
        <CategorySlider
          title="Architect"
          description="Small be and the rain would phase distance, succeed align."
        />
        <Row>
          <Col md={6}>
            <LeftSideImgCard
              img={chairWood}
              description="Comfortable"
              product="Chair"
              productDescription="Browse our collection of very comfortable chairs."
              cta="View Now"
            />
          </Col>
          <Col md={6}>
            <LeftSideImgCard
              img={entertainmentCenter}
              description="Comfortable"
              product="Chair"
              productDescription="Browse our collection of very comfortable chairs."
              cta="View Now"
            />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home