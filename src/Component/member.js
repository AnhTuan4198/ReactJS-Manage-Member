import React ,{Component} from 'react'
import './Css/member.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Member(props){
 function showFunction(memFunction){
    if(memFunction===1){
      return 'Chapter Lead'
    }else if(memFunction===2){
      return 'Head'
    }else{
      return "Organizer"  
    }
  }
  const {memId,memName,memTel,memFunction}=props;
   return (
     <tr >
       <td >
         {memId}
       </td>
       <td >
         {memName}
       </td>
       <td >
         {memTel}
       </td>
       <td >
         {showFunction(memFunction)}
       </td>
       <td>
         <div className="Member-Modify">
           <div className="Member-Modify-edit-btn" onClick={props.editMember}>Edit</div>
           <div className="Member-Modify-delete-btn" onClick={()=>props.deleteFunction(props.memStt)}>DELETE</div>
         </div>
       </td>
     </tr>
   );
}