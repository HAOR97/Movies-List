import {Routes,Route,Link,BrowserRouter} from 'react-router-dom'
import Home from './home';

function App() {
 return(
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )}

export default App;
