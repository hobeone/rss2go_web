export default function() {
  this.namespace = '/api';

  let feeds = [{
    type: 'feeds',
    id: 1,
    attributes: {
      name: "ArsTechnica",
      link: "https://arstechnica.com/rss",
      site: "https://arstechnica.com/"
    }
  }, {
    type: 'feeds',
    id: 2,
    attributes: {
      name: "MTGGoldfish",
      link: "https://mtggoldfish.com/rss",
      site: "https://mtggoldfish.com/"
    }
  }];

  this.get('/feeds', function(db, request) {
    if(request.queryParams.name !== undefined) {
      let filteredFeeds = feeds.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredFeeds };
    } else {
      return { data: feeds };
    }
  });

  this.get('/feeds/:id', function(db, request) {
    request.params.id = parseInt(request.params.id);
    return { data: feeds.find((feed) => request.params.id === feed.id) };
  });

}
