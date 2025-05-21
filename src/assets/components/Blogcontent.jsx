import React from 'react'

const Blogcontent = ({image , des , infoTitle}) => {
  return (
    <div className='blog-single'>
        <div className='blog-image'>
            <img src={image} alt="" />
        </div>
        <div className='blog-date'>
            <div className='blog-date-inner'>
                <span>12</span>
                <p>July, 2024</p>
            </div>
        </div>
        <div className='blog-content'>
            <h6>{infoTitle}</h6>
            <p>{des}</p>
        </div>
        <div className="blog-icon">
            <button className=""><i class="bi bi-arrow-up-right"></i></button>
        </div>
    </div>
  )
}

export default Blogcontent