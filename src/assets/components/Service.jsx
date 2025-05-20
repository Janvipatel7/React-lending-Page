
import FirstService from './FirstService'
import ServiceCard from './ServiceCard'
let cardArr = [
  {
    image: "/image/service__1.png",
    title: "Agency Consulting",
    desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
  },
  {
    image: "/image/service__2.png",
    title: "Agency Consulting",
    desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
  },
  {
    image: "/image/service__3.png",
    title: "Agency Consulting",
    desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
  },
  {
    image: "/image/service__4.png",
    title: "Agency Consulting",
    desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
  },
]
const Service = () => {
  let title = "WE OFFER CONSULTANCY SERVICES";
  let desc = "Sagittis purus sit amet volutpat consequat mauris nunc congue and tortor dignissim";
  return (
    <section className="service-bg">
      <div className="container">
        <div className="row">
          <FirstService title={title} desc={desc} />
        </div>
        <div className="row gy-4 position-relative">
          {cardArr.map((item) => {
            return <ServiceCard image={item.image} title={item.title} desc={item.desc} />
          })}
          <div className='width-50'>
            <img src="../../../public/image/about__small__img__1.webp" alt="" className='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service