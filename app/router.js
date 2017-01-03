import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('feeds', function() {
    this.route('show', { path: '/:feed_id'});
  });
  this.route('login');
});

export default Router;
