$(document).ready(function() {
    $(document).scroll(function() {
        var maxHeight = $(document).height();
        var currentScroll = $(window).scrollTop() + $(window).height();


        if (maxHeight <= currentScroll + 100) {
            $.ajax({
                url: 'file:///D:/ChaBaekSong/youtube/index.html',
                success: function(html, status) {
                    for (var i = 6; i < 100; i++);
                    html = '';
                    html += '<div>' + '글' + i + '</div>';
                    $('.articleView').html(html);
                    // Append next contents
                }
            })
        }
    })
});