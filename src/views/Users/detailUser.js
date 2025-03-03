import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleBackBtn = () => {
        this.props.history.push('/users')
    }
    render() {
        console.log(">>check prop", this.props)
        let { user } = this.state
        let isEmtyToDo = Object.keys(user).length === 0
        return (
            <>
                <div>Hello world with id: {this.props.match.params.id}</div>
                {isEmtyToDo === false &&
                    <>
                        <div>User's name: {user.first_name}{user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt="" />
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    this.handleBackBtn()
                                }}

                            >back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser)