import TeamLeft from "./TeamLeft"
import TeamRight from "./TeamRight"

const Team = () => {
    return (
        <div className="team">
            <div className="row gy-5">
                <TeamLeft/>
                <TeamRight />
            </div>
        </div>
    )
}

export default Team