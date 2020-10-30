webpackJsonp([8],{784:function(e,n,a){var t=a(15),o=a(45),r=a(289).PageRenderer;r.__esModule&&(r=r.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(797)}},componentWillMount:function(){},render:function(){return t.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},797:function(e,n){e.exports='### Fidelizaci\xf3n\n\nEl API de fidelizaci\xf3n a diferencia de otros API requiere de 2 niveles de Claves de acceso al servicio debido a que el mismo es un servicio operado y auditado. A continuaci\xf3n se explica c\xf3mo generar un API Key para acceder a Mobbex y c\xf3mo obtener el Audit-Key para acceder al m\xf3dulo de fidelizaci\xf3n.\n\n#### API-Key\n\n```hint\nPara comunicarse con nuestro API es necesario poseer un API Key y un Access Token. Para obtenerlos se deben seguir los siguientes pasos\n\n1) Ingresar a\xa0https://mobbex.com/console\n2) Crear una cuenta si no posee\n3) Una vez creada la cuenta de usuario, crear una Entidad utilizando el CUIT de la empresa.\n4) Dirigirse desde el men\xfa superior (3 puntos) a \u201cDesarrollador\u201d\n5) Crear una nueva aplicaci\xf3n o utilizar una existente.\n```\n\n#### Audit-Key: clave de auditoria\n\nPara crear una clave de auditoria deber\xeda generar su empresa en Mobbex, para ello luego de haber creado la cuenta en el punto anterior, dirijase a "Crear Entidad", ingrese su CUIT y valide los datos. Una vez que la entidad se encuentre creada provea su CUIT a la entidad operadora para que asocie su cuenta y genere su Audit-Key. Una vez asociado a la entidad operadora podr\xe1 ver en su consola un nuevo item con su Clave de Auditoria.\n\n#### Aclaraciones Generales\n\n- La carga de puntos no depende ni depender\xe1 de los medios de pago provistos por Mobbex siendo responsabilidad del Sistema ( Entidad con Audit-Key ) la implementaci\xf3n de limitaciones en caso de que la implementaci\xf3n lo requiera.\n- Los n\xfameros de Tarjeta no poseen ning\xfan tipo de limitaciones de caracteres aunque se recomienda que posean un n\xfamero m\xednimo de 4 digitos por cuestiones de no colisi\xf3n aunque esto ser\xe1 gestionado exclusivamente por el Operador autorizado al uso del servicio.\n- La carga de puntos no es exclusiva de Entidades registradas en Mobbex pero si es exclusiva a la autorizaci\xf3n del Operador. Los operadores deber\xe1n autorizar previamente a los CUIT que podr\xe1n sumar puntos mediante su sistema de fidelizaci\xf3n utilizando la Consola de Mobbex.\n- Todas las entidades autorizadas por el Operador del sistema de Fidelizaci\xf3n podr\xe1n sumar puntos en las credenciales emitidas.\n\n#### URL del Servicio\n\n```code\nhttps://mobbex.com/p/loyalty\n```\n\n#### Cabeceras (Headers)\n- ___x-api-key___: Clave API de su aplicaci\xf3n\n- ___x-audit-key___: Clave de Auditoria\n\n### Servicios\n\n#### B\xfasqueda de Cuenta\n- ___Tipo___ POST\n- ___Url___ /accounts/search\n\n__Par\xe1metros__\n- ```reference```: Referencia a buscar, puede ser un DNI, una credencial, un email o un Nombre\n\n*Importante* Se debe limitar la cantidad de consultas generadas al server ya que de lo contrario el IP podr\xe1 ser bloqueado.\n\n#### Creaci\xf3n de Cuenta\n- ___Tipo___ POST\n- ___Url___ /accounts/create\n\n__Par\xe1metros__\n- ```identification```: DNI del usuario.\n- ```email``` Email del usuario.\n- ```credential``` (Opcional) N\xfamero o Identificador de Credencial del usuario. Si no se provee un n\xfamero de credencial el sistema crear\xe1 una credencial virtual y retornar\xe1 la misma.\n- ```tax_id``` CUIT de la Entidad que realiza la creaci\xf3n de la cuenta. Debe ser una Entidad v\xe1lida y asociada al Operador.\n- ```name``` (Opcional) Nombre del usuario  \n- ```phone``` (Opcional) Tel\xe9fono del usuario  \n\n*Importante* Los datos opcionales a pesar de ser justamente opcionales deber\xedan ser completados siempre que sea posible.\n\n#### Balance de Cuenta\n- ___Tipo___ POST\n- ___Url___ /accounts/balance\n\n__Par\xe1metros__\n- ```credential``` N\xfamero de credencial obtenido usando la b\xfasqueda.\n\n#### Carga de puntos\n- ___Tipo___ POST\n- ___Url___ /points/charge\n\n__Par\xe1metros__\n- ```credential``` N\xfamero de credencial obtenido usando la b\xfasqueda.\n- ```tax_id``` CUIT de la Entidad que realiza la carga de Puntos. Debe ser una Entidad v\xe1lida y asociada al Operador.\n- ```points``` Cantidad de puntos a cargar en la cuenta.\n- ```reference``` Referencia de la operaci\xf3n de carga.\n\n### Enpoints Restringidos\n\nLas siguientes rutas requieren de permisos especiales y no podr\xe1n ser consultadas utilizando el Audit-Key.\n\n#### Transacciones\n- ___Tipo___ POST\n- ___Url___ /transactions\n\n__Par\xe1metros__\n- ```credential``` N\xfamero de credencial obtenido usando la b\xfasqueda.\n\n#### Consumo de puntos\n- ___Tipo___ POST\n- ___Url___ /points/discharge\n\n__Par\xe1metros__\n- ```credential``` N\xfamero de credencial obtenido usando la b\xfasqueda.\n- ```points``` Cantidad de puntos a consumir en la cuenta.\n\n### WebHooks\n\nLos WebHooks son URLs seguras mediante las cual Mobbex notificar\xe1 los diferentes eventos relacionados con el m\xf3dulo de Fidelizaci\xf3n.\n\n```hint\nPara configurar un WebHook debe hacerlo desde la consola de Mobbex en la secci\xf3n Fidelizaci\xf3n, Configuraci\xf3n. El WebHook debe ser HTTPS (TLS 1.2 o Superior) y debe poder recibir datos mediante el m\xe9todo POST de HTTP.\n```\n\n#### Tipos\n- Nueva Credencial\n- Nueva Operaci\xf3n\n\n#### Nueva Credencial\n- ___Tipo___ POST\n- ___Formato___ JSON\n\n```code\nlang: js\n---\n{\n\t"type": "LOYALTY_CREDENTIAL",\n\t"data": {\n\t\t"uid": "r18WGnQmm",\n\t\t"credential": "a1b2c3d4",\n\t\t"name": "Juan Perez",\n\t\t"identification": "12123123",\n\t\t"email": "juanperez@email.com"\n\t}\n}\n```\n\n### Nueva Operaci\xf3n\n\n- ___Tipo___ POST\n- ___Formato___ JSON\n\n```code\nlang: js\n---\n{\n\t"type": "LOYALTY_TRANSACTION",\n\t"data": {\n\t\t"result": true,\n\t\t"view": {\n\t\t\t"type": "card"\n\t\t},\n\t\t"payment": {\n\t\t\t"id": "rkWpX3YU6x",\n\t\t\t"status": {\n\t\t\t\t"code": "200",\n\t\t\t\t"text": "Paid",\n\t\t\t\t"message": "APROBADA"\n\t\t\t},\n\t\t\t"total": 10,\n\t\t\t"currency": {\n\t\t\t\t"code": "ARS",\n\t\t\t\t"text": "Peso Argentino"\n\t\t\t},\n\t\t\t"currency_data": {\n\t\t\t\t"value": "PTS",\n\t\t\t\t"label": "Puntos",\n\t\t\t\t"symbol": "$P"\n\t\t\t},\n\t\t\t"source": {\n\t\t\t\t"name": "Puntos",\n\t\t\t\t"type": "card",\n\t\t\t\t"number": "XXXXXXXXXXXX"\n\t\t\t},\n\t\t\t"user": {\n\t\t\t\t"name": "Juan Perez",\n\t\t\t\t"email": "juanperez@mobbex.com"\n\t\t\t},\n\t\t\t"reference": "HyjdiK8Tx"\n\t\t}\n\t}\n}\n```'}});
//# sourceMappingURL=8.136d5db2.chunk.js.map