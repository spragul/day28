import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
   const history = useHistory();
    return (
        <div>
            <div>
            <div className="nav-styles">
            <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/student")}
                    >Student</button>
                </span>
                
                <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/add/student")}
                    >Add Student</button>
                </span>

                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/teacher")}
                    >Teacher</button>
                </span>

                <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/teacher/add")}
                    >Add Teacher</button>
                </span>

            </div>
            <div className="title">{title}</div>
            </div>

             <div className="childred">
                {children}
        <footer>
            contact us
             <div>email : schoolmange@gmail.com</div>
             <div>phone : 9788652355</div>
         </footer>
             
             </div>

        </div>
    )
}