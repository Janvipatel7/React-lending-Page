
const ProjectSecond = ({ image, des }) => {
  return (
    <div className="col-lg-4 col-12">
      <div className='mb-4 project-card'>
        <div className='mb-5'>
          <img src={image} alt="" width={'100%'} />
        </div>
        <div className="project-content d-flex">
          <div>
            <h3>{des}</h3>
          </div>
          <div className="card-btn2">
            <button className=""><i class="bi bi-arrow-up-right"></i></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectSecond