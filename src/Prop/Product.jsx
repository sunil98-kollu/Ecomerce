import Button from "./Button";
const Product = () => {
 const handleWishlistClick = () => {
 console.log("Added to wishlist");
 };
 return <Button name="Wishlist" handleClick={handleWishlistClick}></Button>
};
export default Product;