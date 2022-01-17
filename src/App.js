import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper__content">
        <Profile />
      </div>
    </div>
  );
}

export default App;
