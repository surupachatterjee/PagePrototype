import React, {Component} from 'react'

export class PerkDetail extends Component{
    render(){
        return(
            <div className="card" >
                <span className="new"/>
                <div className="card-header headerStyle" style={{"background-color": "white","width":"100%"}}>
                    <h5>
                    <span>Perk Detail</span>
                        <span className="float-right">Does Not Expire</span></h5>
                </div>
                <div className="card-body" style={{"background-color": "#f8f8f8"}}>

                    <span className="card-text bodyStyle" >
                        Free Admission to the AMC Theatre elit,sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>

                </div>
            </div>
        )
    }
}