import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import PageContainer from './components/page/PageContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <PageContainer/>
      <Footer/>
    </div>
  );
}

export default App;
