import React from 'react'
import Layout from '../Layout'

export default function Contact(){
    return(
        <Layout>
            <h2 className="title">Nuestros Centros</h2>
            <div className="card">
                <h3 className="title">Santa Cruz</h3>
                <p>Calle Claudio Peñaranda número 89 <br />
                    Entre Segundo y tercer anillo interno y entre avenida La Salle y Av Ovidio Barbery </p>
                <p>Teléfono: 33410026 </p>
                <p>WhatsApp: 65857096</p>
            </div>

            <div className="card">
                <h3 className="title">Cochabamba</h3>
                <p>Av Ballivián número 537 <br />
                En el Prado <br />
                Edificio El Prado piso 8 lado heladería Dumbo</p>
                <p>Teléfono: 4227495</p>
                <p>WhatsApp: 70345612</p>
            </div>
        </Layout>
    )
}