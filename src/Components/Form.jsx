import './Components.scss'
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text:'',
      inputText:'',
      mobile:'',
      education:'',
      city:'',
      dateofbirth:'',
      status:'edit', 
    }

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.textChange=this.textChange.bind(this)
    this.mobile=this.mobile.bind(this)
    this.education=this.education.bind(this)
    this.city=this.city.bind(this)
    this.dateofbirth=this.dateofbirth.bind(this)
    
  }

  textChange = (event) => {
    this.setState({
      inputText: event.target.value,
    })
  }

  mobile=(event)=>{
    this.setState({
    mobile:event.target.value,
    })
  }

  education=(event)=>{
    this.setState({
    education:event.target.value,
    })
  }

  city=(event)=>{
    this.setState({
    city:event.target.value,
    })
  }

  dateofbirth=(event)=>{
    this.setState({
    dateofbirth:event.target.value,
    })
  }

  save = (event) => {
    this.setState({
      status:'view',
      text: this.state.inputText,
    })
  }

  edit = (event) => {
    this.setState({
      status:'edit',
    })
  }

  render() {
    if (this.state.status === 'view') {

      return <>
    <div className='view-container'>
    <h4>Preview of Your Profile</h4>
    <h3>Name:<span>{this.state.text}</span></h3>
      <h3>D.O.B:<span>{this.state.dateofbirth}</span></h3>
      <h3>Education:<span>{this.state.education}</span></h3>
      <h3>Mobile no:<span>{this.state.mobile}</span></h3>
     
      <h3>City:<span>{this.state.city}</span></h3>

     
      <button onClick={this.edit}>edit</button>
    </div>
  
      </>
    } else {
      return (
        <>
          <div className="form">
          <h2>Let's Create Your Profile</h2>
           <div className='input'>
           <input type="text" defaultValue={this.state.inputText}  onChange={this.textChange} placeholder='Enter Your Full Name'/>
           <input type="text" defaultValue={this.state.dateofbirth}  onChange={this.dateofbirth} placeholder='D.O.B'/>
           <input type="text" defaultValue={this.state.education}  onChange={this.education} placeholder='Education'/>
           <input type="number" defaultValue={this.state.mobile}  onChange={this.mobile} placeholder='Mobile-no'/>
           <input type="text" defaultValue={this.state.city}  onChange={this.city} placeholder='City'/>




           </div>

           
          <button onClick={this.save}>save</button>
          </div>
          
           
           
          
          
        </>
      );
    }
  }
}

export default Form
