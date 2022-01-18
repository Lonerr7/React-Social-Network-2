import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = ({ state }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar sidebar={state.sidebar} />
        <div className="app-wrapper__content">
          <Routes>
            <Route
              path="/profile/*"
              element={<Profile profilePage={state.profilePage} />}
            />
            <Route
              path="/messages/*"
              element={
                <Dialogs
                  dialogsPage={state.dialogsPage}
                />
              }
            />
            <Route path="/music/*" element={<Music />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
