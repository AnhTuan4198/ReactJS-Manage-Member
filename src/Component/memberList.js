import React,{Component} from 'react';
import Member from './member';
import './Css/memberList.css'

export default class MemberList extends Component{
  
    render(){
        //console.log(this.props.members)
        const memberList = this.props.members.map(mem => {
          return (
           
              <Member
              key={mem.stt}
              memName={mem.name}
              memId={mem.id}
              memFunction={mem.function}
              memTel={mem.tel}
              memStt={mem.stt}
              editMember={()=>this.props.getEditMember(mem)}
              deleteFunction={this.props.deleteFunction}
            />
          );
        });
        return (
          <table className="MemberList">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone number</th>
                <th>Function</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {memberList}
            </tbody>
          </table>
        );
    }
}