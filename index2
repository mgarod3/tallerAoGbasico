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
                conv.ask('Nunca es tarde si la dicha es buena. ¿Te gustaría escuchar otro chiste o refrán?');
          break;
          case 'chiste':
                conv.ask('¿Qué hace una persona con un sobre de ketchup en la oreja? ¡Escuchar salsa! jaja ¿Te gustaría escuchar otro chiste o refrán?');
          break;
          default:
               conv.close('Pues ahora mismo no se me ocurre ninguno, pero  pensaré en ello');
          break;
     }
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
