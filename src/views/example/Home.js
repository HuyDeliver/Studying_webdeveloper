import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import logo from "../../assets/images/8concuent.png"
import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    handleDeleteUser = (user) => {
        console.log(">>>check props", user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log(">>check props: ", this.props.dataRedux)
        let listUser = this.props.dataRedux
        return (
            <>
                <div>Hỏi dân it</div>
                <div>
                    <img src={logo} alt=""
                        style={{ width: '500px', height: '500px' }}
                    />
                </div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id}>
                                        {index + 1}-{item.name}
                                        <span onClick={() => {
                                            this.handleDeleteUser(item)
                                        }}  > x</span>
                                    </div>

                                </>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

// export default withRouter(Home)
const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Color(Home))