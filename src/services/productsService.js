const productsService = async () => {
    const response = await fetch('https://dummyjson.com/products')
    // const response = await fetch('https://fakestoreapi.com/products/')
    const result = await response.json()
    return result
}

export default productsService 