import '../css/ItemCard.css'
function ItemCard(props) {
  const {item} = props

    return (
      <>
      <article id="itemCard">
          <h3 id='itemH3'>{item.item_name}</h3>
          <h4 id='itemH4'>Price: £{item.price}</h4>
        <img id='itemImage' src={item.img_url} alt={`${item.item_name}`}/>
        <div id='itemDescription'>
          <h5 id='itemH5'>Description</h5>
          <p id='description'>{item.description}</p>
        </div>
        <div id='purchaseButtonContainer'>
          <div id='buyButton'>
            <button className="button-82-pushable" role="button">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">
              Buy Now
              </span>
            </button>
          </div>

          <div id='addToCartButton'>
            <button className="button-82-pushable" role="button">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">
              Add To Cart
              </span>
            </button>
          </div>
        </div>
      </article>
      </>
    )
};

export default ItemCard;