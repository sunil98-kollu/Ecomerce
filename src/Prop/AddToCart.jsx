import Button from "./Button"
const AddToCart = () => {
 const handleClick = () => {
 console.log("Added to cart")
 }
 return <Button name="Add to Cart" handleClick={handleClick}></Button>
}
export default AddToCart;