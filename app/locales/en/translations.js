import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCZN_PrilozhenieКарточкаГражданинаLForm from './forms/i-i-s-c-z-n-prilozhenie-карточка-гражданина-l';
import IISCZN_PrilozhenieЛичностьLForm from './forms/i-i-s-c-z-n-prilozhenie-личность-l';
import IISCZN_PrilozhenieКарточкаГражданинаEForm from './forms/i-i-s-c-z-n-prilozhenie-карточка-гражданина-e';
import IISCZN_PrilozhenieЛичностьEForm from './forms/i-i-s-c-z-n-prilozhenie-личность-e';
import IISCZN_PrilozhenieКарточкаГражданинаModel from './models/i-i-s-c-z-n-prilozhenie-карточка-гражданина';
import IISCZN_PrilozhenieЛичностьModel from './models/i-i-s-c-z-n-prilozhenie-личность';
import IISCZN_PrilozhenieОсобенностиЛичностиModel from './models/i-i-s-c-z-n-prilozhenie-особенности-личности';
import IISCZN_PrilozhenieПередачаКарточкиModel from './models/i-i-s-c-z-n-prilozhenie-передача-карточки';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-c-z-n-prilozhenie-карточка-гражданина': IISCZN_PrilozhenieКарточкаГражданинаModel,
    'i-i-s-c-z-n-prilozhenie-личность': IISCZN_PrilozhenieЛичностьModel,
    'i-i-s-c-z-n-prilozhenie-особенности-личности': IISCZN_PrilozhenieОсобенностиЛичностиModel,
    'i-i-s-c-z-n-prilozhenie-передача-карточки': IISCZN_PrilozhenieПередачаКарточкиModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'c-z-n-prilozhenie': {
          caption: 'c-z-n-prilozhenie',
          title: 'c-z-n-prilozhenie',
          'i-i-s-c-z-n-prilozhenie-личность-l': {
            caption: 'i-i-s-c-z-n-prilozhenie-личность-l',
            title: 'i-i-s-c-z-n-prilozhenie-личность-l'
          },
          'i-i-s-c-z-n-prilozhenie-карточка-гражданина-l': {
            caption: 'i-i-s-c-z-n-prilozhenie-карточка-гражданина-l',
            title: 'i-i-s-c-z-n-prilozhenie-карточка-гражданина-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-c-z-n-prilozhenie-карточка-гражданина-l': IISCZN_PrilozhenieКарточкаГражданинаLForm,
    'i-i-s-c-z-n-prilozhenie-личность-l': IISCZN_PrilozhenieЛичностьLForm,
    'i-i-s-c-z-n-prilozhenie-карточка-гражданина-e': IISCZN_PrilozhenieКарточкаГражданинаEForm,
    'i-i-s-c-z-n-prilozhenie-личность-e': IISCZN_PrilozhenieЛичностьEForm
  },

});

export default translations;
