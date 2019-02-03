import React from 'react';

class Buttons extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.onClick}>Small data</button>
                <button onClick={this.props.onClick}>Large data</button>
            </div>
        )
    }
}

export default Buttons;