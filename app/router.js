import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-c-z-n-prilozhenie-карточка-гражданина-l');
  this.route('i-i-s-c-z-n-prilozhenie-карточка-гражданина-e',
  { path: 'i-i-s-c-z-n-prilozhenie-карточка-гражданина-e/:id' });
  this.route('i-i-s-c-z-n-prilozhenie-карточка-гражданина-e.new',
  { path: 'i-i-s-c-z-n-prilozhenie-карточка-гражданина-e/new' });
  this.route('i-i-s-c-z-n-prilozhenie-личность-l');
  this.route('i-i-s-c-z-n-prilozhenie-личность-e',
  { path: 'i-i-s-c-z-n-prilozhenie-личность-e/:id' });
  this.route('i-i-s-c-z-n-prilozhenie-личность-e.new',
  { path: 'i-i-s-c-z-n-prilozhenie-личность-e/new' });
});

export default Router;
