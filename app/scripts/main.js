function addChart() {

 var labels = ['Black Engineers','Black All Fields','Asian Engineering','Asian All Fields'];

//engineering, then all fields
 var black = {engineering: 3218, allFields: 172868},
 	 asian = {engineering: 9243, allFields: 118261},
 	 white = {engineering: 52352, allFields: 1132689},
 	 hispanic = {engineering: 7173, allFields: 176699};

var blackRatio = getRatio(black.engineering,black.allFields),
	asianRatio = getRatio(asian.engineering, asian.allFields),
	whiteRatio = getRatio(white.engineering, white.allFields),
	hispanicRatio = getRatio(hispanic.engineering, hispanic.allFields);

 var series = [blackRatio,asianRatio,whiteRatio,hispanicRatio];


$('.ratios').append('<h1> Black Percentage: '+blackRatio+'%</h1>');
$('.ratios').append('<h1> Asian Percentaage: '+asianRatio+'%</h1>');
$('.ratios').append('<h1> White Percentaage: '+whiteRatio+'%</h1>');
$('.ratios').append('<h1> Hispanic Percentaage: '+hispanicRatio+'%</h1>');







function getRatio(subset,total) {
	return (subset / total * 100).toFixed(2);
}

  options = {
    showLine: true,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return value;
      }
    }
  };


  responsiveOptions = [
    ['screen and (min-width: 640px)', {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 10 === 0 ? value : null;
        },
        showGrid: false,
        showLabel: false
      }
    }],
    ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
          	return index % 30 === 0 ? value : null;
          },
          showGrid: false,
          showLabel: false
        }
      }
    ]
  ];

  negotiationChart = new Chartist.Bar('.ct-chart', {
  labels: labels,
  series: [
    series
  ]
}, {
  fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    onlyInteger: true,
    offset: 20
  }
});
}

addChart();