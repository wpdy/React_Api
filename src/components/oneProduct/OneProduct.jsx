import styles from './OneProduct.module.css'

const OneProduct = (props) => {

  // console.log(props)

  return (
    <div className={styles.products_list}>
      {
        props.items.products.map(item =>{
          return(
            <div key={item.id} className={styles.one_item}>
              <h1 className={styles.title}>Title: {item.title}</h1>
              <img src={item.thumbnail} alt="" className={styles.thumbnail}/>
              <h5 className={styles.names}>Category: {item.category}</h5>
              <h4 className={styles.names}>Brand: {item.brand}</h4>
              <h2 className={styles.description}>Description: {item.description}</h2>
              <h3 className={styles.names}>Price: {item.price}$</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default OneProduct
