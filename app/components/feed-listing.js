import Ember from 'ember';

export default Ember.Component.extend({
  isSubscribed: false,

  actions: {
    unsubscribe() {
      let feed = this.get('feed');
      feed.unsubscribe();
    }
  }
});
