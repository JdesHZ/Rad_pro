import React from 'react'
import './index.scss'

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="custom-loading">
                Loading...
            </div>
        )
    }
}


export default Loading