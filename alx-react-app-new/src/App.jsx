
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

// import the new Counter component
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Counter/>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;
