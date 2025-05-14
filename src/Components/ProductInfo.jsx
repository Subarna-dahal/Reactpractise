
const ProductInfo = () => {
    const product={
        name:"subarna",
        price:2300,
        avilblity:"In stock"
    };
  return (
    <div>
        <p1>{product.name}</p1>
        <p1>{product.price}</p1>
        <p1>{product.avilblity}</p1>
    </div>
  )
}

export default ProductInfo