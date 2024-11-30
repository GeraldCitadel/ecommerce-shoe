import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>A website for easy online purchase of items of different quality</p>
                <p>This website typically displays products with detailed descriptions, images, prices as well as sizes aand colors. Each product having its unique information</p>
            </div>
        </div>
    )
}

export default DescriptionBox