import React from "react";
import axios from "axios";
import './ListUser.scss'
class ListUsers extends React.Component {
    state = {
        listsUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
        console.log(">>check data", res.data)
    }
    render() {
        let { listUser } = this.state
        return (
            <>
                <div className="list-user-container">
                    <div className="title">
                        Fetch all list user
                    </div>
                    <div className="list-user-content">
                        {listUser && listUser.length > 0 &&
                            listUser.map((item, index) => {
                                return (
                                    <div className="child" key={item.id}>
                                        {index + 1} - {item.first_name}{item.last_name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </>

        )
    }
}

export default ListUsers