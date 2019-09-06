'use strict';

// Importa el módulo de la librería de Actions on Google
const {dialogflow} = require('actions-on-google');

// Importa el paquete firebase-functions para el deployment
const functions = require('firebase-functions');

// Crea una instancia del cliente Dialogflow con modo depuración activado
const app = dialogflow({debug: true});

// Gestiona la información del intent 'peticion' que recoge un parámetro llamado 'opcionElegida'
app.intent('peticion', (conv, {opcionElegida}) => {
    conv.ask(`Ahí va un ${opcionElegida}:`);
    switch(opcionElegida){
          case 'refran':
                conv.close('Nunca es tarde si la dicha es buena.');
          break;
          case 'chiste':
                conv.close('¿Qué hace una persona con un sobre de ketchup en la oreja? ¡Escuchar salsa! jaja');
          break;
          default:
               conv.close('Pues ahora mismo no se me ocurre ninguno, pero  pensaré en ello');
          break;
     }
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
