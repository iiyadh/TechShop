import CProduct from "../component/CProduct";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContextProvider";

function Card() {
    const { cardItems,setCardItems, handleAdd, handleRemove } = useContext(ShopContext);
    const [total,setTotal] = useState(0);
    useEffect(()=>{
        let total = 0;
        cardItems.forEach((item) => {total += item.price * item.Qu;});
        setTotal(total);
    },[cardItems])

    return (
        <div className="Cboard">
            {cardItems.map((item) => {
                return (
                    <CProduct
                        key={item.id}
                        id={item.id}
                        name={item.productName}
                        price={item.price}
                        Qu={item.Qu}
                        handleAdd={handleAdd}
                        handleRemove={handleRemove}
                    />
                );
            })}
            <div className="footer">
                <h1>Total: {total}$</h1>
                <button>Confirm</button>
            </div>
        </div>
    );
}

export default Card;