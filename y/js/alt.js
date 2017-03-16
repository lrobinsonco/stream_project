var waterData = "https://data.colorado.gov/resource/a97x-8zfv.json";
console.log(waterData);

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

      var waterData = "https://data.colorado.gov/resource/a97x-8zfv.json";
      console.log(waterData);

      function flowInfo(clickSelect){
        $.get(waterData).then(function (data) {
          var flow = data.timeSeries[0].values[0].value[0].value;
          console.log(flow);
          console.log(data);
        });
      }


    });
