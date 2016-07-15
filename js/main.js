// tallphil.co.uk Javascript

// Run the homepage with AJAX loading
// Idea from https://github.com/joelhans/Jekyll-AJAX
$(function() {
    
    $('.post-list-panel .post-link').click(function(e){
        e.preventDefault();
        $('.post-list li a').removeClass('active');
        $(this).addClass('active');
        $('.post-panel .post').html();
        History.pushState({}, "", $(this).attr('href'));
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