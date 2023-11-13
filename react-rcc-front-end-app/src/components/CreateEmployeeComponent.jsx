import React, { Component } from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                     <div className='row'>
                     <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3>Add Employee</h3>
                     </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;