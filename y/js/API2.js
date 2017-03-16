// google map functions not used

// var map = null;
// google.maps.event.addDomListener(window, 'load', init);
// google.maps.event.addDomListener(window, 'resize', function() {
//     map.setCenter(new google.maps.LatLng(38.840871, -105.042259));
// });
//
// })
// <-google map->
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


var clear = {
    clearLocal: "Clear Creek at Lawson, CO"
};

var deckers = {
    deckersLocal: "South Platte near Trumbull, CO"
};

var thompson = {
    thompsonLocal: "Big Thompson near Loveland"
};

var bear = {
    bearLocal: "Bear creek at Morrison, CO"
};

var location = {
  clearLocal: "Clear Creek at Lawson, CO", bearLocal: "Bear creek at Morrison, CO", thompsonLocal: "Big Thompson near Loveland", deckersLocal: "South Platte near Trumbull, CO",
};

// var waterData = "https://data.colorado.gov/resource/a97x-8zfv.json";

// <-main js->
$(document).ready(function() {
    init();
    console.log("ready");
    //select element
    $('.dropdown-menu li').click(function(event) {
        event.preventDefault();
        $(".graph").empty();
        $(".location").empty();
        var clickSelect = $(this).attr("data-id");
        console.log(clickSelect);
        flowInfo(clickSelect);
        graphInfo(clickSelect);
        setMap(clickSelect);
        switch (clickSelect) {
          case '06710605':
           $(".location").append("<h1>" + location.bear.bearLocal + "</h1>");
          break;

          case '06716500': $(".location").append("<h1>" + location.clear.clearLocal + "</h1>");
          break;

          case '06701900': $(".location").append("<h1>" + locaton.deckers.deckersLocal + "</h1>");
          break;

          case '06741510': $(".location").append("<h1>" + location.thompson.thompsonLocal + "</h1>");
            break;
          default:
          $(".location").text("no data");
        }
    });
    function setMap(clickSelect) {
      var mapPoints= [
        { id: "06716500", map: [39.765833, -105.625556]
        // clearcreek
      },
        { id: "06701900", map: [39.26, -105.221389]
          // deckers
        },
        { id: "06710605", map: [39.651944, -105.173056]
          // bear
        },
        { id: "06741510", map: [40.378611, -105.060556]
          // thompson
        }
      ];
      var longLat= [];
      for(i=0; i < mapPoints.length; i++){
        if(mapPoints[i].id === clickSelect){
          longLat = mapPoints[i].map;
        }
      }
      var mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(longLat[0], longLat[1]),
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
      var myLatLng = new google.maps.LatLng(longLat[0], longLat[1]);
      var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
      });
    }

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
