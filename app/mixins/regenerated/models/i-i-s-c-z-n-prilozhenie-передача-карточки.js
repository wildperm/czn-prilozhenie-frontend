import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПередачи: DS.attr('date'),
  сотрудник: DS.attr('string'),
  карточкаГражданина: DS.belongsTo('i-i-s-c-z-n-prilozhenie-карточка-гражданина', { inverse: 'передачаКарточки', async: false })
});

export let ValidationRules = {
  датаПередачи: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-передача-карточки.validations.датаПередачи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-передача-карточки.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  карточкаГражданина: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-передача-карточки.validations.карточкаГражданина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПередачаКарточкиE', 'i-i-s-c-z-n-prilozhenie-передача-карточки', {
    датаПередачи: attr('Дата передачи', { index: 0 }),
    сотрудник: attr('Сотрудник', { index: 1 })
  });
};
