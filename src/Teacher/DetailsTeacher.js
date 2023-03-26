import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../Student/appprovider";

export function DetailsTeacher() {
    const {teacher}=AppState();
    const history = useHistory();
    const { id } = useParams();
    const teachers = teacher[id];
    return (
        <BaseApp
            title={"Teacher Details"}
        >
            <div className="detail-continar">
                <div className="detail-card">
                    <h1>{teachers.name}</h1>
                    <p>Subject heandel: {teachers.subject}</p>
                    <p>Experience: {teachers.experience}</p>
                    <p>School: {teachers.school}</p>

                    <div className="btn-group">
                        <button
                            className="btn btn-detail"
                            onClick={() => history.push("/teacher")}
                        >Dashboard</button>

                    </div>
                </div>
            </div>
        </BaseApp>
    )
}