import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.ajax('https://query.yahooapis.com/v1/public/yql', {
      data: {
        q: 'select item from weather.forecast where woeid=' + params.city_id + ' and u="c"',
        format: 'json'
      }
    }).then(function(response) {
      return {
        title: response.query.results.channel.item.title,
        description: response.query.results.channel.item.description
      };
    });
  }
});
