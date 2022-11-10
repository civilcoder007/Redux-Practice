
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber,decNumber} from './Component/Actions/index'
function App() {
  const primary = useSelector((data)=> data.changeNumber);
  const dispatch = useDispatch();
  const someConditionTrue=()=>{
    console.log('hi');
    if(primary===0){
      return true
    }
  }
  return (
    <div className="App">
     <h1>Increment/Decrement counter</h1>
      <h4>Using React and Redux</h4>


      <div class="quantity">
        <a><button disabled={someConditionTrue()} class="bi bi-dash-square"  title='decrement' onClick={()=> dispatch(decNumber(10))}></button></a>
        <input name="quantity" type="text" class="quantity__input" value={primary}/>
        <a><i class="bi bi-plus-square-fill" title='increment' onClick={()=> dispatch(incNumber(10))}></i></a>
      </div>
    </div>
  );
}

export default App;
