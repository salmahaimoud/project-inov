import React from 'react';
import classes from '../Modules/AirbnbIcon.module.css';
import logo from '../../1.png'; // Importez votre logo ici

const AirbnbIcon = () => {
    return (
        <a href="/">
            <div className={classes['icon-div']}>
                {/* Utilisez un élément img avec votre propre logo */}
                <img src={logo} alt="Votre Logo" className={classes.icon} style={{ width: '110px', height: '110px' }} />
                {/* Vous pouvez ajouter un texte alternatif pour votre logo avec l'attribut alt */}
                <span className={classes.navbar_title} style={{ fontSize: '15px' }}>Discover serenity with Calminds – book now.</span>
            </div>
        </a>
    );
}

export default AirbnbIcon;
