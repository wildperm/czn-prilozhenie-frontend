import { Serializer as КарточкаГражданинаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-z-n-prilozhenie-карточка-гражданина';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КарточкаГражданинаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
