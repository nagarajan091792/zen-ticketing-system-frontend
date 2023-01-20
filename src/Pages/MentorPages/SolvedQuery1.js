import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../config";
function SolvedQuery1 () {
    let params = useParams();  
    const [user, setUser] = useState([]);
    useEffect(() => {fetchData(); },[]);
    async function fetchData() {
        try {
          const response = await axios.get(`${config.api}/portal/query/${params.id}`,        
             {
               headers: {
                authorization: `${localStorage.getItem("mentortoken")}`,
              },
             })           
        setUser(response.data);                
        } catch (error) {        
          console.log("error");
        }
      };
      const a =   user.solveid ? "closed" : "open"
    return(
        <>
       <div className="container">
                <div className="row">
                    <div class="card-group">
                        <div className="col-sm-6">
                            <div class="card" style={{height: "40rem"}}>
                                <div class="card-body">
<h2>Solved Query</h2><hr/>
<p>Hello, {user.username}</p>

<p> {user.answerthequery}</p>
<p>{user.solvedate}</p>
                                </div>
                            </div></div>

                        <div className="col-sm-6">
                            <div class="card" style={{height: "40rem"}}>
                                <div class="card-body">
                                <h2>{user.username} Query Details </h2><hr/>
                                <div className="row">
                                    <div className="col-sm-6">
<span>Create at :</span>
<p>{user.date}</p>
<span>Description:</span>
<p>{user.querytitle}</p>
<p>{user.querydescription}</p>

<span>Category:</span>
<p>{user.category}</p>
<span>Preferred Language:</span>
<p>{user.language}</p>



                                    </div>
                                    
                                    <div className="col-sm-6">
                                    <div class="badge text-bg-success">{a}</div><br/><br/>

                                   <span>Assigned to:</span>
                                   <p>{user.solvementorname}</p>
                                   <span>Batch: {user.batch}</span>
                                   
                            
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        
                        </div>
                </div>
            </div>
        </>
    )
}
export default SolvedQuery1