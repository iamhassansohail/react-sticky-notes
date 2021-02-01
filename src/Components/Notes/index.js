import React, {Component} from 'react';
import './style.css';

class Notes extends Component {
    render() {
        console.log("PROPS", this.props);
        return (
            <div className={"notes"}>
                <h2>{this.props.id}</h2>
                <div className={"buttons"}>
                    <button className={"btn"} onClick={() => this.props.togglerAction(this.props.id , true)}>Edit</button>
                    <button className={"btn"} onClick={() => this.props.deleteAction(this.props.id)} >Delete</button>
                </div>
                {this.props.edit ? (
                    <>
                        <textarea onChange={(e) => this.props.inputHandler(e.target.value, this.props.id)}>{this.props.text}</textarea>
                        <button className={"btn"} onClick={() => this.props.togglerAction(this.props.id)}>Save</button>
                    </>
                ) : (
                    <span>{this.props.text}</span>
                )}


            </div>
        )
    }
}

export default Notes;