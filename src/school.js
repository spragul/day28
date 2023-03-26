import { useHistory } from "react-router-dom"

export function School(){
    const history=useHistory();
    return(
    
            <div className="al-center">
                <h1>BEST SCHOOL</h1>
                <p className="school">
                <img id="school-img" src="https://www.voicesofyouth.org/sites/voy/files/styles/blog_teaser/public/images/2019-03/school.jpg?h=55a93235&itok=BOCEqGVf" title="School" alt="School"></img>
                </p>
                <div>
                <button
                className="school-btn"
                 onClick={()=>(history.push("/student"))}
                >
                    School Dashboard
                </button>
                </div>
            </div>
       
        
    )
}