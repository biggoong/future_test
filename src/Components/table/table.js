import React from 'react';
import './table.css';
import SmartDataTable from 'react-smart-data-table';
import Selected from "../selected/selected";

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
            selected: null
        }
    }

    getProfile = (id, firstName) => {
        let profile = this.props.data.find(e => {
            if (e.id === id && e.firstName === firstName) return e;
        });
        return profile;
    }

    onRowClick = (event, { rowData, rowIndex, tableData }) => {
        const { id, firstName } = rowData;
        //console.log(id, firstName);
        const profile = this.getProfile(id, firstName);
        //console.log(profile);
        this.setState({selected: profile});
    }  

    render(){
        //console.log(this.props.data);
        if(this.props.data){
            let dataArray = this.props.data.map((profile) => {
                return {
                    id: profile.id,
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                    email: profile.email,
                    phone: profile.phone
                }
            })

            return(
                <div>
                    <div>
                        <input value={this.state.input} onChange={(event)=>this.setState({input:event.target.value})}/>
                        <button onClick={()=>this.setState({input:''})}>Search</button>
                    </div>
                    <SmartDataTable 
                        data={dataArray}
                        name='data'
                        perPage={50}
                        sortable
                        filterValue={this.state.input}
                        onRowClick={this.onRowClick}
                    />
                    <Selected data={this.state.selected}/>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default Table;