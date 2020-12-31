webpackJsonp([7],{785:function(e,n,o){var a=o(15),t=o(45),s=o(290).PageRenderer;s.__esModule&&(s=s.default);var d=t({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(799)}},componentWillMount:function(){},render:function(){return a.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});d.__catalog_loader__=!0,e.exports=d},799:function(e,n){e.exports='## Medios de Pago\n\n\n### Listado de M\xe9todos de Pago\n\n> Esta API es P\xfablica y no requiere del uso de API Key aunque debe generarse la conexi\xf3n con la cuenta utilizando el bot\xf3n de "Utilizar Widget / API" en la consola de Mobbex\n\nURL: https://mobbex.com/p/sources/list{codigo}?total={total}\n\n__Tipo:__  \nGET\n\n__Parametros:__\n\n_Obligatorios:_  \n- ```codigo```: C\xf3digo de acceso generado por la consola de Mobbex\n- ```total```: Monto de la operaci\xf3n.\n\n```hint\nEjemplos de Total:\n- 100\n- 100.10\n- 100.00\n```\n\n__Ejemplo:__\n\n```code\nhttps://mobbex.com/p/sources/list/e463a332-242f-4f49-9962-714acb41f028?total=12500\n```\n\n- ```C\xf3digo```: e463a332-242f-4f49-9962-714acb41f028\n- ```Total```: 12500\n\n__Respuesta__\n\n- ```result```: Resultado de la operaci\xf3n\n- ```data```: Array de datos de la operaci\xf3n.\n\n#### Data\n- ```source```: Posee los datos del medio de pago: nombre y referencia\n- ```view```: Posee el tipo de Medio de Pago\n- ```installments```: Nodo Opcional y s\xf3lo disponible en m\xe9todos de pago que poseen Cuotas. Array de Cuotas. Si el m\xe9todo posee cuotas encontrar\xe1 un nodo "list"\n\n#### Installments -> List\n- ```count```: Cantidad real de Cuotas, es el divisor del monto total\n- ```name```: Nombre del sistema de cuotas\n- ```description```: Descripci\xf3n opcional del sistema de cuotas.\n- ```totals```: Nodo donde se indican los recargos, descuentos y cuotas\n\n```code\nlang: json\n---\n{\n    "totals": {\n        "currency": {\n            "value": "ARS",\n            "label": "Peso Argentino",\n            "symbol": "$",\n            "hidden": false\n        },\n        "installment": {\n            "amount": 12500,\n            "count": 1\n        },\n        "total": 12500,\n        "financial": {\n            "percentage": 0,\n            "amount": 0\n        }\n    }\n}\n```\n\n\n### Im\xe1genes de M\xe9todos de Pago\n\nLos m\xe9todos de pago posee un nodo llamado "reference" que identifica los m\xe9todos de pago en Mobbex. Para obtener las im\xe1genes se debe utilizar este nodo.\n\nURL: https://res.mobbex.com/images/sources/{reference}.{format}\n\n__Tipo:__  \nGET\n\n__Parametros:__\n\n_Obligatorios:_  \n- ```reference```: Referencia del m\xe9todo de pago obtenida desde la API del Listado\n- ```format```: El formato de la imagen. S\xf3lo admite png o jpg\n\n__Ejemplo:__\n\n```code\nhttps://res.mobbex.com/images/sources/visa.frances.png\n```'}});
//# sourceMappingURL=7.0670ec1a.chunk.js.map