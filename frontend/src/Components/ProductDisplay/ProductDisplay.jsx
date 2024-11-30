import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Asset/Rating_star_icon.png'
import star_dull from '../Asset/Black_rating_star_icon.webp'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₦{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₦{product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Stay classy by wearing our product during all seasons.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category:</span> Women, Crocs, Shoes, Sandals</p>
                <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay