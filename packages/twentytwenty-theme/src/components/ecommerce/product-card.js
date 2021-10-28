import SnipcartButton from "./snipcart-button";

const ProductCard = ({post}) => {
    const product = {
        name: post.acf.product_name,
        id: post.id,
        price: post.acf?.price,
        image: post.acf?.image,
        description: post.acf?.description
    }
    
    return (
        <article>
            <img src={post.acf.image} />
            <div> {post.acf.description} </div>
            <div>
              <strong> ${post.acf.price} </strong>
            </div>
            <SnipcartButton product={product} />
        </article>
    )
}

export default ProductCard;