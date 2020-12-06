import React from 'react'
import Layout from '../Layout'

export default function Contact(){
    return(
        <Layout>
            <h2 className="title">Nuestros Centros</h2>
            <div className="card">
                <h3 className="title">Santa Cruz</h3>
                <p>Calle Claudio Peñaranda número 89</p>
                Entre Segundo y tercer anillo interno y entre avenida La Salle y Av Ovidio Barbery 
                Teléfono 33410026
                65857096
            </div>

            <div className="card">
                <h3 className="title">Cochabamba</h3>
                <p>4 4227495</p>
                <p>Direccion: Av. Ovidio Barbery y Castulo ChavezEdif. La Salle Piso 1-1</p>
                <p>Horarios: 9:00 – 13:00, 16:00 – 20:00</p>
            </div>
        </Layout>
    )
}