import React from 'react'
import "../Modules/Footer.module.css";
import styles from '../Modules/Apartament.module.css'

const Footer = () => {
    
    return <>
        <footer>
            <div>
                <span>© <span className={styles.number}>2024</span>  CalMinds, Inc.</span>
                <li>Terms</li>
                <li>Sitemap</li>
                <li>Privacy</li>
                <li>Your Privacy Choices <svg width="26" height="12" fill="none"><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect><path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path><path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" strokeLinecap="round"></path><path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" strokeLinecap="round"></path><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect></svg></li>
                <li>Destinations</li>
            </div>
            <div>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}>
                    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"/>
                </svg>
                <li>English (US)</li>
                <li>$ USD</li>
                <li>Support & resources</li>
                <i style={{paddingTop:"0.1rem"}} className="fa-solid fa-angle-up"></i>
            </div>
        </footer>
    </>
};

export default Footer;