// /**
//  * Funcion para enviar correo electrónico usando nodemailer-email-sender
//  * 
//  */
// const sendEmail = async () => {
//     try {
//         console.log('Enviando correo electrónico...', emailSender);
        
//         const name = document.getElementById('name_contact').value;
//         const email = document.getElementById('email_contact').value;
//         const message = document.getElementById('message_contact').value;
//         // Configuración del correo electrónico
//         const emailConfig = {
//             to: email,
//             subject: 'Correo de contacto desde el sitio web -> ' + name,
//             html: message
//         };

//         // Enviar el correo electrónico
//         const response = await emailSender.send(emailConfig);
//         console.log('Correo enviado exitosamente:', response);
//     } catch (error) {
//         console.error('Error al enviar el correo:', error);
//     }
// }