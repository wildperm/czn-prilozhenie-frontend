import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'C z n_ prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'C z n_ prilozhenie',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'C z n_ prilozhenie',
          title: 'C z n_ prilozhenie'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'c-z-n-prilozhenie': {
          caption: 'CZN_Prilozhenie',
          title: 'CZN_Prilozhenie',
          'i-i-s-c-z-n-prilozhenie-личность-l': {
            caption: 'Личность',
            title: ''
          },
          'i-i-s-c-z-n-prilozhenie-карточка-гражданина-l': {
            caption: 'Карточка гражданина',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-c-z-n-prilozhenie-карточка-гражданина-l': IISCZN_PrilozhenieКарточкаГражданинаLForm,
    'i-i-s-c-z-n-prilozhenie-личность-l': IISCZN_PrilozhenieЛичностьLForm,
    'i-i-s-c-z-n-prilozhenie-карточка-гражданина-e': IISCZN_PrilozhenieКарточкаГражданинаEForm,
    'i-i-s-c-z-n-prilozhenie-личность-e': IISCZN_PrilozhenieЛичностьEForm
  },

});

export default translations;
