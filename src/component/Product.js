function Product(props){
    return (
        <div className="board__item">
            <img src={props.image} alt="Avatar"/>
            <h3>{props.name}</h3>
            <h5>{props.price}  $</h5>
            <button onClick={()=>props.handlePush(props.id)}>Add to Card {(props.inCard===true)? 'InCard': ''}</button>

        </div>
    )
}
export default Product;