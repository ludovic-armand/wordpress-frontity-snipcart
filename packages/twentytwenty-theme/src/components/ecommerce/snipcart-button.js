const SnipcartButton = ({product}) => {
    return (
        <button className="snipcart-add-item"
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-image={product.image}
            data-item-id={product.id}
            data-item-description={product.description}>Add to cart
        </button>
    )
 }

 export default SnipcartButton;