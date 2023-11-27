import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenieГородLForm from './forms/i-i-s-prilozhenie-город-l';
import IISPrilozhenieУлицаLForm from './forms/i-i-s-prilozhenie-улица-l';
import IISPrilozhenieГородEForm from './forms/i-i-s-prilozhenie-город-e';
import IISPrilozhenieУлицаEForm from './forms/i-i-s-prilozhenie-улица-e';
import IISPrilozhenieГородModel from './models/i-i-s-prilozhenie-город';
import IISPrilozhenieУлицаModel from './models/i-i-s-prilozhenie-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-город': IISPrilozhenieГородModel,
    'i-i-s-prilozhenie-улица': IISPrilozhenieУлицаModel
  },

  'application-name': 'Prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
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
        'application-name': 'Prilozhenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie',
          title: 'Prilozhenie'
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
        prilozhenie: {
          caption: 'Prilozhenie',
          title: 'Prilozhenie',
          'i-i-s-prilozhenie-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-prilozhenie-улица-l': {
            caption: 'Улица',
            title: ''
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
    'i-i-s-prilozhenie-город-l': IISPrilozhenieГородLForm,
    'i-i-s-prilozhenie-улица-l': IISPrilozhenieУлицаLForm,
    'i-i-s-prilozhenie-город-e': IISPrilozhenieГородEForm,
    'i-i-s-prilozhenie-улица-e': IISPrilozhenieУлицаEForm
  },

});

export default translations;
