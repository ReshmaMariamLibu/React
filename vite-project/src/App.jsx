import './App.css';
import { useState } from 'react';
// import DoctorTable from './pages/Dash/index';
import Home from './pages/Home';
import Dash from './pages/Dash';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  const initialData = [
    { id: 1, Doctorname: 'dr.John', Specialization: 'pediatrics'},
    { id: 2, Doctorname: 'dr.Ananya', Specialization: 'cardiology' },
    { id: 3, Doctorname: 'dr.Akhil', Specialization: 'neurology' },
];
const additionalData = [
    { id: 4, Doctorname: 'dr.Haritha', Specialization: 'physician' },
    { id: 5, Doctorname: 'dr.Agatha', Specialization: 'orthology'},
    { id: 6, Doctorname: 'dr.nimmi', Specialization: 'gasteroloqy.'},
];
const [data, setData] = useState(initialData);
const [index, setIndex] = useState(0);
const addData = () => {
    if (index < additionalData.length) {
        setData([...data, additionalData[index]]);
        setIndex(index + 1);
    } else {
        alert('No more data to add');
    }
};
    return (
        <>
         <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/data' element={<Dash  data={data} addData={addData}/>}/>

          </Routes>

         </Router>
        </>
    );
}
export default App;





