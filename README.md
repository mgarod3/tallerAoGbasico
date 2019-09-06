# tallerAoGbasico
Código para el taller de iniciación al desarrollo de Actions para Google Assistant utilizando Actions on Google y Dialogflow.

Se trata de un ejemplo básico de respuesta dinámica desde el fulfillment de Dialogflow. El agente conversacional pregunta al usuario si quiere oir un chiste o un refrán. El usuario responde eligiendo una de las opciones. Entonces, el agente le da una respuesta u otra, dependiendo de la elección que haya realizado el usuario.

# Sobre el código
El código del webhook está en Javascript y utiliza la librería Actions on Google Node.js client library para responder a las peticiones HTTP que el Asistente le envía. Esta librería nos permite crear un objeto DialogflowApp, que encapsula la API de Dialogflow.

En este caso, se crea una variable app de tipo DialogflowApp. La función app.intent() recibe dos argumentos importantes:

- Un objeto DialogflowConversation (conv) que incluye el diálogo y diversas propiedades de la petición, como los contextos activos en Dialogflow, si el dispositivo desde el que interactúa el usuario tiene pantalla o no, etc.). 

- Un objeto Parameters que contiene una representación de los valores de los parámetros recogidos en el intent. 

A continuación, se utiliza el método close del objeto Conversación para responder al usuario con un string y poner fin a la conversación. 

IMPORTANTE: si has cambiado el nombre del intent o de los parámetros en Dialogflow, debes cambiarlos también en el código.

