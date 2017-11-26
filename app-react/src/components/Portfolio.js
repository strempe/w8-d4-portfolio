import React from 'react'
import { browserHistory } from 'react-router'
import WorkSample from './Work';

class Portfolio extends React.Component {
    constructor() {
        super()
        this.goToWork = this.goToWork.bind(this)
    }
     goToWork() {
        browserHistory.push('/work')
    }
    goToAbout() {
        browserHistory.push('/about')
    }
    goToContact() {
        browserHistory.push('/contact')
    }

    render() {

    return <div>
        <section className="hero is-medium is-bold">
             <h1>Sara Trempe | UX UI Developer</h1>
                <div className="hero-body">
                    <div className="container">
                        <aside className="menu has-shadow">
                            <h1 id="title1" className="title is-tab is-active is-1 title-ontop" onClick={this.goToWork}>
                                Work
                            <div className="highlight highlightWork"></div>
                            </h1>
                            
                            <h1 className="title is-1 title-ontop" onClick={this.goToAbout}>
                            About
                            <div className="highlight highlightAbout"></div>
                            </h1>

                            <h1 className="title is-1 title-ontop" onClick={this.goToContact}>
                            Contact
                            <div className="highlight highlightContact"></div>
                            </h1>
                        </aside>
                    </div>
                </div>
            </section>
            {/*WorkSample title="Some project A" screenshot="/img/screenshot1.jpg" />*/}

            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                        </p>

                        <p>
                            <a className="icon" href="https://github.com/jgthms/bulma">
                                <i className="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    }
}

export default Portfolio
