import React,{useState} from "react";
import Tour from './components/Tour';
import data from "./data.js";
const App = () => {

 const [state, setstate] = useState(data);

function removetour(id)
{
   const newTour = state.filter(item => item.id !== id );
   setstate(newTour);
}
function ResetUI(){
    setstate(data);
}

if(state.length === 0)
{
  return ( 
    <div className="refresh"><h2 className="lastHeading">No Tours left</h2> 
    <button className="btn-re" onClick={ResetUI} >Refresh</button></div>
  );
}
  return (<div>   
        <Tour tours={state} removetour={removetour}/>
      </div>);
};

export default App;
