import InfoSection from './components/InfoSection';
import LoginBox from './components/LoginBox';
import InteractiveLight from './components/InteractiveLight';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <InteractiveLight />
      <InfoSection />
      <LoginBox />
    </div>
  );
}
