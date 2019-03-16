import React, {Component} from 'react'
import {SummaryTiles} from "./SummaryTiles";

export class PerkSummary extends Component {
    render() {
        return (
            <div className="card" style={{"width": "100%"}}>
                <span className="new"/>
                <div className="card-header flex-column" style={{"background-color": "white"}}>
                    <h5>Perk Usage Summary</h5>
                    <form>
                        <div className="row" style={{"color": "gray"}}>
                            <div className="col bodyStyle col-centered">
                                Perks Issued
                            </div>
                            <div className="col bodyStyle col-centered">
                                Total Value/Units
                            </div>
                            <div className="col bodyStyle col-centered">
                                Value Used
                            </div>
                            <div className="col bodyStyle col-centered">
                                Remaining Value
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-centered">
                                400
                            </div>
                            <div className="col col-centered">
                                $400,000.00
                            </div>
                            <div className="col col-centered">
                                $200,000.00
                            </div>
                            <div className="col col-centered">
                                $200,000.00
                            </div>
                        </div>
                    </form>
                </div>

                <div className="card-body" style={{"background-color": "white"}}>
                    <h5>Recent Transactions</h5>
                </div>
                <SummaryTiles/>

            </div>

        )
    }

}