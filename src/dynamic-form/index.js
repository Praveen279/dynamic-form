import React from 'react'
import PropTypes from 'prop-types'

class DynamicForm extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.submit) {
            this.submitForm()
        }
    }

    renderElement = (item) => {
        switch (item.field) {
            case 'input':
                return this.renderInputElement(item)
            case 'select':
                return this.renderSelectElement(item)
            case 'textarea':
                return this.renderTextAreaElement(item)
            default:
                return
        }
    }

    renderInputElement = (item) => {
        return <div>
            <input onChange={(e) => {
                this.setState({ [item.id]: e.target.value });
                if (item.onChange) {
                    item.onChange(e.target.value)
                }
            }}
            disabled={item.disabled}
            />
        </div>
    }

    submitForm = () => {
        this.props.submitForm(this.state)
    }

    renderSelectElement = (item) => {
        return <div>
            <select onChange={(e) => {
                this.setState({ [item.id]: e.target.value });
                if (item.onChange) {
                    item.onChange(e.target.value)
                }
            }}>
                {item.options.map(option => {
                    return <option value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    }


    render() {
        return (
            <div>
                {this.props.formData.map(item => {
                    return this.renderElement(item)
                })}
            </div>
        )
    }
}

DynamicForm.propTypes = {
    formData: PropTypes.array,
    submit: PropTypes.bool,
    submitForm: PropTypes.func
}

export default DynamicForm
