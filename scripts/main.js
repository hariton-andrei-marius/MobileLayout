var $body			= $('body');

var $menuButton		= $('.menu-icon');
var $filtersButton	= $('.filters-icon');
var $searchButton	= $('.search-icon');

var MENU				= 'menuOpened';
var TEXTSEARCH	= 'textSearchOpened';
var FILTER			= 'filtersOpened';
var SEARCH			= 'searchOpened';
var OVERLAY			= "seeOverlay";

var _manageClass = function(classToggle) {
	$body.toggleClass(classToggle);
};

$menuButton.on('click', function() {
  _manageClass(MENU);
  _manageClass(OVERLAY);
});

$filtersButton.on('click', function() {
  _manageClass(FILTER);
});

$searchButton.on('click', function() {
  _manageClass(SEARCH);
});
