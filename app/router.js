import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('cities', function() {
    this.route('city', { path: ':city_id' });
  });
});

export default Router;
