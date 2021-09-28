import react from 'react';
import reactDOM from 'react-dom';
/*
function getButtonText(){
    return 'Click Me!';
}
*/
const App = ()=>{
  const buttonText = 'Click Me!'; 
  const style = {backgroundColor:'red',color:'white'};
    return(
        <div>
         <label htmlFor="name" className='label'>enter e-mail</label>
         <input id='name' type='text'/>
         <button style={style}>
             {buttonText}
         </button>
        </div>
    )
}
reactDOM.render(
    <App />,
    document.querySelector('#root')
)