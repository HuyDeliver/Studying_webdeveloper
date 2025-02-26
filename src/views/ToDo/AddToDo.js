import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
    state = {
        title: ''
    }
    HandleOnchangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleOnClickToDo = () => {
        if (!this.state.title) {
            //undefined, null,
            toast.error("Missing ToDoList")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10001),
            title: this.state.title
        }
        this.props.AddNewToDo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(e) => {
                            this.HandleOnchangeTitle(e)
                        }}
                    />
                    <button type="button"
                        onClick={() => {
                            this.handleOnClickToDo()
                        }}
                    >Add</button>
                </div>
            </>
        )
    }
}

export default AddToDo