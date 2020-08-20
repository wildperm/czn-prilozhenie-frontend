import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  возраст: DS.attr('number'),
  особенностиЛичности: DS.hasMany('i-i-s-c-z-n-prilozhenie-особенности-личности', { inverse: 'личность', async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-личность.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  возраст: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-личность.validations.возраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  особенностиЛичности: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-личность.validations.особенностиЛичности.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЛичностьE', 'i-i-s-c-z-n-prilozhenie-личность', {
    фИО: attr('ФИО', { index: 0 }),
    возраст: attr('Возраст', { index: 1 }),
    особенностиЛичности: hasMany('i-i-s-c-z-n-prilozhenie-особенности-личности', 'Особенности личности', {
      особенностиЛица: attr('Особенности лица', { index: 0 }),
      особенностиФигуры: attr('Особенности фигуры', { index: 1 }),
      особенностиХарактера: attr('Особенности характера', { index: 2 })
    })
  });

  modelClass.defineProjection('ЛичностьL', 'i-i-s-c-z-n-prilozhenie-личность', {
    фИО: attr('ФИО', { index: 0 }),
    возраст: attr('Возраст', { index: 1 })
  });
};
