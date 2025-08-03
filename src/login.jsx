import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    
   const  navigate = useNavigate();

    const handleclick5 = (event) => {
        event.preventDefault(); // Prevent the default form submission
        navigate("/videoform"); // Navigate to the form page
    }
  return (
    <div className="login-container">
      <div className="login-form-section">
        <h2>Connexion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" onClick={handleclick5}>Se connecter</button>

          <p className="login-footer">
            Vous n'avez pas de compte ? <a href="#">Créer un compte</a>
          </p>
        </form>
      </div>

      <div className="login-image-section"></div>
    </div>
  );
};

export default Login;
