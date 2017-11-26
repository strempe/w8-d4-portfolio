import React, { Component } from 'react';
class AllProjects extends React.Component{


render() {
    return <div>
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
                    <img src="/img/revolverTactical.jpg" />
                </figure>
            </div>

            <div className="column">
                <figure className="image is-2by1">
                    <img src="/img/nourishWellness.jpg" />
                </figure>
            </div>
        </div>
    </div>
}
}
export default AllProjects