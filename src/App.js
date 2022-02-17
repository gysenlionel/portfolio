import { ThemeProvider } from 'styled-components';
import { DarkTheme, lightTheme } from './components/Theme';
import GlobalStyle from './globalStyles';
import { Routes, Route } from "react-router-dom";

import Main from './components/Main'
import About from './components/About'

import MySkills from './components/MySkills'
import Work from './components/Work'
function App() {
  return (
    <>
      <GlobalStyle />


      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/myskills" element={<MySkills />} />
          <Route path="/work" element={<Work />} />
          test
        </Routes>
      </ThemeProvider>

    </>
  );
}

export default App;
