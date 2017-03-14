var map = null;
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(38.840871, -105.042259));
});

function init() {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(38.840871, -105.042259),
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#0000FF"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#F8F8FF"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#F8F8FF"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#F8F8FF"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#F8F8FF"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#FFFFFF"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };
    var mapElement = document.getElementById('map');
    map = new google.maps.Map(mapElement, mapOptions);
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(38.840871, -105.042259);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}


// var clearCreek = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=06716500&parameterCd=00060&siteType=ST&siteStatus=all";
// var clearGraph = "http://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=06716500&parm_cd=00060&period=7";
// var clearMap = (39.765833, -105.625556);
//
// var deckers = 06701900 ;
// var deckersGraph = "https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=06701900&parm_cd=00060&period=7";
// var deckersMap = (39.26, -105.221389);
// var deckersLocal= "South Platte near Trumbull, CO";
//
// var cheesem = 06701900 ;
// var cheesemanGraph =

var waterData = "https://data.colorado.gov/resource/a97x-8zfv.json";

$.get(waterData).then(function(data) {
  for (var location in data) {
    if (data.hasOwnProperty(location)) {

    }
  }
    // var clearFlow = data.value.timeSeries[0].values[0].value[0].value;
    console.log(waterData);
    // showFlow(clearFlow);
    console.log(data);
});

// function showFlow(clearFlow) {
//     $(".flow_rate").html('<span class="poop">' + clearFlow + '</span>');
// }
