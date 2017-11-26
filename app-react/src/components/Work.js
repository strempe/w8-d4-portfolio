import React, { Component } from 'react';

class Work extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div>
            <div className="container">

                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <h1>OrderlyAid</h1>
                        <h4>OrderlyAid is a medication management web application. User can keep track of all their medications in one place. Alerts remind the user when it is time to take a prescription, while the database keeps track of the amount of pills left in a medication for refills. </h4>
                    </div>
                </div>
                <div className="column is-8 is-offset-2">
                    <div className="surfAndPaddleImg">
                        <img src="../img/revolverTactical.jpg" />
                    </div>
                </div>

                <div className="column is-half is-offset-one-quarter">
                    <h1>Responsive Mockup</h1>
                    <h4>OrderlyAid is a medication management web application. User can keep track of all their medications in one place. Alerts remind the user when it is time to take a prescription, while the database keeps track of the amount of pills left in a medication for refills. </h4>
                </div>
                <div className="column is-two-thirds">
                    <div className="orderlyAidImg">
                        <img src="../img/responsive.jpg" />
                    </div>
                </div>

                <div className="column is-half is-offset-one-quarter">
                    <h1>Surf and Paddle</h1>
                    <h4>OrderlyAid is a medication management web application. User can keep track of all their medications in one place. Alerts remind the user when it is time to take a prescription, while the database keeps track of the amount of pills left in a medication for refills. </h4>
                </div>
                <div className="column is-8 is-offset-4">
                    <div className="surfAndPaddleImg">
                        <img src="../img/revolverTactical.jpg" />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Work;

