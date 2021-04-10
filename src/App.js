
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import About from './Pages/About/About.js';
import Home from './Pages/Home/Home.js';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo.js';
import UseStateChonXe from './Pages/Hook/UseStateChonXe/UseStateChonXe.js';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo.js';
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';

function App() {
  return (
    <UseStateChonXe />
    // <BrowserRouter>
    //   <div className="App">
    //     <Header />
    //     <Switch>
    //       <Route path="/home" exact component={Home} />
    //       <Route path="/login" exact render={(propsRoute) => {
    //         return (
    //           <div className="container">
    //             <h1>Login</h1>
    //             <Login {...propsRoute} />
    //           </div>
    //         );
    //       }} />
    //       <Route path="/register" exact component={Register} />
    //       <Route path="/about" exact component={About} />
    //       <Route path="/demousestate" exact component={UseStateDemo} />
    //       <Route path="/demouseeffect" exact component={UseEffectDemo} />

    //       <Route path="/" exact component={Home} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
