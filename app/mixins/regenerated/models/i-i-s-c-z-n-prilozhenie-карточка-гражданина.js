import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОбращения: DS.attr('date'),
  личность: DS.belongsTo('i-i-s-c-z-n-prilozhenie-личность', { inverse: null, async: false }),
  передачаКарточки: DS.hasMany('i-i-s-c-z-n-prilozhenie-передача-карточки', { inverse: 'карточкаГражданина', async: false })
});

export let ValidationRules = {
  датаОбращения: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-карточка-гражданина.validations.датаОбращения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  личность: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-карточка-гражданина.validations.личность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  передачаКарточки: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-карточка-гражданина.validations.передачаКарточки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КарточкаГражданинаE', 'i-i-s-c-z-n-prilozhenie-карточка-гражданина', {
    датаОбращения: attr('Дата обращения', { index: 0 }),
    личность: belongsTo('i-i-s-c-z-n-prilozhenie-личность', 'Личность', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: 1 }),
    передачаКарточки: hasMany('i-i-s-c-z-n-prilozhenie-передача-карточки', 'Передача карточки', {
      датаПередачи: attr('Дата передачи', { index: 0 }),
      сотрудник: attr('Сотрудник', { index: 1 })
    })
  });

  modelClass.defineProjection('КарточкаГражданинаL', 'i-i-s-c-z-n-prilozhenie-карточка-гражданина', {
    датаОбращения: attr('Дата обращения', { index: 0 }),
    личность: belongsTo('i-i-s-c-z-n-prilozhenie-личность', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
