import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Realtors from './components/Realtors';
import Features from './components/Features';
import StoryPictures from './components/StoryPictures';
import StoryContent from './components/StoryContent';
import Homes from './components/Homes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


// equals to container
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
      
    </div>
  );
}

export default App;
