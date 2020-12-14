import React from 'react'
import { Component } from 'react';
import emailjs from 'emailjs-com';
import ApiKey from './ApiKey'

const enviarCorreo =(e) => {
    e.preventDefault()

    emailjs.sendForm('service_m3pdx8t', ApiKey.TEMPLATE_ID, e.target, ApiKey.USER_ID).then(
        result => {
            alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
            alert( 'An error occured, Plese try again',error.text)
            }
    )
}


// function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_m3pdx8t', 'template_kymz5dh', e.target, 'user_0WvNAjKetmDQc67xcne1A')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

class FormContact extends Component {
    
    render(){
        return(
                <form onSubmit = {enviarCorreo}>
                    <label>Nombre y Apellidos</label>
                    <input type="text" name="from_name" />
                    <label>Correo Electrónico</label>
                    <input type="text" name="reply_to" />
                    <label>Telefono</label>
                    <input type="text" name="phone" />
                    <label>Asunto</label>
                    <textarea name="message"/>
                    <button className="btn btn__primary" type="submit">Enviar Mensaje</button>
                </form>
        )
    }
}

export default FormContact;