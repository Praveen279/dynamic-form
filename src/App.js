import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicForm from './dynamic-form'

class App extends Component {

  state = {
    submit: false,
    data: [],
    data1: []
  }
  
  componentDidMount () {
    this.setState({
      data: [{
        type: 'text',
        field: 'input',
        id: 'firstName',
        label: 'label',
        onChange: this.onNameChange,
        value: 'xyz',
        placeholder: 'placeholder text'
      }, {
        type: 'text',
        field: 'input',
        id: 'lastName',
        label: 'label',
        onChange: this.onLastNameChange,
        value: 'xyz',
        placeholder: 'placeholder text'
      }, {
        type: 'select',
        field: 'select',
        label: 'label',
        id: 'Gender',
        onChange: this.onGenderChange,
        defaultValue: 'xyz',
        value: 'abc',
        options: [{
          value: 'M',
          label: 'Male'
        }, {
          value: 'F',
          label: 'Female'
        }]
      }],
      data1: [{
        type: 'text',
        field: 'input',
        id: 'description',
        label: 'label',
        onChange: this.onDescChange,
        value: 'xyz',
        placeholder: 'placeholder text'
      }]
    })
  }

  onNameChange = (name) => {
    if (name === 'disable') {
      let data = this.state.data.map(item => { item.id === 'lastName' ? item.disabled = true : item; return item })
      this.setState({ data })
    } else {
      let data = this.state.data.map(item => { item.id === 'lastName' ? item.disabled = false : item; return item })
      this.setState({ data })
    }
  }

  onGenderChange = (gender) => {
    console.log(gender)
  }

  submitForm = (data) => {
    console.log(data)
  }

  onDescChange = (desc) => {
    console.log(desc)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} onClick={() => this.setState({ submit: !this.state.submit })} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DynamicForm formData={this.state.data} submit={this.state.submit} submitForm={this.submitForm} />
        <DynamicForm formData={this.state.data1} submit={this.state.submit} submitForm={this.submitForm} />
      </div>
    );
  }
}

export default App;
