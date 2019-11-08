// import React from 'react';
// // import TracksIndex from '../home_page/tracks_index';


// class Splash extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { imageChanged: false };

//         this.intervalId = null;
//         this.imageRef = React.createRef();
//         this.swapImage = this.swapImage.bind(this);
//     }

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.swapImage();
//         }, 3000);
//         // this.props.fetchTracks();
//     }

//     componentWillUnmount() {
//         clearInterval(this.intervalId);
//     }

//     swapImage() {
//         if (this.state.imageChanged) {
//             const putImageBack = this.imageRef.current.children[0];
//             this.imageRef.current.children[0].remove();
//             this.imageRef.current.appendChild(putImageBack);
//         }
//         this.setState({ imageChanged: !this.state.imageChanged });
//     }

//     render() {
//         // const fetchCurrentTrack = this.props.fetchCurrentTrack;
//         // const tracks = this.props.tracks.length > 0 ?
//         //     <TracksIndex
//         //         tracks={this.props.tracks}
//         //         history={this.props.history}
//         //         fetchCurrentTrack={fetchCurrentTrack}
//         //         limit={6}
//         //         includePlayButton={false}
//         //         trackSlider={false}
//         //     /> : null;

//         const headerImages = (
//             <div ref={this.imageRef} className={`header-images ${this.state.imageChanged ? "slide" : ""}`}>
//                 <img src={window.splashImg1} />
//                 <div className='splash-header-two'></div>
//             </div>
//         );

//         return (
//             <>
//                 <div className="splash-page">
//                     <div className="header">
//                         {headerImages}

//                         <div className="header-top">

//                             <span className="header-name">
//                                 <img src={window.scIcon} />
//                                 <span id="soricloud-splash">SORICLOUD</span>
//                             </span>

//                             <div className="header-nav">
//                                 <button
//                                     onClick={() => this.props.openModal('login')}
//                                     className="splash-button sign-in">Sign in</button>
//                                 <button
//                                     onClick={() => this.props.openModal('signup')}
//                                     className="splash-button create-account">Create account</button>
//                             </div>
                        
//                         </div>

//                         <div className="header-mid">

//                             <div className="header-content">

//                                 <h1>What's next in music is first on SoriCloud</h1>
//                                 <p>Upload your first track and begin your journey. SoriCloud gives you space to create, find your fans, and connect with other artists.</p>
//                                 <button className="splash-button demo-login" onClick={() => this.props.openModal('login')}>Start Demo Login</button>

//                             </div>

//                         </div>

//                     </div>
//                     <div className="splash-body">
//                         <h1 className="splash-title">Hear what’s trending in the SoriCloud community</h1>
//                         <div className="splash-track-index">
//                             {/* {tracks} */}
//                         </div>
//                     </div>

//                     <div>
//                         <img src={window.splashImg3} />
//                     </div>

//                     <div>
//                         <img src={window.splashImg4} />
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// export default Splash;

/*--------------------------------------------------------------*/

import React from 'react';
import { Link } from 'react-router-dom';
// import { fetchSplashtracks } from '../actions/track_actions  ';
// import TrackIndexItem from './tracks/track_index_item';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchSplashtracks();
    // }

    render() {
        // const { tracks } = this.props;
        // let track = null;
        // if (tracks) {
        //     track = tracks.map((track, i) => {
        //         return < TrackIndexItem track={track} liId={i} key={track.id} />
        //     });
        // }

        const buttons = this.props.currentUser ? (
            <div className="splash-buttons-container logout-splash">
                <button className="nav-button login login-splash" onClick={this.props.logOut}>Log Out</button>
            </div>
        ) : (
                <div className="splash-buttons-container">
                    <button
                        className="nav-button login login-splash"
                        onClick={() => this.props.openModal({ modal: 'login', splash: true })}>Sign In</button>
                    <button
                        className="nav-button signup"
                        onClick={() => this.props.openModal({ modal: 'signup', splash: true })}>Create account</button>
                    <button
                        className="nav-button signup"
                        onClick={() => this.props.openModal({ modal: 'login', splash: true, demo: true })}>Demo</button>
                </div>
            )

        return (
            <div className="splash-background">
                <div className="splash-main">

                    <section className="splash-image-1">
                        <div className="splash-nav">
                            <div className="splash-sc-logo">
                                <i className="fab fa-soundcloud splash-sc-icon"></i>
                                <h3>SORICLOUD</h3>
                            </div>
                            {buttons}
                        </div>
                        <div>
                            <h4 className="splash-text-title">
                                What's next in music is first on SoriCloud
                            </h4>
                            <p className="splash-text-p">
                                Upload your first track and begin your journey. SoriCloud gives you space to create, find your fans, and connect with other artists.
                            </p>
                        </div>
                    </section>

                    <section className="splash-search">

                    </section>

                    <section className="user-tracks-section splash-music">
                        <h3 className="splash-music-text">
                            Hear what’s trending in the SoriCloud community
                        </h3>
                        <ul className="album-covers">
                            {/* {track} */}
                        </ul>
                        <Link to="/tracks" className="nav-button signup collection">
                            Explore the collection
                        </Link>
                    </section>

                </div>
            </div>
        );
    }
}

export default Splash;
