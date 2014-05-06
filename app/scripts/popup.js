$(document).ready(function(){

var lovedTracks = "http://ws.audioscrobbler.com/2.0/?method=chart.getlovedtracks&api_key=8cf2f3b40bb866543b08372604b08865&format=json";
console.log(lovedTracks);

$.ajax({
  dataType: "json",
  url: lovedTracks,
   success: function(data) {
    //  function getImgURL(image, size) {
    // var i = element;
    //   for (var i = 0; i < tracks.length; i++) {
    //     element.image[i];
    //     if (element.size == size) {
    //       return element["small"];
    //     }
    //   }
    // }
  	// console.log(data.tracks);
  // var image = "_.each(track, function(image, index, list){%> <li><%= track.image("small")%>
   var trackTempl = "<% _.each(track, function(track,index,list){ %> <li><%= track.artist.name %>, <%= track.name %>, <%= track.image %></li> <% }); %>";
  	var templ = _.template(trackTempl, data.tracks);
	$(".musicInfo").append(templ);	
  }

});

});
