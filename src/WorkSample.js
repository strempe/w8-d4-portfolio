import React, { Component } from 'react';

class WorkSample extends Component {
    // You only need constructor
    constructor(props) {
        super(props);

        // Internal values that can change over time with this.setState({}) calls
        this.state = {
            style: ''
        }
    }

    // You can read incoming props, like title="", using this.props.title ...wrapping that in {} will output it to the screen
    render() {
        return <div>
        <div className="container">

            <div className="content">
                <div className="columns">
                    <div className="column is-8">
                        <h2>Second level</h2>
                        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                    </div>
                </div>
            </div>

            <div className="columns work">
                <div className="column is-half">
                    <figure className="image is-2by1">
                        <img src="http://bulma.io/images/placeholders/256x256.png" />
                    </figure>
                </div>

                <div className="column is-half">
                    <figure className="image is-2by1">
                        <img src="http://bulma.io/images/placeholders/256x256.png" />
                    </figure>
                </div>
            </div>

            <div className="columns work">
                <div className="column">
                    <figure className="image is-2by1">
                        <img src="../img/revolverTactical.jpg" />
                    </figure>
                </div>
                
                <div className="column">
                    <figure className="image is-2by1">
                        <img src="../img/nourishWellness.jpg" />
                    </figure>
                </div>
            </div>

        {/*PROJECTS*/}
            <div className="content">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <h6>Client / Project</h6>
                        <h2>Project Title</h2>                        
                        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
   
       

        
    }
}

export default WorkSample;

