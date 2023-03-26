import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../Student/appprovider";


export default function TeacherComponent() {
    const {teacher,setTeacher}=AppState();

 const history=useHistory();
 const teacherDelete=(idx)=>{
    const teacherAlterList=teacher.filter((tea)=>tea.id !== idx);
    setTeacher(teacherAlterList)
 }
    return (
        <BaseApp
            title="Teacher List"
        >

                <div className="teacher-c">
                {
                    teacher.map((teachers, index) => (
                        <div key={index} className="teacher-card">
                            <h1>{teachers.name}</h1>
                            <p>Subject heandel: {teachers.subject}</p>
                            <p>Experience: {teachers.experience}</p>
                            <p>School: {teachers.school}</p>
                           

                            <div className="btn-group">
                              <button
                              className="btn btn-view"
                               onClick={()=>history.push(`/teacher/view/${index}`)}
                              >View</button>

                              <button
                              className="btn btn-edit"
                              onClick={()=>history.push(`/teacher/edit/${teachers.id}`)}
                              >Edit</button>

                              <button
                              className="btn btn-delete"
                              onClick={()=>teacherDelete(teachers.id)}
                              >Delete</button>
                            </div>
                        </div>
                       
                    ))


                }
                 </div>
          

        </BaseApp>
    )
}