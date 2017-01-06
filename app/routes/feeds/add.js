import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('feed');
  },

  actions: {
    saveFeed(newFeed) {
      newFeed.save().then(() => this.transitionTo('feeds'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
