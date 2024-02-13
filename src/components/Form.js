import React from 'react'

class Form extends React.Component {
  state = {
    sitename: '',
    website: '',
    email: '',
    username: '',
    password: ''
  }

  add = (e) => {
    e.preventDefault();
    if(this.state.sitename === '' || this.state.website === '' || this.state.email === '' || this.state.username === '' || this.state.password === '') {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addPasswordHandler(this.state);
    this.setState({
      sitename: '',
      website: '',
      email: '',
      username: '',
      password: ''
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className='ui main'>
        <br></br>
        <br></br>
        <br></br>
        <h2>Add Password</h2>
        <form className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label>Site Name</label>
            <input type='text' name='sitename' placeholder='Site' value={this.state.sitename} onChange={ (e) => this.setState({sitename: e.target.value})} />
            <label>Website</label>
            <input type='url' name='website' placeholder='URL'value={this.state.website} onChange={ (e) => this.setState({website: e.target.value})}/>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email'value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})}/>
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={ (e) => this.setState({username: e.target.value})}/>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={ (e) => this.setState({password: e.target.value})}/>
          </div>
          <button className='ui button blue'>Save</button>
        </form>
      </div>
    )
  }
}

export default Form;
