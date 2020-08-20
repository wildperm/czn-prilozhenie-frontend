import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-z-n-prilozhenie-особенности-личности', 'Unit | Model | i-i-s-c-z-n-prilozhenie-особенности-личности', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-c-z-n-prilozhenie-карточка-гражданина',
    'model:i-i-s-c-z-n-prilozhenie-личность',
    'model:i-i-s-c-z-n-prilozhenie-особенности-личности',
    'model:i-i-s-c-z-n-prilozhenie-передача-карточки',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
