import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('гражданина', 'Гражданинаs');
inflector.irregular('личность', 'Личностьs');
inflector.irregular('личности', 'Личностиs');
inflector.irregular('карточки', 'Карточкиs');

export default {};
