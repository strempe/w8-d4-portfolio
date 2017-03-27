import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div>
            <WorkSample title="Some project A" screenshot="/img/screenshot1.jpg" /> 
        </div>;

    }
}

export default Work;
