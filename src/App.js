import React, {Component} from 'react';
import './Component/Css/App.css'
import SearchBox from './Component/search';
import AddMember from './Component/addMember';
import MemberList from './Component/memberList';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditMember from './Component/editMember'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      members: [
        {
          stt: 0,
          name: " Nguyen Minh Dang",
          id: "1753332",
          tel: "092301156",
          function: 1
        },
        {
          stt: 1,
          name: " Ngo Duc Tuan",
          id: "1753111",
          tel: "0923010233",
          function: 2
        },
        {
          stt: 2,
          name: " Nguyen Ngoc Anh Tuan",
          id: "1753592",
          tel: "0923011562",
          function: 3
        }
      ],
      editMember:{},
      showEditForm:false,
      nextStt: 3,
      searchKey: ""
    };
    this.handleAddNewMember=this.handleAddNewMember.bind(this);
    this.handleSearching=this.handleSearching.bind(this);
    this.getEditMember=this.getEditMember.bind(this);
    this.saveEditMember=this.saveEditMember.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.closedEditForm=this.closedEditForm.bind(this);
  }
 
  handleAddNewMember(obj){
    this.setState((preState,props)=>{
      const newMember={...obj,stt:this.state.nextStt};
      console.log(newMember);
       return {
          nextStt:preState+1,
          members:[...this.state.members,newMember]
       }
    })
  }
  closedEditForm(){
    this.setState({showEditForm:!this.state.showEditForm})
  }
  handleSearching(keyWord){
    //console.log(`we get  ${keyWord}`);
    this.setState({searchKey:keyWord})
    let members=[...this.state.members];
  }
  getEditMember(mem){
    const editMember={...mem}
    this.setState({ editMember: editMember, showEditForm: !this.state.showEditForm });
  }
  saveEditMember(editedMember){
    //alert('get information back success')
    let editedMem=[...this.state.members];
    //console.log(editedMember)
    editedMem.map((mem)=>{
      if(mem.stt === editedMember.stt){
        mem.name=editedMember.name;
        mem.tel = editedMember.tel;
        mem.function = editedMember.function;
        mem.id=editedMember.id;
      }
    })
    this.setState({members:editedMem,showEditForm:!this.state.showEditForm})
  }

  handleDelete(stt){
    const mem=this.state.members.filter(mem=>mem.stt !== stt)
    this.setState({members:[...mem]})
  }
  render(){
    //console.log(this.state.editMember)
    //console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>PROJECT MANAGE MEMBER WITH JSON</h1>
          <br></br>
        </header>
        <div className="App-body">
          {this.state.showEditForm ? (
            <EditMember
              className="edit-area"
              editMember={this.state.editMember}
              save={this.saveEditMember}
              closedForm={this.closedEditForm}
            />
          ) : null}
          <SearchBox
            className="search-area"
            getInputSearch={this.handleSearching}
          />
          <div className="Main">
            <MemberList
              members={this.state.members}
              getEditMember={this.getEditMember}
              deleteFunction={this.handleDelete}
            />
            <AddMember AddNewMember={this.handleAddNewMember} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
