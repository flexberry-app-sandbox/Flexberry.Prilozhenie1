import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-город-l');
  this.route('i-i-s-prilozhenie-город-e',
  { path: 'i-i-s-prilozhenie-город-e/:id' });
  this.route('i-i-s-prilozhenie-город-e.new',
  { path: 'i-i-s-prilozhenie-город-e/new' });
  this.route('i-i-s-prilozhenie-улица-l');
  this.route('i-i-s-prilozhenie-улица-e',
  { path: 'i-i-s-prilozhenie-улица-e/:id' });
  this.route('i-i-s-prilozhenie-улица-e.new',
  { path: 'i-i-s-prilozhenie-улица-e/new' });
});

export default Router;
