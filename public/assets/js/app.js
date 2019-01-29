$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        get: "user",
        userId: '3446439841',
        clientId: 'd3b8ab9bafb145008f03696018b20826',
        accessToken: '3446439841.d3b8ab9.46d39d23939142c58813cbcae3328701',
        // target: 'instafeed',
        // get: 'tagged',
        // tagName: 'photographyportfolio',
        links: true,
        limit: 12,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div></div></div>'
        // template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
 
});