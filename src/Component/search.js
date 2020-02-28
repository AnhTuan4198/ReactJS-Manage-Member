import React,{Component} from 'react';


export default class SearchBox extends Component{
    constructor(props) {
        super(props)
        this.state={
            search:''
        }
        this.getInput=this.getInput.bind(this);
        this.pushBackInput=this.pushBackInput.bind(this);
    }
    getInput(e){
        this.setState({[e.target.name]:e.target.value})
    }
    pushBackInput(){
        this.props.getInputSearch(this.state.search);
    }
    render(){
        //console.log(this.state)
        return(
        <div className="search-box">
            <input type='text'
            name='search'
            placeholder='Search member by name'
            onChange={this.getInput}
            >
            </input>
            <button className='search-btn' onClick={this.pushBackInput} >Search</button>
        </div>
    )
    }
    
}