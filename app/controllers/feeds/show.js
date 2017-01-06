import FeedsController from '../feeds';



export default FeedsController.extend({
  actions: {
    changeValue(attr, val) {
      let feed = this.get('model');
      console.log(attr);
      console.log(val);
      feed.set(attr, val);
      feed.save().then(() => {}).catch((adapterError) => {
        console.log(feed.get('errors')); // instance of DS.Errors
        console.log(adapterError.message); // instance of DS.AdapterError
      });
    },
  }
});
