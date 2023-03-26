import { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "./appprovider";

export function AddStudent() {
    const {student,setStudent}=AppState();
    const history = useHistory();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [std, setStd] = useState("");
    const [session, setSession] = useState("");
    const [school, setSchool] = useState("");
    const [mark, setMark] = useState("");

    const addNewStudent = () => {
        const newStudent = {
            id,
            name,
            std,
            session,
            school,
            mark
        }
        setStudent([...student, newStudent])
        history.push("/student")
    }

    return (
        <BaseApp
          title="Add Student"
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
                            placeholder="std"
                            value={std}
                            onChange={(event) => setStd(event.target.value)}
                        >
                        </input></li>

                        <li> <input
                            placeholder="Session"
                            value={session}
                            onChange={(event) => setSession(event.target.value)}
                        >
                        </input></li>

                        <li>  <input
                            placeholder="School Name"
                            value={school}
                            onChange={(event) => setSchool(event.target.value)}
                        >
                        </input></li>

                        <li>  <input
                            placeholder="Total Mark"
                            value={mark}
                            onChange={(event) => setMark(event.target.value)}
                        >
                        </input></li>

                        <li>  <div className="btn-group">
                            <button
                                onClick={addNewStudent}
                            >Add Student</button>
                        </div></li>
                    </ul>
                </div>
            </div>

        </BaseApp>
    )

}