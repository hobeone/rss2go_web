import { test } from 'qunit';
import moduleForAcceptance from 'rss2go/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list feeds');

test('visiting /feeds', function(assert) {
  visit('/feeds');

  andThen(function() {
    assert.equal(currentURL(), '/feeds');
  });
});
