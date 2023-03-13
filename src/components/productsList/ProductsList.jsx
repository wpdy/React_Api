import { useState, useEffect } from 'react'
import productsService from '../../services/productsService'
import styles from './ProductsList.module.css'
import OneProduct from '../oneProduct/OneProduct'


const ProductsList = () => {

  const [products, setProducts] = useState({products:[]})

  const getProducts = () => {
    productsService().then((res) => {
      setProducts(res)
    })
  }  

  useEffect(() => {
    getProducts()
  }, [])


  console.log(products)

  return (
    <div>
        <h1 className={styles.pavadinimas}>PRODUCTS</h1>
        <OneProduct items={products}/>
    </div>
  )
  
}

export default ProductsList