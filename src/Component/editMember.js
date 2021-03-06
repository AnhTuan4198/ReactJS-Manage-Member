import React ,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import './Css/Editmember.css'

export default class EditMember extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     editedMember: {
                       stt: this.props.editMember.stt,
                       tel: this.props.editMember.tel,
                       name: this.props.editMember.name,
                       id: this.props.editMember.id,
                       function: this.props.editMember.function
                     }
                   };
                    this.handleChange = this.handleChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                    this.closedEditForm=this.closedEditForm.bind(this)
                  
                 }
                 handleChange(e) {
                   this.setState({
                     editedMember: {
                       ...this.state.editedMember,
                       [e.target.name]: e.target.value
                     }
                   });
                   //console.log(this.state)
                 }
                 handleSubmit(e) {
                   e.preventDefault();
                   this.props.save({...this.state.editedMember});
                   console.log(this.state.editedMember)
                   this.setState({
                     editedMember: {
                        stt:'',
                        name: " ",
                        id: " ",
                        tel: " ",
                        function: 0
                     }
                   });
                   e.target.reset();
                 }
                 closedEditForm(e){
                   if(e.target.id==='background'){
                     this.props.closedForm();
                   }
                 }
                 render() {
                    console.log(this.state)
                   return (
                     <div className="background" id="background" onClick={this.closedEditForm}>
                       <div className="EditMember-container">
                         <button className="closed-btn" id="closed-btn" onClick={this.props.closedForm}>
                           <FontAwesomeIcon icon={faWindowClose} />
                         </button>
                         <div className="EditMember-form">
                           <div className="EditMember-header">
                             <p>Edit member form </p>
                           </div>
                           <form
                             className="EditInput-form"
                             onSubmit={this.handleSubmit}
                           >
                             <input
                               type="text"
                               placeholder="Name"
                               name="name"
                               onChange={this.handleChange}
                               required
                               defaultValue={this.props.editMember.name}
                             ></input>
                             <input
                               type="text"
                               placeholder="Phone number"
                               name="tel"
                               onChange={this.handleChange}
                               defaultValue={this.props.editMember.tel}
                               required
                             ></input>
                             <input
                               type="text"
                               placeholder=" Member ID"
                               name="id"
                               required
                               defaultValue={this.props.editMember.id}
                               onChange={this.handleChange}
                             ></input>
                             <select
                               name="function"
                               required
                               onChange={this.handleChange}
                               defaultValue={this.props.editMember.function}
                             >
                               <option value>Select function</option>
                               <option value={1}>Chapter Lead</option>
                               <option value={2}>Head</option>
                               <option value={3}>Organizer</option>
                             </select>
                             <button className="btn submit-btn" type="submit">
                               SAVE
                             </button>
                           </form>
                         </div>
                       </div>
                     </div>
                   );
    }
}