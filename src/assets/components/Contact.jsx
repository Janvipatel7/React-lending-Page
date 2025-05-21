import React from 'react'

const Contact = () => {
  return (
    <section className='pb-120'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='text-center pb-5'>
                        <div className='contact-title-button mb-4'>
                            <span className='text-contact-gradient'>
                                Contact Us
                            </span>
                        </div>
                        <div>
                            <h3 className='contact-title-h3'>CONSULTING SUPPORT IS JUST A CALL OR EMAIL AWAY.</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                    <div className='contact-input-wrapper'>
                        <div className="row">
                            <div className="col-xl-6">
                                <div>
                                    <input type="text" placeholder='First Name' className='contact-input'/>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div>
                                    <input type="text" placeholder='Last Name' className='contact-input'/>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div>
                                    <input type="text" placeholder='Email' className='contact-input'/>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div>
                                    <input type='text' placeholder='Password' className='contact-input'/>
                                </div>
                            </div>
                            <div className="colxl-12">
                                <div>
                                    <select name="cars" className='contact-input'>
                                        <option value="">Subject :</option>
                                        <option value="">Saab</option>
                                        <option value="">Mercedes</option>
                                        <option value="">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="colxl-12">
                                <div>
                                    <textarea class="contact-input" cols="30" rows="10" placeholder='write a message....'></textarea>
                                </div>
                            </div>
                            <div className="colxl-12">
                                <div>
                                    <button className='all-btn'>SEND MESSAGE</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='pl-70 col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                    <div className="contact-info">
                        <div className='contact-single-item'>
                            <div className='contact-icon'>
                                <span><i class="bi bi-stopwatch"></i></span>
                            </div>
                            <div className='contact-text'>
                                <h6>Hours:</h6>
                                <p>Monday - Friday: 8 AM - 5:30 PM</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                        </div>
                        <div className='contact-single-item'>
                            <div className='contact-icon'>
                                <span><i class="bi bi-telephone"></i></span>
                            </div>
                            <div className='contact-text'>
                                <h6>Call Us:</h6>
                                <p>(+000) 987-3267</p>
                                <p>+88 568 956 238</p>
                            </div>
                        </div>
                        <div className='contact-single-item'>
                            <div className='contact-icon'>
                                <span><i class="bi bi-geo-alt"></i></span>
                            </div>
                            <div className='contact-text'>
                                <h6>Location:</h6>
                                <p>242 Carlyle RdZebulon,</p>
                                <p>North Carolina(NC), 27597</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/public/image/contact.webp" alt="" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact