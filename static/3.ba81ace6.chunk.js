webpackJsonp([3],{791:function(n,a,i){var e=i(15),o=i(45),t=i(289).PageRenderer;t.__esModule&&(t=t.default);var c=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:i(804)}},componentWillMount:function(){},render:function(){return e.createElement(t,Object.assign({},this.props,{content:this.state.content}))}});c.__catalog_loader__=!0,n.exports=c},804:function(n,a){n.exports="\n## C\xf3digos de Estado\nEstados de una transacci\xf3n en Mobbex:\n\n```table\nrows:\n\t- Codigo: 0\n\t  Especificacion: Sin Estado\n\t- Codigo: 1\n\t  Especificacion: Pendiente\n\t- Codigo: 2\n\t  Especificacion: En Espera*\n\t- Codigo: 3\n\t  Especificacion: Autorizada*\n\t- Codigo: 200\n\t  Especificacion: Paga\n\t- Codigo: 300\n\t  Especificacion: Completada\n\t- Codigo: 301\n\t  Especificacion: Liquidada\n\t- Codigo: 400\n\t  Especificacion: Declinada\n\t- Codigo: 401\n\t  Especificacion: Expirada\n\t- Codigo: 600\n\t  Especificacion: Cancelaci\xf3n en proceso\n\t- Codigo: 601\n\t  Especificacion: Cancelada\n\t- Codigo: 500\n\t  Especificacion: Error\n```\n\n```hint\n___Aclaraciones___\n\n__En Espera__: suele utilizarse para operaciones de tipo Efectivo que est\xe1n a la espera de su pago.<br/>\n__Autorizada__: Se utiliza en pagos con Tarjeta en modo Autorizaci\xf3n. Este tipo de transacciones est\xe1 a la espera de ser capturada.\n```\n\n### Tipos de Transacci\xf3n\n\nTipos de una transacci\xf3n en Mobbex:\n\n```table\nrows:\n\t- Codigo: cash\n\t  Especificacion: Transacci\xf3n de tipo Efectivo\n\t- Codigo: card\n\t  Especificacion: Transacci\xf3n realizada mediante tarjeta de d\xe9bito o cr\xe9dito\n\t- Codigo: banktransfer\n\t  Especificacion: Transacci\xf3n realizada mediante Transferencia Bancaria\n```"}});
//# sourceMappingURL=3.ba81ace6.chunk.js.map