import Product from "../component/Product";
import data from '../db/db.json';
import { ShopContext } from "../context/ShopContextProvider";
import { useContext } from "react";



function Shop(){
    const mainData = data.techShop.products;
    const {cardItems,setCardItems, handleAdd, handleRemove } = useContext(ShopContext);

    const handlePush = (ind)=>{
        let exist = false;
        cardItems.forEach(element => {
            if(element.id === ind)exist=true;
        });
        if(!exist)setCardItems([...cardItems,{
            id: ind,
            productName: mainData[ind-1].productName,
            price: mainData[ind-1].price,
            image: "https://via.placeholder.com/150x150",
            Qu: 1 
        }]);
    }
    return (
        <div className="board">
            {mainData.map((product,key) => {
                return(
                <Product 
                id={product.id}
                name={product.productName}
                price={product.price}
                image={product.image}
                handlePush={()=>handlePush(product.id)}/>)
            })}
        </div>
    )
}
export default Shop;