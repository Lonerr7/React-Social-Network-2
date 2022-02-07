import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialzeTC } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const News = React.lazy(() => import('./components/News/News'));

const App = (props) => {
  useEffect(() => {
    props.initialze();
  }, []);

  if (!props.initialized) return <Preloader />;

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper__content'>
          <React.Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/login/*' element={<Login />} />
              <Route path='/profile/*' element={<ProfileContainer />} />
              <Route path='/messages/*' element={<DialogsContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/settings/*' element={<Settings />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const dispatchToProps = {
  initialze: initialzeTC,
};

export default connect(mapStateToProps, dispatchToProps)(App);
