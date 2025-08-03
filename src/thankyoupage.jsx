import React from 'react';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1>🎉 Merci pour votre inscription !</h1>
        <p>
          Nous avons bien reçu votre demande. <br />
          Notre équipe va l'examiner attentivement.
        </p>
        <p>
          Vous recevrez une réponse par email <strong>dès que possible</strong>.
        </p>
        <p className="signature">— L'équipe Bootcamp</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
