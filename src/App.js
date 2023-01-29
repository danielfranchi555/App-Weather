import './App.css';
import Main from './Components/Main/Main';
import imgBack from './img/fondo-app-weather.jpg'
function App() {
  return (
    <div className="" style={{backgroundImage: `url(${imgBack})`,height:'100vh',width:'100%',backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'}}>
      <Main className='mt-5'></Main>
    </div>
  );
}

export default App;