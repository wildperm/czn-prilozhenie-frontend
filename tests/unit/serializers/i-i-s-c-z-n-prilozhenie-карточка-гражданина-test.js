import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-z-n-prilozhenie-карточка-гражданина', 'Unit | Serializer | i-i-s-c-z-n-prilozhenie-карточка-гражданина', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-c-z-n-prilozhenie-карточка-гражданина',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
