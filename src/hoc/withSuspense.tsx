import React from 'react';
import s from './withSuspense.module.css';
import cn from "classnames";
import Preloader from '../components/Preloader';


let withSuspense = (Component: React.ComponentType): React.FC => (props) =>{
  let classLoading = cn({[s.selectedPage]: (1+1) === (2+0)}, s.pageNumber);
  let PreloaderSuspense = <div className={classLoading}><Preloader/></div>;

  return (
    <React.Suspense fallback={PreloaderSuspense}>
      <Component {...props} />      
    </React.Suspense>
  )
}


export default withSuspense;


