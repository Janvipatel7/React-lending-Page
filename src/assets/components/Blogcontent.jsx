

const Blogcontent = ({ image, des, infoTitle }) => {
    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                    <div className='blog-single'>
                        <div className="row">
                            <div className="col-lg-2 col-sm-6 col-12 order-1">
                                <div className='blog-image d-flex align-items-center h-100'>
                                    <img src={image} alt="" width={'100%'} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 col-12 order-3">
                                <div className='blog-date'>
                                    <div className='blog-date-inner'>
                                        <span>12</span>
                                        <p>July, 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12 order-2">
                                <div className='blog-content d-flex justify-content-center h-100 flex-column'>
                                    <h6>{infoTitle}</h6>
                                    <p>{des}</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 col-12 order-4">
                                <div className="blog-icon d-flex align-items-center h-100">
                                    <button className=""><i class="bi bi-arrow-up-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogcontent