import React from 'react'

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    handleShowButton = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        console.log(">>> handle delte ", job)
        this.props.deleteJob(job)
    }
    render() {
        console.log(">> change props: ", this.props)
        const { arrayJob } = this.props
        const { showJob } = this.state
        return (
            <>
                {!showJob ? <div><button onClick={() => this.handleShowButton()}>Show</button></div>
                    :
                    <>
                        <div className='job-list'>
                            {
                                arrayJob.map((item, index) => {
                                    return (
                                        <>
                                            <div key={item.id}>
                                                {item.title} - {item.salary}
                                                <span
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        this.handleOnClickDelete(item)
                                                    }}> x</span>
                                            </div >
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowButton()}>Hide</button></div>
                    </>
                }
            </>

        )
    }
}

export default ChildComponent
