
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './home';
import Form from './form';
import Login from './login';
import ThankYouPage from './thankyoupage';
import VideoForm from './videoform';
import RoomPage from './roompage';

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/room/:roomName" element={<RoomPage />} />
        <Route path="/videoform" element={<VideoForm />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
