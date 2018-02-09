webpackJsonp([12],{591:function(n,t,e){var r=e(6),i=e(32),a=e(209).PageRenderer;a.__esModule&&(a=a.default);var o=i({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(604)}},componentWillMount:function(){},render:function(){return r.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,n.exports=o},604:function(n,t){n.exports='### Schema Types\n\n#### Table of Contents\n\n* [Query](#query)\n  * [Objects](#objects)\n    * [Account](#account)\n    * [Bank](#bank)\n    * [Category](#category)\n    * [Country](#country)\n    * [Coupon](#coupon)\n    * [CouponMutation](#couponmutation)\n    * [Entity](#entity)\n    * [Installment](#installment)\n    * [Mutation](#mutation)\n    * [Operator](#operator)\n    * [Service](#service)\n    * [Source](#source)\n    * [Status](#status)\n    * [Transaction](#transaction)\n    * [User](#user)\n    * [Whatever](#whatever)\n    * [operatorManagerMutation](#operatormanagermutation)\n    * [operatorManagerQueries](#operatormanagerqueries)\n    * [paymentCodeQueries](#paymentcodequeries)\n  * [Scalars](#scalars)\n    * [Boolean](#boolean)\n    * [Float](#float)\n    * [ID](#id)\n    * [Int](#int)\n    * [JSON](#json)\n    * [JSON](#json)\n    * [String](#string)\n\n#### Query the schema allows the following query:  \n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **entity** | [Entity](#entity) |\n| id | [ID](#id)! |\n| **entities** | [[Entity](#entity)] |\n| search | [String](#string) |\n| **account** | [Account](#account) |\n| id | [ID](#id)! |\n| **accounts** | [[Account](#account)] |\n| currency | [String](#string) |\n| kind | [String](#string) | Not Available yet |\n| **transactions** | [[Transaction](#transaction)] |\n| account | [ID](#id)! |\n| status | [Int](#int) |\n| **coupon** | [Coupon](#coupon) |\n| **statuses** | [[Status](#status)] |\n| **OperatorManager** | [operatorManagerQueries](#operatormanagerqueries) |\n| **PaymentCode** | [paymentCodeQueries](#paymentcodequeries) |\n\n## Objects \n\n### Account\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **uid** | [ID](#id)! |\n| **type** | [String](#string) |\n| **entity** | [Entity](#entity) |\n| **source** | [Source](#source) |\n| **user** | [User](#user) |\n| **currency** | [String](#string) |\n| **balance** | [Float](#float) |\n\n### Bank\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **account** | [String](#string) |\n| **tax_id** | [String](#string) |\n| **source** | [Source](#source) |\n\n### Category\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **_id** | [ID](#id)! |\n| **name** | [String](#string) |\n| **description** | [String](#string) |\n\n### Country\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **name** | [JSON](#json) |\n| **cca3** | [String](#string) |\n| **currency** | [String](#string) |\n\n### Coupon\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **uid** | [ID](#id)! |\n| **status** | [Status](#status) |\n| **status_message** | [String](#string) |\n| **status_history** | [[Status](#status)] |\n| **addressee** | [Account](#account) |\n| **operatoraccount** | [Account](#account) |\n| **sender** | [Account](#account) |\n| **receiver** | [Account](#account) |\n| **creator** | [User](#user) |\n| **source** | [Source](#source) |\n| **installment** | [Installment](#installment) |\n| **installment_amount** | [Float](#float) |\n| **total** | [Float](#float) |\n| **currency** | [String](#string) |\n| **description** | [String](#string) |\n| **reference** | [String](#string) |\n| **handler** | [String](#string) |\n| **barcode** | [String](#string) |\n| **user** | [JSON](#json) |\n| **mobbex_data** | [JSON](#json) |\n| **extra** | [JSON](#json) |\n| **updated** | [JSON](#json) |\n| **created** | [JSON](#json) |\n| **search** | [[Coupon](#coupon)] |\n| search | [String](#string) |\n\n### CouponMutation\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **setStatus** | [JSON](#json) |\n| id | [ID](#id)! |\n| status | [Int](#int) |\n| status_message | [String](#string) |\n| extra | [JSON](#json) |\n\n### Entity\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **_id** | [ID](#id)! |\n| **uid** | [String](#string) |\n| **name** | [String](#string) |\n| **email** | [String](#string) |\n| **tax_id** | [String](#string) |\n| **currency** | [String](#string) |\n| **category** | [Category](#category) |\n| **country** | [Country](#country) |\n| **logo** | [JSON](#json) |\n| **accounts** | [[Account](#account)] |\n| **bank** | [Bank](#bank) |\n\n### Installment\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **name** | [String](#string) |\n| **description** | [String](#string) |\n| **count** | [Int](#int) |\n| **source** | [Source](#source) |\n| **reference** | [String](#string) |\n\n### Mutation\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **operation** | [JSON](#json) |\n| intent | [String](#string) | Operation flow to use |\n| data | [JSON](#json) | Required data by the flow |\n| **setCouponStatus** | [JSON](#json) |\n| id | [ID](#id)! |\n| status | [Int](#int) |\n| status_message | [String](#string) |\n| extra | [JSON](#json) |\n| **coupon** | [CouponMutation](#couponmutation) |\n| **OperatorManager** | [operatorManagerMutation](#operatormanagermutation) |\n\n### Operator\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **_id** | [ID](#id)! |\n| **name** | [String](#string) |\n| **identification** | [String](#string) |\n| **email** | [String](#string) |\n| **entity** | [Entity](#entity) |\n| **logo** | [JSON](#json) |\n\n### Service\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **_id** | [ID](#id)! |\n| **name** | [String](#string) |\n| **description** | [String](#string) |\n| **identifier** | [String](#string) |\n| **operator** | [Operator](#operator) |\n| **percentage** | [Float](#float) |\n| **fixed_amount** | [Float](#float) |\n\n### Source\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **uid** | [String](#string) |\n| **name** | [String](#string) |\n| **description** | [String](#string) |\n| **currency** | [String](#string) |\n| **type** | [String](#string) |\n| **countries** | [[Country](#country)] |\n\n### Status\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **code** | [Int](#int) |\n| **name** | [String](#string) |\n| **status_message** | [String](#string) |\n| **created** | [JSON](#json) |\n\n### Transaction\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **uid** | [ID](#id)! |\n| **status** | [Int](#int) |\n| **sender** | [Account](#account) |\n| **receiver** | [Account](#account) |\n| **description** | [String](#string) |\n| **message** | [String](#string) |\n| **type** | [String](#string) |\n| **currency** | [String](#string) |\n| **total** | [Float](#float) |\n| **updated** | [JSON](#json) |\n| **created** | [JSON](#json) |\n\n### User\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **name** | [String](#string) |\n| **email** | [String](#string) |\n| **country** | [Country](#country) |\n\n### Whatever\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **id** | [Int](#int) |\n| **param** | [String](#string) |\n\n### operatorManagerMutation\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **addEntity** | [JSON](#json) |\n| entity | [String](#string) |\n| **service** | [JSON](#json) |\n| id | [ID](#id) |\n| name | [String](#string) |\n| percentage | [Float](#float) |\n| fixed_amount | [Float](#float) |\n\n### operatorManagerQueries\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **getAll** | [[Entity](#entity)] |\n| **services** | [[Service](#service)] |\n\n### paymentCodeQueries\n\n| Field | Argument | Type | Description |\n| :-- | --: | :-- | :-- |\n| **metodoWhatever** | [Whatever](#whatever) |\n| param | [String](#string) |\n\n## Scalars\n\n### Boolean\n\nThe `Boolean` scalar type represents `true` or `false`.\n\n### Float\n\nThe `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). \n\n### ID\n\nThe `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.\n\n### Int\n\nThe `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. \n\n### JSON\n\nThe `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).\n\n### JSON\n\nThe `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).\n\n### String\n\nThe `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\n\n'}});
//# sourceMappingURL=12.193bbfb9.chunk.js.map