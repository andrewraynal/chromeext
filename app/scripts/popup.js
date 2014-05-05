$(document).ready(function(){

var lovedTracks = "http://ws.audioscrobbler.com/2.0/?method=chart.getlovedtracks&api_key=8cf2f3b40bb866543b08372604b08865&format=json";
console.log(lovedTracks);

$.ajax({
  dataType: "json",
  url: lovedTracks,
  error: function(jxr, status, error) {
},
   success: function(data) {
  	// console.log(data.tracks);
  	var trackTempl = "<% _.each(track, function(track,index,list){ %> <li><%= track.artist.name %>, <%= track.name %></li> <% }); %>";
  	// console.log(track.name);
  	var templ = _.template(trackTempl, data.tracks);
	
	$(".musicInfo").append(templ);
		console.log(templ);
  }

});

});
