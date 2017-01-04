import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('empty', {
      into: 'application',
      outlet: 'sidebar'
    });
 }
});
