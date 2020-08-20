import { Serializer as ОсобенностиЛичностиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-z-n-prilozhenie-особенности-личности';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОсобенностиЛичностиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
