import ProjectSecond from "./ProjectSecond"

let projectArr = [
    {
        image: "/image/project__2.webp",
        des: "Business Process Optimization",
    },
    {
        image: "/image/project__3.webp",
        des: "Market Research and Analysis",
    },
    {
        image: "/image/project__4.webp",
        des: "Risk Assessment and Management",
    }

]

const Project = () => {
    return (
        <section className="project-section">
            <div>
                <div className="container">
                    <div className="project-box px-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="project-title">
                                    <h3>OUR TRACK RECORD OF COMPLETED
                                        <span> CONSULTING</span> PROJECTS.
                                    </h3>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="d-flex justify-content-end">
                                    <div class="position-relative brand-badge">
                                        <img src="../../../public/image/brand__badge.png" className="rotate" alt="" />
                                        <img src="../../../public/image/brand__badge__inner.webp" className="message-icon"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            {projectArr.map((item) => {
                                return <ProjectSecond image={item.image} des={item.des} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project