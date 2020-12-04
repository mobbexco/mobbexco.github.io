webpackJsonp([0],{595:function(n,e,a){var o=a(6),t=a(32),s=a(209).PageRenderer;s.__esModule&&(s=s.default);var r=t({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(608)}},componentWillMount:function(){},render:function(){return o.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,n.exports=r},608:function(n,e){n.exports='\n___Qu\xe9 es un Webbook___  \nUn webhook es un mecanismo mediante el cual Mobbex ser\xe1 capaz de notificar mediante HTTP POST a su servidor cuando una transacci\xf3n sea realizada o cambie de estado, as\xed usted podr\xe1 tomar las acciones necesarias en su sistema al efecto de reflejar el nuevo estado de una operaci\xf3n.\n\n***Tipos de WebHooks***\n\n___De Aplicaci\xf3n___  \nCuando crea una aplicaci\xf3n, Mobbex le permite definir un webhook al cual se enviar\xe1n todos los estados de las transacciones.\n\n___WebCheckout___  \nCuando crea un checkout mediante el API de Mobbex usted puede definir una url capaz de recibir una llamada HTTP POST mediante la cual se le va a notificar los cambios en el estado de la transacci\xf3n espec\xedfica.\n\n___Ejemplo de Contenido enviado en un WebHook___\n\nHeaders:\n```Content-Type```: ```application/json```\n\nContenido:\n\n```code\nlang: \'json\'\nraw: false\n---\n{\n    "url": "https://myapp.com/webhooks",\n    "method": "POST",\n    "form": {\n        "type": "payment",\n        "data": {\n            "result": true,\n            "view": {\n                "type": "card",\n                "options": {\n                    "data": [\n                        {\n                            "label": "Orden Nro.",\n                            "value": "rkWpX3YU6x"\n                        },\n                        {\n                            "label": "Identificador de transacci\xf3n",\n                            "value": "73198584"\n                        }\n                    ]\n                }\n            },\n            "payment": {\n                "id": "rkWpX3YU6x",\n                "operation": {\n                    "type": "payment"\n                },\n                "status": {\n                    "code": "200",\n                    "text": "Paid",\n                    "message": "APROBADA - Autorizada"\n                },\n                "total": 1907.5,\n                "currency": {\n                    "code": "ARS",\n                    "text": "Peso Argentino"\n                },\n                "currency_data": {\n                    "value": "ARS",\n                    "label": "Peso Argentino",\n                    "symbol": "$",\n                    "hidden": false\n                },\n                "source": {\n                    "name": "Visa",\n                    "type": "card",\n                    "number": "454642xxxxxx7787",\n                    "installment": {\n                        "description": "3 Cuotas",\n                        "amount": 635.83,\n                        "count": 3\n                    }\n                },\n                "user": {\n                    "name": "Juan Perez",\n                    "email": "juanperez@mobbex.com"\n                },\n                "reference": "HyjdiK8Tx"\n            }\n        }\n    }\n}\n```  \n\n-------\n    \n***M\xe1s Detalles***\n[Estados y Tipos de Transacci\xf3n](/es/statuses)\n'}});
//# sourceMappingURL=0.6c852df8.chunk.js.map