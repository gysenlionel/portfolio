import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Theme';
import GlobalStyle from './globalStyles';
import { Routes, Route, useLocation } from "react-router-dom";


import Main from './components/Main'
import About from './components/About'
import Work from './components/Work'
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation()
  return (
    <>
      <GlobalStyle />


      <ThemeProvider theme={lightTheme}>

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </AnimatePresence>

      </ThemeProvider>

    </>
  );
}

export default App;
