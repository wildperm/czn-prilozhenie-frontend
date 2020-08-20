import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  особенностиЛица: DS.attr('string'),
  особенностиФигуры: DS.attr('string'),
  особенностиХарактера: DS.attr('string'),
  личность: DS.belongsTo('i-i-s-c-z-n-prilozhenie-личность', { inverse: 'особенностиЛичности', async: false })
});

export let ValidationRules = {
  особенностиЛица: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-особенности-личности.validations.особенностиЛица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  особенностиФигуры: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-особенности-личности.validations.особенностиФигуры.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  особенностиХарактера: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-особенности-личности.validations.особенностиХарактера.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  личность: {
    descriptionKey: 'models.i-i-s-c-z-n-prilozhenie-особенности-личности.validations.личность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОсобенностиЛичностиE', 'i-i-s-c-z-n-prilozhenie-особенности-личности', {
    особенностиЛица: attr('Особенности лица', { index: 0 }),
    особенностиФигуры: attr('Особенности фигуры', { index: 1 }),
    особенностиХарактера: attr('Особенности характера', { index: 2 })
  });
};
