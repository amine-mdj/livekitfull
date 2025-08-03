import React from 'react';
import './form.css'; // We'll create this CSS file
import { useNavigate } from 'react-router-dom';

const form = () => {
    const navigate = useNavigate();
    const handleclick3 = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Here you can add form validation or submission logic
        navigate("/thankyou"); // Navigate to the thank you page
    }
  return (
    <div className="bootcamp-container">
      <div className="form-section">
        <h2>Inscription Bootcamp</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required />
          </div>

          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" required />
          </div>

          <div className="form-group">
            <label htmlFor="age">Âge</label>
            <input type="number" id="age" name="age" min="10" max="100" required />
          </div>

          <div className="form-group">
            <label htmlFor="formation">Formation</label>
            <select id="formation" name="formation" required>
              <option value="">-- Choisir --</option>
              <option value="hotellerie">Hôtellerie</option>
              <option value="informatique">Informatique</option>
              <option value="batiment">Bâtiment</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="diplome">Diplôme</label>
            <input type="text" id="diplome" name="diplome" required />
          </div>

          <button type="submit" onClick={handleclick3}>Envoyer</button>
        </form>
      </div>

      <div className="image-section"></div>
    </div>
  );
};

export default form;
