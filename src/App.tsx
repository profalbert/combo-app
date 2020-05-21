import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
// import TodosPage from './pages/TodosPage';
// import AboutPage from './pages/AboutPage';
// import TestPage from './pages/TestPage';
import withSuspense from './hoc/withSuspense';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/main-reducer';
import Container from '@material-ui/core/Container';
import ModalWindow from './components/ModalWindow';
import Preloader from './components/Preloader';
import { AppStateType } from './redux/redux-store';
import { DataForModalWindowType } from './types/types';


const TodosPage = React.lazy(() => import('./pages/TodosPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const TestBinance = React.lazy(() => import('./components/TestBinance')); 
const Chat = React.lazy(() => import('./components/Chat')); 
// const TestPage = React.lazy(() => import('./pages/TestPage')); 

const SuspendedTodosPage = withSuspense(TodosPage)
const SuspendedAboutPage = withSuspense(AboutPage)
const SuspendedTestBinance = withSuspense(TestBinance)
const SuspendedChat = withSuspense(Chat)


type MapStatePropsType = {
  initialized: boolean
  dataForModalWindow: DataForModalWindowType
}
type MapDispatchPropsType = {
  initializeApp: () => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const AppContainer: React.FC<PropsType> = ({initializeApp, dataForModalWindow, initialized}) => {
  let catchAllUnhandleErrors = (e: PromiseRejectionEvent) => {
    console.log("Error! Reason: " + e.reason.message);
  }

  useEffect(() => {
    initializeApp()
    window.addEventListener("unhandledrejection", catchAllUnhandleErrors)
    return () => window.removeEventListener("unhandledrejection", catchAllUnhandleErrors)
  }, [initializeApp])

  if(!initialized) {
    return (
      <div className={"appPreloaderBlock"}>
        <Preloader/>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" exact render={() => <SuspendedTodosPage />}/>
          <Route path="/about" render={() => <SuspendedAboutPage />}/>
          <Route path="/cryptoCurrencies" render={() => <SuspendedTestBinance />}/>
          <Route path="/chat" render={() => <SuspendedChat />}/>
          {/* <Route path="/test/:userId?" render={withSuspense( () => <TestPage />)}/> */}
        </Switch>
        <ModalWindow {...dataForModalWindow} />
      </Container>      
    </div>  
  );
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    initialized: state.mainApp.initialized,
    dataForModalWindow: state.mainApp.dataForModalWindow
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  initializeApp
}


const App = compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)
)(AppContainer)

export default App;