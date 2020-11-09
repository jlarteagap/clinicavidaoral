import React, { Fragment } from 'react'
import './css/Home.css'

export default function HomePage(){
    return(
        <Fragment>
            <div className="home home--principal">
                <div className="home--degree"></div>
                <div className="home--content">
                    <h2 className="home--title">Cirugía Oral & Maxilofacial</h2>
                
                <p className="home--descriptions">Realizamos tratamientos de alta complejidad <span className="home--resalt">quirúrgica bucomaxilofacial y de reconstrucción ósea. </span><br />Actualmente miembros activos de la "ALACIBU"</p>
                <button className="btn btn--primary">Conoce más de nosotros</button>
                </div>
            </div>

            <div className="home home--especialidades">
                <div className="home--degree"></div>
                <div className="home--content">
                    <h2 className="home--title">Especialidades</h2>
                
                <p className="home--descriptions">Ofrecemos calidad, precio y buen servicio en la atención de nuestros clientes en las siguientes especialidades: </p>
                <div className="home__especialidades">
                    <div className="home__especialidades__content">
                        <div className="home__especialidades--item home__especialidades--item--maxilofacial"></div>    
                    Maxilofacial</div>
                    <div className="home__especialidades__content">
                        <div className="home__especialidades--item home__especialidades--item--implantes"></div>    
                    Implantes</div>
                    <div className="home__especialidades__content">
                        <div className="home__especialidades--item home__especialidades--item--ortodoncia"></div>    
                    Ortodoncia</div>
                </div>
                </div>
            </div>
            <div className="home home--equipo">
                <div className="home--degree"></div>
                <div className="home--content">
                    <h2 className="home--title">Equipo Humano</h2>
                    <p className="home--descriptions">
                    Nos caracterizamos por tener un equipo de profesionales de primer nivel <br />
                    Siempre actualizados con los últimos procesos, técnicas modernas liderados por la Dra. Alina Peralta
                    </p>
                    <button className="btn btn--primary">Conoce nuestro equipo</button>
                </div>
            </div>
            <div className="home home--centros">
                <div className="home--degree"></div>
                <div className="home--content">
                    <h2 className="home--title">Nuestras sucursales</h2>
                    <p className="home--descriptions">
                    Nuestros ambientes están diseñados de una manera agradable, natural y moderna, de manera que nuestros pacientes se sientan cómodos y relajados
                    </p>
                    <button className="btn btn--primary">Santa Cruz</button>
                    <button className="btn btn--primary">Cochabamba</button>
                </div>
            </div>
        </Fragment>
    )
}