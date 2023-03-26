import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../Student/appprovider";

export function EditTeacher() {

    const {teacher,setTeacher}=AppState();
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [experience, setExperience] = useState("");
    const [school, setSchool] = useState("");

    const {id} =useParams();
    const selectedteachers = teacher.find((tea)=>tea.id === id);
    const history = useHistory();
    
    useEffect (()=>{
        setIdx(selectedteachers.id)
        setName(selectedteachers.name)
        setSubject(selectedteachers.subject)
        setExperience(selectedteachers.experience)
        setSchool(selectedteachers.school)
       
    }, []);

    const EditedTeacher = () => {
        const editindex = teacher.findIndex(tea=>tea.id === id);
        const editedData = {
            id:idx,
            name,
            subject,
            experience,
            school,
            
        }
        teacher[editindex] = editedData;
        setTeacher([...teacher]);
        history.push("/teacher")
    }
    
    return (
        <BaseApp
        title="Teacher Data Edit"
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
                                onClick={EditedTeacher}
                            >Edit Teacher</button>
                        </div></li>
                    </ul>
                </div>
            </div>

        </BaseApp>
    )
}