import React, {Component} from 'react';
import {ProfileCard} from '../Components/Profile/ProfileCard';
import {PerkDetail} from "../Components/Detail/PerkDetail";
import {PerkSummary} from "../Components/PerkSummary/PerkSummary";

export class PerkContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid mainContainerSize">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="perkDetailCol">Perk Detail</h3>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3 form-group">
                            <ProfileCard/>
                        </div>

                        <div className="col-md-9 form-group">
                            <div className="row form-group">
                                <PerkDetail/>
                            </div>
                            <div className="row form-group">
                                <PerkSummary/>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}



