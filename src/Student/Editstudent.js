import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "./appprovider";

export function EditStudent() {
    const {student,setStudent}=AppState();
    const [idx, setIdx] = useState("")
    const [name, setName] = useState("");
    const [std, setStd] = useState("");
    const [session, setSession] = useState("");
    const [school, setSchool] = useState("");
    const [mark, setMark] = useState("");

    const {id} =useParams();
    const selectedStudent = student.find((stu)=>stu.id === id);
    const history = useHistory();
    
    useEffect (()=>{
        setIdx(selectedStudent.id)
        setName(selectedStudent.name)
        setStd(selectedStudent.std)
        setSession(selectedStudent.session)
        setSchool(selectedStudent.school)
        setMark(selectedStudent.mark)
    }, []);

    const EditedStudent = () => {
        const editindex = student.findIndex(stu=>stu.id === id);
        const editedData = {
            id:idx,
            name,
            std,
            session,
            school,
            mark
        }
        student[editindex] = editedData;
        setStudent([...student]);
        history.push("/student")
    }
    
    return (
        <BaseApp
        title="Student Data Edit"
        >
            <div className="add-container">
                <div className="box-model">
                    <ul type="none">
                        <li><input
                            placeholder="id"
                            value={idx}
                            onChange={(event) => setIdx(event.target.value)}
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
                                onClick={EditedStudent}
                            >Edit Student</button>
                        </div></li>
                    </ul>
                </div>
            </div>

        </BaseApp>
    )
}