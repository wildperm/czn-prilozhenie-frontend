import { Serializer as ПередачаКарточкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-z-n-prilozhenie-передача-карточки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПередачаКарточкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
