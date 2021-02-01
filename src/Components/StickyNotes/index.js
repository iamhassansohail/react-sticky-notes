import React, {Component} from 'react';
import Notes from "../Notes";
import './style.css';

class StickyNotes extends Component {
    state = {
        counter: 0,
        stickyNotes: []
    }

    getStickyNotes = (counter) => {
        return {
            text: "This is sticky note",
            id: counter,
            edit: false,
            title: "This is title"
        }
    }

    addStickyNote = () => {
        const state = {...this.state};
        const stickyNote = this.getStickyNotes(state.counter + 1);
        state.stickyNotes.push(stickyNote);
        state.counter = state.counter + 1;
        this.setState(state);

    }


    findStickyNote = (state, id) => {
        return state.stickyNotes.find((item) => {
            return item.id === id;
        });
    }
    toggleNote = (id, edit = false) => {
        const state = {...this.state};
        const finder = this.findStickyNote(state, id);
        finder.edit = edit;
        this.setState(state);
    }


    deleteNote = (id) => {
        const state = {...this.state};
        const finder = this.findStickyNote(state, id);
        const index = state.stickyNotes.indexOf(finder);
        state.stickyNotes.splice(index , 1);
        this.setState(state);
    }


    inputHandler  = (text, id) => {
        const state = {...this.state};
        const finder = this.findStickyNote(state, id);
        finder.text = text;
        this.setState(state);
    }


    render() {
        console.log("STATE", this.state);
        return (
            <div className={"stickyNotes"}>
                <div className={"buttonContainer"}>
                    <button className={"btn"} onClick={this.addStickyNote}>Add</button>
                </div>
                {this.state.stickyNotes.map((note, key) => (
                    <Notes
                        {...note}
                        inputHandler={this.inputHandler}
                        togglerAction={this.toggleNote}
                        deleteAction={this.deleteNote}
                        key={key}
                    />
                ))}
            </div>
        )
    }
}

export default StickyNotes;