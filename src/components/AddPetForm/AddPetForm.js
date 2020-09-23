import React, { Component } from 'react';

class AddPetForm extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        owner: ''
    }

    //insert get request here for pet owners





    //functions that will handle the collection of info
    //from the form
    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleBreed = (event) => {
        this.setState({
            breed: event.target.value
        })
    }

    handleOwner = (event) => {
        switch (event.target.value) {
            case 'owner':
                this.setState({
                    owner: event.target.value
                })
                break;
            default:
        }
    }


    //submit function, collects data and sends to redux
    // handleSubmit = () => {
    //     this.props.dispatch({ type: UNKOWN, payload: this.state})
    // }

    render() {
        return (
            <div>
                <input placeholder="Pet Name" onChange={this.handleName}></input>
                <input placeholder="Pet Color" onChange={this.handleColor}></input>
                <input placeholder="Pet Breed" onChange={this.handleBreed}></input>
                {/* will need to put in pet owner name from redux */}
                <select name="genres" onChange={this.handleOwner}>
                    <option value='owner'>PET OWNER NAME(this will need to change)</option>
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default AddPetForm;
