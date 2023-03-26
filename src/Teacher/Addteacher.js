import { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../Student/appprovider";

export function AddTeacher() {
    const history = useHistory();
    const { teacher, setTeacher } = AppState();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [experience, setExperience] = useState("");
    const [school, setSchool] = useState("");

    const addNewTeacher = () => {
        const newTeacher = {
            id,
            name,
            subject,
            experience,
            school

        }
        setTeacher([...teacher, newTeacher])
        history.push("/teacher")
    }

    return (
        <BaseApp
            title="Add New Teacher"
        >
            <div className="add-container">
                <div className="box-model">
                    <ul type="none">
                        <li><input
                            placeholder="id"
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                        >
                        </input></li>

                        <li>  <input
                            placeholder="Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        >
                        </input></li>

                        <li> <input
                            placeholder="subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                        >
                        </input></li>

                        <li> <input
                            placeholder="experience"
                            value={experience}
                            onChange={(event) => setExperience(event.target.value)}
                        >
                        </input></li>

                        <li>  <input
                            placeholder="School Name"
                            value={school}
                            onChange={(event) => setSchool(event.target.value)}
                        >
                        </input></li>

                        <li>  <div className="btn-group">
                            <button
                                onClick={addNewTeacher}
                            >Add Teacher</button>
                        </div></li>
                    </ul>
                </div>
            </div>

        </BaseApp>
    )

}