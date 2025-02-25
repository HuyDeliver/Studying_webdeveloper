import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {
    state = {
        arrayJob: [
            {
                id: '1',
                title: 'developer',
                salary: '500'
            },
            {
                id: '2',
                title: 'Tester',
                salary: '400'
            },
            {
                id: '3',
                title: 'Project manager',
                salary: '500'
            }
        ]
    }

    addNewJob = (job) => {
        console.log('>> check new job', job)
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrayJob
        currentJob = currentJob.filter(item => {
            return item.id !== job.id
        })
        this.setState({
            arrayJob: currentJob
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrayJob={this.state.arrayJob}
                    deleteJob={this.deleteJob}
                />
            </>

        )
    }
}

export default MyComponent