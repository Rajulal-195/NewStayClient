import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/User/Login";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About"
import Signup from "./pages/User/Signup"
import ForgetPass from "./pages/User/ForgetPass"
import Errorpage from "./pages/ErrorPage/Errorpage";
import Userprofile from "./pages/User/Userprofile"
import Userupdate from "./pages/User/Userupdate"

function App() {

  
  return (<>
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<Errorpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/editprofile" element={<Userupdate />} />


      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
