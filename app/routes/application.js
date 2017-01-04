// app/routes/application.js
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  renderTemplate: function() {
    this.render();
    this.render('nav', {
      into: 'application',
      outlet: 'navbar'
    });

    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar'
    });
 }
});
