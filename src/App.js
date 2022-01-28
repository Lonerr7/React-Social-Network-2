import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialzeTC } from './redux/appReducer';
import { useEffect } from 'react';
import Preloader from './components/common/Preloader/Preloader';

const App = (props) => {
  useEffect(() => {
    props.initialze();
  }, []);

  if (!props.initialized) return <Preloader />;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar sidebar={props.state.sidebar} />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/login/*" element={<Login />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
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
