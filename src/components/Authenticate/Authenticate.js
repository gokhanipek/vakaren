import React from 'react'
import Spy from './../../assets/images/anonymous.png';
import SpyDark from './../../assets/images/anonymous-dark.png';
import './Authenticate.scss';

const Authenticate = ({onClickHandler, isAuthenticated}) => {

    const sessionInfo = isAuthenticated ? 'Authenticated Session' : 'Unauthorized Session'

    return (
        <div className={`authorize-image-container ${isAuthenticated ? 'authenticated' : 'unauthenticated'}`}>
            <img className="authorize-image" alt="spy" data-position="bottom" data-tooltip="I am a tooltip" src={isAuthenticated ? Spy : SpyDark} onClick={() => { onClickHandler() }}/>
            <p>{sessionInfo}</p>
        </div>
    )}

export default Authenticate
