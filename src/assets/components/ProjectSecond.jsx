
const ProjectSecond = ({ image, des }) => {
  return (
    <div className="col-4">
      <div className='mb-4'>
        <div className='mb-5'>
          <img src={image} alt="" />
        </div>
        <div className="project-content d-flex">
          <div>
            <h3>{des}</h3>
          </div>
          <div className="card-btn ">
            <button className=""><i class="bi bi-arrow-up-right"></i></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectSecond