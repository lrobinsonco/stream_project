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

var clearCreek = {
    clearCreek: "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=06716500&parameterCd=00060&siteType=ST&siteStatus=all",
    clearGraph: "http://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=06716500&parm_cd=00060&period=7",
    clearMap: (39.765833, -105.625556),
    clearLocal: "Clear Creek at Lawson, CO"
};


var deckers = {
    deckers: "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=06701900&parameterCd=00060&siteType=ST&siteStatus=all",
    deckersGraph: "https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=06701900&parm_cd=00060&period=7",
    deckersMap: (39.26, -105.221389),
    deckersLocal: "South Platte near Trumbull, CO"
};


var thompson = {
    thompson: "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=06741510&parameterCd=00060&siteType=ST&siteStatus=all",
    thompsonGraph: "https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=06741510&parm_cd=00060&period=7",
    thompsonMap: (40.378611, -105.060556),
    thompsonLocal: "Big Thompson near Loveland"
};


var bear = {
    bear: "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=06710605&parameterCd=00060&siteType=ST&siteStatus=all",
    bearGraph: "https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=06710605&parm_cd=00060&period=7",
    bearMap: (39.651944, -105.173056),
    bearLocal: "Bear creek at Morrison, CO"
};


// var waterData = "https://data.colorado.gov/resource/a97x-8zfv.json";

$(document).ready(function() {
    console.log("ready");
    //select element
    $('.dropdown-menu li').click(function(event) {
        event.preventDefault();
        $(".graph").empty();
        var clickSelect = $(this).attr("data-id");
        // console.log(clickSelect);
        flowInfo(clickSelect);
        graphInfo(clickSelect);
    });


    function flowInfo(clickSelect) {

        var urlFlow = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=" + clickSelect + "&parameterCd=00060&siteType=ST&siteStatus=all";

        $.get(urlFlow).then(function(data) {

            var flow = data.value.timeSeries[0].values[0].value[0].value;
            // console.log(flow);
            showFlow(flow);
            // console.log(data);
        });
    }
    function graphInfo(clickSelect) {
        var urlGraph = "https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=" + clickSelect + "&parm_cd=00060&period=7";
        var result ="<img id=\"graph\" src=\"" + urlGraph + "\" class=\"img-responsive\" width=\"776\" height=\"600\" alt=>";
        $(".graph").append(result);

    }
    function showFlow(flow) {
        $(".flow_rate").html('<span class="poop">' + flow + '</span>');
    }
});
// $('.dropdown-menu li').click(function(event) {
//
//   var clickSelect =  $(this).attr("data-id");
//     console.log(clickSelect);
//
//     switch (clickSelect) {
//       case 'bearCreek': $(".flow_title").text(bear.bearLocal);
//       $(".flow_rate").text(bear.bear.value.timeSeries[0].values[0].value[0].value);
//
//       break;
//
//       case 'clearCreek': $(".flow_title").text(clearCreek.clearLocal);
//       break;
//
//       case 'deckersR': $(".flow_title").text(deckers.deckersLocal);
//       break;
//
//       case 'bigT': $(".flow_title").text(thompson.thompsonLocal);
//         break;
//       default:
//
//     }
// append the information to the DOM
//     });
//     var bearURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=06710605&parameterCd=00060&siteType=ST&siteStatus=all";
//     $.get().then(function(data) {
//
//         var flow =  data.value.timeSeries[0].values[0].value[0].value;
//         console.log(flow);
//         showFlow(flow);
//         console.log(data);
//     });
//

// });
