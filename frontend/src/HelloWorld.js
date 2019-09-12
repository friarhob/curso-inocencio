import React from "react"
import './HelloWorld.css'

class HelloWorld extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {title: "All Your Base Are Belong to Us", count: 1}
    }

    handleClick()
    {
        this.setState(state => ({ count: state.count+1 }));
    }
    render()
    {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {/* {this.props.colour} */}

                <h1 className={this.props.colour}>{this.state.title} ({this.state.count})</h1>
            </div>
        )
    }
}

export default HelloWorld
