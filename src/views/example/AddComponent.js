import React from 'react'
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('missing params')
            return
        }
        console.log('>>>check data input', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label for="title">Title Job:</label><br />
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handleChangTitleJob(event)}
                    /><br />
                    <label for="salary">Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleChangSalary(event)}
                    /><br />
                    <input type="submit" value="Submit"
                        onClick={(e) => this.handleSubmit(e)}
                    /><br />
                </form>
            </>
        )
    }
}

export default AddComponent