// tallphil.co.uk Javascript

// Run the homepage with AJAX loading
// Idea from https://github.com/joelhans/Jekyll-AJAX
$(function() {
    
    // Scroll to active nav link on load
    $('.post-list-panel').animate({
      scrollTop: $('.post-list-panel .active').position().top - 62
    }, 1000);
    
    // AJAX loading of posts
    $('.post-list-panel .post-link').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $('.post-list li a').removeClass('active');
            $(this).addClass('active');
            $('.post-panel .post').html('').animate({
                scrollTop: 0
            });
            History.pushState({}, "", $(this).attr('href'));
        }
    });
    History.Adapter.bind(window, 'statechange', function(){
        var State = History.getState();
        $.get(State.url, function(data){
            document.title = $(data).find("title").text();
            $('.post-panel .post').html($(data).find('.post').html())
            // _gaq.push(['_trackPageview', State.url]);
        });
    });

});