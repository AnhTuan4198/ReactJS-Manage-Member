import React, {Component} from 'react';
import './Css/addMember.css';


export default class AddMember extends Component{
    constructor(props){
        super(props);
        this.state = {
          Showform: false,
          newMember: {
            stt: '',
            name: " ",
            id: " ",
            tel: " ",
            function: 0
          }
        };
        this.showform=this.showform.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    showform(){
        if(this.state.showform===true){
            this.setState({
                showform:false
            })
        }
        else{
            this.setState({
              showform: true
            });
        }
    }

    handleChange(e){
      this.setState({
        newMember: {
          ...this.state.newMember,
          [e.target.name]: e.target.value,
        }
      });
    }
    handleSubmit(e){
      e.preventDefault();
      this.props.AddNewMember({...this.state.newMember});
      //console.log({...this.state.newMember}) 
      this.setState({
        newMember: {
          stt:'',
          name: " ",
          id: " ",
          tel: " ",
          function: 0
        },
        showform:false
      });
      e.target.reset();
    }
    render(){
      //console.log(this.state)
        return (
          <div className="AddMember-container">
            <div className="show-close-btns">
              {this.state.showform ? (
                <div className=" btn closeform-btn" onClick={this.showform}>
                  Close from
                </div>
              ) : (
                <div className="btn showform-btn " onClick={this.showform}>
                  Add new member
                </div>
              )}
            </div>
            {this.state.showform ? (
              <div className="AddMember-form">
                <div className="AddMember-header">
                  <p>Add member form </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    placeholder="Phone number"
                    name="tel"
                    required
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    placeholder=" Member ID"
                    name="id"
                    required
                    onChange={this.handleChange}
                  ></input>
                  <select name="function" required onChange={this.handleChange}>
                    <option value>Select function</option>
                    <option value={1}>Chapter Lead</option>
                    <option value={2}>Head</option>
                    <option value={3}>Organizer</option>
                  </select>
                  <button className="btn submit-btn" type="submit">
                    ADD
                  </button>
                </form>
              </div>
            ) : (
              undefined
            )}
          </div>
        );
    }
}