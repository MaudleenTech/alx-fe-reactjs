import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <UserProfile name="Maudleen Imonirioma" age="34" bio="A passionate learner exploring React and front-end development." />
      <MainContent />
      <Counter />
      <Footer />
      
    </>
  );
}

export default App;
