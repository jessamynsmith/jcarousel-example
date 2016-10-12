(function($) {
    $(function() {
        var autoscrollShortInterval = 200;
        var autoscrollLongInterval = 2000;
        $('.jcarousel').jcarousel({
            // Need to wrap for autoscroll
            wrap: 'both',
            animation: 'slow'
        }).jcarouselAutoscroll({
            // Configure autoscroll
            interval: autoscrollShortInterval,
            target: '+=1',
            autostart: true
        }).on('jcarousel:fullyvisiblein', 'li', function(event, carousel) {
            // "this" refers to the item element
            // "carousel" is the jCarousel instance
            var slideImageTitle = $(this).find("img").attr("title");
            if (slideImageTitle == "Thistle 1") {
                // Only show the first slide for a brief period
                $('.jcarousel').jcarouselAutoscroll({
                    interval: autoscrollShortInterval
                });
            } else {
                // Show all other slides for a longer period of time
                $('.jcarousel').jcarouselAutoscroll({
                    interval: autoscrollLongInterval
                });
            }
        });

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
