import React from 'react'
import Layout from '../Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../../utils/fonts-awesome'
import './Contact.css'

import FormContact from './FormContact'

export default function Contact(){
    return(
        <Layout>
            <h2 className="title">Contacto</h2>
            <div className="contact card">
                <div className="contact__form">
                    <FormContact />
                </div>
                <div className="contact__sidebar">
                
                <h3 className="title">Nuestros Centros</h3>

                    <h3 className="title">Santa Cruz</h3>
                    <p> <FontAwesomeIcon className="card__icons" icon={'map-marker-alt'} /> Calle Claudio Peñaranda número 89 <br />
                        Entre Segundo y tercer anillo interno y entre avenida La Salle y Av Ovidio Barbery </p>
                    <p><FontAwesomeIcon className="card__icons" icon={'phone-alt'} /> 33410026 </p>
                    <p><FontAwesomeIcon className="card__icons" icon={faWhatsapp} /> 65857096</p>



                    <h3 className="title">Cochabamba</h3>
                    <p> <FontAwesomeIcon className="card__icons" icon={'map-marker-alt'} /> Av Ballivián número 537 <br />
                    En el Prado <br />
                    Edificio El Prado piso 8 lado heladería Dumbo</p>
                    <p><FontAwesomeIcon className="card__icons" icon={'phone-alt'} /> 4227495</p>
                    <p><FontAwesomeIcon className="card__icons" icon={faWhatsapp} /> 70345612</p>
 
            </div>
            </div>
        </Layout>
    )
}