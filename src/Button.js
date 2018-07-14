import React, {Component} from "react";

class Button extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: "Not clicked"
        }
    }

    onClick() {
        this.setState({
            message: "Clicked"
        })
        if(this.props.onClick)
            this.props.onClick();
    }

    render() {
        return (
        <button onClick={this.onClick.bind(this)}>
        {this.state.message}
        </button>)
    }
}

export default Button;