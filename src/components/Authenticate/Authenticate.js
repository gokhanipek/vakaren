import React from 'react'
import Spy from './../../assets/images/anonymous.png';
import SpyDark from './../../assets/images/anonymous-dark.png';
import './Authenticate.scss';

const Authenticate = ({onClickHandler}) => {

    return (
        <div className={`authorize-image-container ${true ? 'authenticated' : 'unauthenticated'}`}>
            <img className="authorize-image" alt="spy" data-position="bottom" data-tooltip="I am a tooltip" src={true ? Spy : SpyDark} onClick={() => { onClickHandler() }}/>
            <p>Auth</p>
        </div>
    )}

export default Authenticate
