// ==UserScript==
// @name          Flickr Activity Context Switcher
// @namespace     http://github.com/jufemaiz/jmc_flickr_gm_flickr-activity-context
// @description   Removes the activity stream context from activity pages (returns browsing of images to user only context)
// @include       http://*flickr.com/
// @include		  http://*flickr.com/photos/friends/
//
// ==/UserScript==
//

var main = document.getElementById('Main');
var elements = main.getElementsByTagName('a');

for(var i = 0; i < elements.length; i++) {
    var el = elements[i];
    if(el.href.indexOf("/in/contacts/") != -1) {
		el.href = el.href.replace("/in/contacts/","");
	}
	
}
