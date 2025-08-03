import React from "react";
import "./home.css";
import grad from "./assets/graduate.jpg";
import building from "./assets/building.jpeg";
import it from "./assets/it.jpg";
import services from "./assets/services.jpeg";
import hotel from "./assets/hotel.jpg";
import arts from "./assets/art.jpg";

import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleclick = () => {

        navigate("/form");
 
    }

    const handleclick2 = () => {
        navigate("/login");
    }

  const fields = [
    { name: "Bâtiment", image: building },
    { name: "Informatique", image: it },
    { name: "Services", image: services },
    { name: "Hôtellerie", image: hotel },
    { name: "Arts", image: arts },
  ];

  return (
    <div className="poster-container">
        <div className="button">
            <button className="button1" onClick={handleclick}>s'inscrire</button>
            <button className="button2" onClick={handleclick2}>se connecter</button>
        </div>
      <div className="poster-header">
        <div className="header-left">
          <h2>Institut de Formation Professionnelle</h2>
          <img src={grad} alt="Graduate" className="grad-img" />
        </div>
        <div className="header-right">
          <h3>Bienvenue au niveau de l’IFP</h3>
          <div className="blue-box">
            <p>
              Institut de formation professionnelle agréé par l’état <br />
              à travers le ministère algérien de l’enseignement et de la formation
            </p>
          </div>
          <p className="mission-text">Notre mission... votre succès</p>
        </div>
      </div>

      <div className="poster-fields">
        {fields.map((field, index) => (
          <div className="field" key={index}>
            <img src={field.image} alt={field.name} />
            <p>{field.name}</p>
          </div>
        ))}
      </div>

      <div className="poster-footer">
        <span>📘 Parcours formation</span>
        <span>📸 Parcours formation</span>
        <span>✉️ parcours.contact@gmail.com</span>
      </div>
    </div>
  );
};

export default Home;
