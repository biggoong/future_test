import React from 'react';
import './selected.css';

class Selected extends React.Component{
    render(){
        if(this.props.data){
            //console.log(this.props.data.description);
            return(
                <div className="selected">
                    <hr/>
                    <ul>
                        <li>Selected user: <b>{`${this.props.data.firstName} ${this.props.data.lastName}`}</b></li>
                        <li>Description:</li>
                        <li><textarea value={this.props.data.description} readOnly></textarea></li>
                        <li>Address: <b>{this.props.data.address.streetAddress}</b></li>
                        <li>City: <b>{this.props.data.address.city}</b></li>
                        <li>State: <b>{this.props.data.address.state}</b></li>
                        <li>Zip: <b>{this.props.data.address.zip}</b></li>
                    </ul>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default Selected;