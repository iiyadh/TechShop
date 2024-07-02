function CProduct({ id, name, price, Qu, handleAdd, handleRemove}) {
    return (
        <div className="Cboard__item">
            <div className="box">
                <img src="https://via.placeholder.com/150x150" alt=""/>
                <h3>{name}</h3>
            </div>
            <div className="counter">
                <h5>{price*Qu} $</h5>
                <button onClick={() => handleRemove(id)}>-</button>
                <input type="text" value={Qu} readOnly />
                <button onClick={() => handleAdd(id)}>+</button>
            </div>
        </div>
    );
}

export default CProduct;