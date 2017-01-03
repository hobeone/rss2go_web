import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('feed-listing', 'Integration | Component | feed listing', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed-listing}}`);

  assert.equal(this.$().text().trim(), 'subscribe');

  // Template block usage:
  this.render(hbs`
    {{#feed-listing}}
      subscribe
    {{/feed-listing}}
  `);

  assert.equal(this.$().text().trim(), 'subscribe');
});
