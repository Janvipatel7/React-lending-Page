

const Footer = () => {
    return (
        <footer>
            <div className='bg-footer'>
                <div class="d-flex text-center">
                    <div class="position-relative brand-badge">
                        <img src="../../../public/image/brand__badge.png" className="rotate" alt="" />
                        <img src="../../../public/image/brand__badge__inner.webp" className="message-icon" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="pb-60">
                        <div className="row">
                            <div class="col-xl-4 col-lg-6 col-md-6">
                                <div class="position-relative ">
                                    <div class="footer-logo">
                                        <img src="/public/image/Logo_1.webp" alt="" />
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua</p>
                                    </div>
                                    <div className="footer-icons pt-3">
                                        <ul className="d-flex">
                                            <li>
                                                <span>
                                                    <i class="bi bi-facebook"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i class="bi bi-twitter"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i class="bi bi-skype"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i class="bi bi-linkedin"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                <div className="pl-70">
                                    <div className="footer-menu-title mb-4">
                                        <h6>SUPPORT :</h6>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li>
                                                <span>Home</span>
                                            </li>
                                            <li>
                                                <span>About us</span>
                                            </li>
                                            <li>
                                                <span>Blog update</span>
                                            </li>
                                            <li>
                                                <span>Our services</span>
                                            </li>
                                            <li>
                                                <span>Testimonial</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                <div className="pl-70">
                                    <div className="footer-menu-title mb-4">
                                        <h6>QUICK LINKS :</h6>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li>
                                                <span>Privacy & policy</span>
                                            </li>
                                            <li>
                                                <span>Terms & conditions</span>
                                            </li>
                                            <li>
                                                <span>FAQ</span>
                                            </li>
                                            <li>
                                                <span>Customer support</span>
                                            </li>
                                            <li>
                                                <span>Contact us</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="pl-70">
                                    <div className="footer-menu-title mb-4">
                                        <h6>QUICK LINKS :</h6>
                                    </div>
                                    <div className="footer-input">
                                        <input type="text" placeholder="Enter Your Email" />
                                    </div>
                                    <div>
                                        <button className='all-btn'> SUBSCRIBE NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div class="copyright-left">
                                    <p>Copyright © 2024 <a href="/">BASTUN.</a> All Right Reserved</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div class="copyright-right">
                                    <ul className="d-flex">
                                        <li>
                                            <a href="#">Privacy &amp; Policy ||</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer