import React from 'react'
import './ListToDo.scss'
import AddToDo from './AddToDo'
import { toast, ToastContainer } from 'react-toastify';
import { isInaccessible } from '@testing-library/react';
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
                id: 'todo3',
                title: 'fixing bug'
            }
        ],
        editToDo: {}
    }
    AddNewToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })

        toast.success("wow! so easy")
    }

    HandleClickDelete = (todo) => {
        let curentToDo = this.state.listToDo
        curentToDo = curentToDo.filter(item => item.id !== todo.id)
        this.setState({
            listToDo: curentToDo
        })
    }
    handleEditTodo = (todo) => {
        let { editToDo, listToDo } = this.state
        let isEmtyToDo = Object.keys(editToDo).length === 0

        if (isEmtyToDo === false && editToDo.id === todo.id) {
            let listToDoCopy = [...listToDo]

            let objIndex = listToDoCopy.findIndex((item) => item.id === todo.id)

            listToDoCopy[objIndex].title = editToDo.title

            this.setState({
                listToDo: listToDoCopy,
                editToDo: {}
            })
            toast.success("update success")
            return
        }

        this.setState({
            editToDo: todo
        })
    }
    HandleOnChangeInput = (e) => {
        let curentEdit = { ...this.state.editToDo }
        curentEdit.title = e.target.value
        this.setState({
            editToDo: curentEdit
        })
    }
    render() {
        let { listToDo, editToDo } = this.state
        let isEmtyToDo = Object.keys(editToDo).length === 0
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
                                        {isEmtyToDo === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editToDo.id === item.id ?
                                                    <span>
                                                        {index + 1}-<input type="text"
                                                            onChange={(e) => this.HandleOnChangeInput(e)}
                                                            value={editToDo.title} />
                                                    </span>
                                                    : <span>{index + 1} - {item.title}</span>
                                                }

                                            </>
                                        }
                                        <button
                                            onClick={() => {
                                                this.handleEditTodo(item)
                                            }}
                                        >{isEmtyToDo == false && editToDo.id === item.id ?
                                            "Save" : "Edit"
                                            }
                                        </button>
                                        <button
                                            onClick={() => {
                                                this.HandleClickDelete(item)
                                            }}
                                        >Delete</button>
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