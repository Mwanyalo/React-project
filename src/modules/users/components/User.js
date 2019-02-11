import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../actions';
import Card from 'material-ui/Card';

class User extends Component{

  constructor(props) {
    super(props);
     
    this.state = {
      ...props.user
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onOccupationChange = this.onOccupationChange.bind(this);
    this.onBioChange = this.onBioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(e) {
    const name = e.target.value;
    this.setState(() => ({ name: name }));
  }

  onEmailChange(e) {
      const email = e.target.value;
      this.setState(() => ({ email: email }));
  }

  onOccupationChange(e) {
      const occupation = e.target.value;
      this.setState(() => ({ occupation: occupation }));
  }

  onBioChange(e) {
      const bio = e.target.value;
      this.setState(() => ({ bio: bio }));
  }
  
  onSubmit(e) {
    e.preventDefault();
    if (this.state.id) {
      this.props.userActions.updateUser(this.state);
    }
  }

  render() {
    const {user} = this.props;

    return (
      
     <div className="edit-form col-sm-offset-2 col-sm-8">

     <Card className="edit-card">
        <h2>Edit User</h2>

        <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Full Name</label>
          <input 
            className="form-control"
            type="text"
            placeholder="John Doe"               
            value={this.state.name}
            onChange={this.onNameChange} 
            required/>
        </div>
          <br />

          <div className="form-group">
            <label>Email address</label>
            <input 
              className="form-control"
              type="email"
              placeholder="john.doe@email.com"
              value={this.state.email}
              onChange={this.onEmailChange}
              required />
          </div>
          <br />

          <div className="form-group">
            <label>Ocupation</label>
            <input 
              className="form-control"
              type="text" 
              placeholder="Occupation"
              value={this.state.occupation}
              onChange={this.onOccupationChange}
              required />
          </div>
          <br />

          <div className="form-group">
            <label >Bio</label>
            <textarea 
              className="form-control"
              value={this.state.bio}
              onChange={this.onBioChange}
              required />
          </div>
          <br />
        
        <div className="btn-submit">
          <button type="submit" className="btn btn-primary">Edit User</button>
        </div>
         
        </form>

      </Card>
     </div>  
    );
  }

}

const mapStateToProps = (state, prop) => {
  return { 
     user: state.users.list.find((user) =>  user.id ==  prop.params.id) 
  }
};

const mapDispatchToProps = (dispatch) => {
	return {
		userActions: bindActionCreators(UserActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);