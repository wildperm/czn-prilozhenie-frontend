import { Serializer as ЛичностьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-z-n-prilozhenie-личность';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЛичностьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
