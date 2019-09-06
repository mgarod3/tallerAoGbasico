# tallerAoGbasico
Código para el taller de iniciación al desarrollo de Actions para Google Assistant utilizando Actions on Google y Dialogflow.

Se trata de un ejemplo básico de respuesta dinámica desde el fulfillment de Dialogflow. El agente conversacional pregunta al usuario si quiere oir un chiste o un refrán. El usuario responde eligiendo una de las opciones. Entonces, el agente le da una respuesta u otra, dependiendo de la elección que haya realizado el usuario.

# Sobre el código
El código del webhook está en Javascript y utiliza la librería [Actions on Google Node.js client library](https://github.com/actions-on-google/actions-on-google-nodejs) para responder a las peticiones HTTP que el Asistente le envía. Esta librería nos permite crear un objeto [DialogflowApp](https://actions-on-google.github.io/actions-on-google-nodejs/interfaces/dialogflow.dialogflowapp.html), que encapsula la API de Dialogflow.

En este caso, se crea una variable app de tipo DialogflowApp. La función app.intent() recibe dos argumentos importantes:

- Un objeto [DialogflowConversation](https://actions-on-google.github.io/actions-on-google-nodejs/classes/dialogflow.dialogflowconversation.html) (conv) que incluye el diálogo y diversas propiedades de la petición, como los contextos activos en Dialogflow, si el dispositivo desde el que interactúa el usuario tiene pantalla o no, etc.). 

- Un objeto [Parameters](https://actions-on-google.github.io/actions-on-google-nodejs/classes/dialogflow.dialogflowconversation.html#parameters) que contiene una representación de los valores de los parámetros recogidos en el intent. 

A continuación, se utilizan los método [ask](https://actions-on-google.github.io/actions-on-google-nodejs/classes/dialogflow.dialogflowconversation.html#ask) y [close](https://actions-on-google.github.io/actions-on-google-nodejs/classes/conversation.conversation-1.html#close) del objeto Conversación:
- conv.ask: para responder al usuario con un string sin poner fin a la conversación.
- conv.close: para responder al usuario con un string y poner fin a la conversación. 


IMPORTANTE: si has cambiado el nombre del intent o de los parámetros en Dialogflow, debes cambiarlos también en el código.

