import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './routes/Home';
import Bodas from './routes/Bodas';
import Calendario from './routes/Calendario';
import Mailbox from './routes/Mailbox';
import NotFound from './routes/NotFound';
import Login from './components/Login';
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Main/> }>
                  <Route index element={ <Home/> }/>
                  <Route path="bodas" element={ <Bodas/> }/>
                  <Route path='calendario' element={ <Calendario/> }/>
                  <Route path='mailbox' element={ <Mailbox/> }/>
                  <Route path='*' element={ <NotFound/> }/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
