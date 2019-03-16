import React, {Component} from 'react';
import profile from '../../assets/profile.jpg';


export  class ProfileCard extends React.Component{
    render(){
        let commonStyle ={"text=align": "center"}
        return(

                <div className="row">
                    <div className="col">
                        <div className="card profileCardStyle" >
                            <div id="sec2">
                                <div className="profileImageCardStyle">
                                    <img src={profile} className="profileImageStyle" alt="profile"/>
                                </div>
                                <div >
                                    <h5 className="card-title text-center">Raise Title Here</h5>
                                    <p className="card-text text-center bodyStyle">City, State</p>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>



        )
    }
}



