import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

function ShopContextProvider(props) {
    const [cardItems, setCardItems] = useState([]);

    const handleAdd = (id) => {
        setCardItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, Qu: item.Qu + 1 } : item
            )
        );
    }

    const handleRemove = (id) => {
        setCardItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, Qu: Math.max(item.Qu - 1, 0) } : item
            )
        );
    }

    const ContextValue = {
        cardItems,
        setCardItems,
        handleAdd,
        handleRemove
    }

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;