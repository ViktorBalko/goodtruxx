import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PageMain from './pages/PageMain/PageMain';
import PageOne from './pages/PageOne/PageOne'; 
import PageTwo from './pages/PageTwo/PageTwo';
import PageThree from './pages/PageThree/PageThree';
import PageFour from './pages/PageFour/PageFour';
import Footer from './components/Footer/Footer';

export const App = () => {
  return (
<Router basename={process.env.PUBLIC_URL}>
      
      <Header />
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path="/pagefour" element={<PageFour />} />
      </Routes>
      <Footer />  
    </Router>
  );
}
