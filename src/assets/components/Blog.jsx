import React from 'react'
import Blogcontent from './Blogcontent'
let blogArr = [
    {
        image: "/public/image/blog__1.png",
        infoTitle :"5 Strategies to Transform Your...",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        image: "/public/image/blog__2.png",
        infoTitle :"Why Every Startup Needs a Busi...",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        image: "/public/image/blog__3.webp",
        infoTitle :"How Marketing Consultants Can ...",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    }

]
const Blog = () => {
  return (
    <section className='bg-blog'>
        <div className="container">
            <div className="row align-items-center pb-60">
                <div className="col-6">
                    <div className='blog-heading'>
                        <h3>ULTIMATE INSIGHTS INSPIRATION, AWESOME BLOG
                            <span class="text-blog-gradient">  INNOVATION </span>
                            ARTICLES.
                        </h3>
                    </div>
                </div>
                <div className="col-6">
                    <div className='text-end'>
                        <button className='blog-btn'>ALL ARTICLES</button>
                    </div>
                </div>
            </div>
            <div className='blog-main'>
                {blogArr.map((item) => {
                    return <Blogcontent  image={item.image} des={item.des} infoTitle={item.infoTitle}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default Blog