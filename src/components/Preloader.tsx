import React from 'react';
import preloader from '../assets/preloader.svg';


type PropsType = {}

const Preloader: React.FC<PropsType> = (props) => {
	return (
    <div className={"appPreloaderBlockSvg"}>
      <img src={preloader} alt="preloader"/>
    </div>
	);
}


export default Preloader;