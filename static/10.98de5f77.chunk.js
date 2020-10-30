webpackJsonp([10],{787:function(e,n,a){var o=a(15),r=a(45),s=a(290).PageRenderer;s.__esModule&&(s=s.default);var i=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(801)}},componentWillMount:function(){},render:function(){return o.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},801:function(e,n){e.exports='### Dev Connect\n\nEl API de Dev Connect permite a las aplicaciones generar el Access Token requerido para acceder a los servicios de los Comercios administrados de manera r\xe1pida y simple para los comercios.\n\n#### API-Key\n\n```hint\nPara comunicarse con nuestro API es necesario poseer un API Key y un Access Token. Para obtenerlos se deben seguir los siguientes pasos\n\n1) Ingresar a\xa0[Consola](https://mobbex.com/console)\n2) Crear una cuenta si no posee\n3) Una vez creada la cuenta de usuario, crear una Entidad utilizando el CUIT de la empresa.\n4) Dirigirse desde el men\xfa superior (3 puntos) a \u201cDesarrollador\u201d\n5) Crear una nueva aplicaci\xf3n o utilizar una existente.\n```\n\n#### URL del Servicio\n\n```code\nhttps://mobbex.com/p/developer/connect\n```\n\n#### Cabeceras (Headers)\n- ___x-api-key___: Clave API de su aplicaci\xf3n\n\n### Servicios\n\n#### Creaci\xf3n de Solicitud\n- ___Tipo___ POST\n- ___Url___ /\n\n__Par\xe1metros__\n- ```return_url```: URL a la cual Mobbex deber\xe1 redireccionar al usuario al finalizar el proceso.\n- \n__Respuesta__\n\n```code\nlang: JSON\n---\n{\n    "result": true,\n    "data": {\n        "id": "oZWpdzX7y",\n        "url": "https://mobbex.com/p/developer/connect/oZWpdzX7y"\n    }\n}\n```\n\n*Importante* Redireccionar al usuario a la URL devuelta en data para la conexi\xf3n. Si el resultado es positivo el usuario ser\xe1 redireccionado a la url declarada en "return_url" agregando el parametro "connectStatus" en "done". Si el resultado es negativo ser\xe1 reenviado a la misma url con el status "cancelled". Si el status es Done se debe llamar a la siguiente URL para solicitar las credenciales.\n\n\n#### Obtenci\xf3n de Credenciales\n- ___Tipo___ GET\n- ___Url___ /{Connect ID}/credentials\n\n__Par\xe1metros__\n- ```Connect ID```: ID Retornado en la solicitud\n\n__Respuesta__\n\n```code\nlang: JSON\n---\n{\n    "result": true,\n    "data": {\n        "connectId": "oZWpdzX7y",\n        "access_token": "XXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXX",\n        "entity": {\n            "name": "Comercio de Prueba",\n            "logo": {\n                "filename": "colfacor.png",\n                "url": "https://s3.amazonaws.com/mobbex/files/images/comercio_de_prueba.png",\n                "mimetype": "image/png",\n                "extension": "png",\n                "size": 4472,\n                "width": 250,\n                "height": 250,\n                "sizes": [\n                    "medium",\n                    "small",\n                    "square"\n                ],\n                "versions": [\n                    "https://s3.amazonaws.com/mobbex/files/images/comercio_de_prueba-medium.png",\n                    "https://s3.amazonaws.com/mobbex/files/images/comercio_de_prueba-small.png",\n                    "https://s3.amazonaws.com/mobbex/files/images/comercio_de_prueba-square.png"\n                ],\n                "created": "2017-12-01T10:20:17.000Z"\n            },\n            "tax_id": "27121231230"\n        }\n    }\n}\n```\n'}});
//# sourceMappingURL=10.98de5f77.chunk.js.map