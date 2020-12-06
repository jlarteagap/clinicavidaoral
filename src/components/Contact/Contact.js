import React from 'react'
import Layout from '../Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../../utils/fonts-awesome'

export default function Contact(){
    return(
        <Layout>
            <h2 className="title">Nuestros Centros</h2>
            <div className="card">
                <h3 className="title">Santa Cruz</h3>
                <p> <FontAwesomeIcon className="card__icons" icon={'map-marker-alt'} /> Calle Claudio Peñaranda número 89 <br />
                    Entre Segundo y tercer anillo interno y entre avenida La Salle y Av Ovidio Barbery </p>
                <p><FontAwesomeIcon className="card__icons" icon={'phone-alt'} /> 33410026 </p>
                <p><FontAwesomeIcon className="card__icons" icon={faWhatsapp} /> 65857096</p>
            </div>

            <div className="card">
                <h3 className="title">Cochabamba</h3>
                <p> <FontAwesomeIcon className="card__icons" icon={'map-marker-alt'} /> Av Ballivián número 537 <br />
                En el Prado <br />
                Edificio El Prado piso 8 lado heladería Dumbo</p>
                <p><FontAwesomeIcon className="card__icons" icon={'phone-alt'} /> 4227495</p>
                <p><FontAwesomeIcon className="card__icons" icon={faWhatsapp} /> 70345612</p>
            </div>
        </Layout>
    )
}