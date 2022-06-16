import {Routes, Route} from 'react-router-dom';
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { InsertModal } from "../pages/InsertModal";

function App() {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/recolecciones' element={<Registration />}/>
        <Route path='/crearRegistro' element={<InsertModal />}/>
      </Routes>
    </div>

  );
}

export default App;
