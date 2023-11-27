import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie.title'),
          children: [{
            link: 'i-i-s-prilozhenie-город-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-город-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-город-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-улица-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-улица-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-улица-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})