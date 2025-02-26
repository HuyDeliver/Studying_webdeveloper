import React from 'react'
import './ListToDo.scss'
import AddToDo from './AddToDo'
import { toast, ToastContainer } from 'react-toastify';
class ListToDo extends React.Component {
    state = {
        listToDo: [
            {
                id: 'todo1',
                title: 'Doing homework'
            },
            {
                id: 'todo2',
                title: 'study code'
            },
            {
                id: 'todo2',
                title: 'fixing bug'
            }
        ]
    }
    AddNewToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })

        toast.success("wow! so easy")
    }
    render() {
        let { listToDo } = this.state
        return (
            <>
                <div className='listToDo'>
                    <AddToDo
                        AddNewToDo={this.AddNewToDo}
                    />
                    <div className="content-todo">
                        {listToDo && listToDo.length > 0 &&
                            listToDo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <span>{index + 1} - {item.title}</span>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </>

        )
    }
}

export default ListToDo