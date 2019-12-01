
$(document).ready(function() {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels", {
            part: 'contentDetails',
            id: 'UCR-CQntPWCvRhjLhahudFaw',
            key: 'AIzaSyAwWIfxm7buvabj0HQnwaRDIL7GDTcrNTY'
        },
        function(data){
            $.each(data.items, function(i, item){
                console.log(item);
                pid = item.contentDetails.relatedPlaylists.uploads;
                getVids(pid);
            });
        }
    );
    
    function getVids(){
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems", {
                part: 'snippet',
                maxResults: 8,
                playlistId: pid,
                key: 'AIzaSyAwWIfxm7buvabj0HQnwaRDIL7GDTcrNTY'
            },
            function(data){
                var output;
                var title;
                $.each(data.items, function(i, item){
                    console.log(item);
                    videoTitle = item.snippet.title;
                    title = '<h3>'+videoTitle+'</h3>';
                    videoId = item.snippet.resourceId.videoId;
                    output = '<li><iframe width="600" height="400" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                    
                    $('#result').append(title+output);
                    
                });
            }
        );
    }
});

// get the object but couldn't play the vedio
// var vidResults = 8;

// $(document).ready(function(){
//   $.get(
//     "https://www.googleapis.com/youtube/v3/playlistItems",{
//       part: 'snippet',
//       maxResults: vidResults,
//       playlistId: 'UUR-CQntPWCvRhjLhahudFaw',
//       key: 'AIzaSyAwWIfxm7buvabj0HQnwaRDIL7GDTcrNTY'},
//     function(data){
//       var output;
//       var title;
//       $.each(data.items, function(i, item){
        
//           // console.log(item);
//           videTitle = item.snippet.title;
//           title = '<h4>'+videTitle+'</h4>';
//           vId = item.snippet.resourceId.videoId;
//           output = '<li><iframe width="600" height="400" src=\"//www.youtube.com/watch?v='+vId+'\"></iframe></li>';
//           console.log(output);
//         $('#results').append(title+output);
//       })
//     });  
// })



