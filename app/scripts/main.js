function addChart() {
//2012 variables

var allMaleDegrees = {
  allFields: 772175,
  allEngineering: 67282,
  computerScience: 39230
};

var blackMaleDegrees = {
  allFields: 59267,
  allEngineering: 2356,
  computerScience: 3387
};


var whiteMaleDegrees = {
  allFields: 496923,
  allEngineering: 43256,
  computerScience: 23081
};

var hispanicMaleDegrees = {
  allFields: 69131,
  allEngineering: 5562,
  computerScience: 3419
};

var asianMaleDegrees = {
  allFields: 53913,
  allEngineering: 7121,
  computerScience: 3090
};

var nativeMaleDegrees = {
  allFields: 4182,
  allEngineering: 240,
  computerScience: 181
};


//female

var allFemaleDegrees = {
  allFields: 1038472,
  allEngineering: 15981,
  computerScience: 8730
}

var blackFemaleDegrees = {
  allFields: 1038472,
  allEngineering: 15981,
  computerScience: 1460
};

var whiteFemaleDegrees = {
  allFields: 635766,
  allEngineering: 9096,
  computerScience: 3986
};

var hispanicFemaleDegrees = {
  allFields: 107568,
  allEngineering: 1611,
  computerScience: 791
};

var asianFemaleDegrees = {
  allFields: 64348,
  allEngineering: 2122,
  computerScience: 874
};

var nativeFemaleDegrees = {
  allFields: 6561,
  allEngineering: 69,
  computerScience: 50
};

var femaleDegreesByGroup = [
  allFemaleDegrees, blackFemaleDegrees, whiteFemaleDegrees, hispanicFemaleDegrees,
  asianFemaleDegrees, nativeFemaleDegrees
];

var sortedFemaleDegreesByGroup = [
  allFemaleDegrees, blackFemaleDegrees, nativeFemaleDegrees, hispanicFemaleDegrees,
  whiteFemaleDegrees, asianFemaleDegrees
  ];

var maleDegreesByGroup = [
  allMaleDegrees, blackMaleDegrees, whiteMaleDegrees, hispanicMaleDegrees,
  asianMaleDegrees, nativeMaleDegrees 
];

var sortedMaleDegreesByGroup = [
  allMaleDegrees, blackMaleDegrees, nativeMaleDegrees, hispanicMaleDegrees,
  whiteMaleDegrees, asianMaleDegrees];


function getPercentage(degrees, degreeType) {
  return ((degrees[degreeType] / degrees.allFields) * 100).toFixed(2); 
}


//get groupPercentages
var femalePercentages = [];
_.each(sortedFemaleDegreesByGroup, function(k, v) {
  femalePercentages.push(getPercentage(k, 'allEngineering'));
});

var malePercentages = [];
_.each(sortedMaleDegreesByGroup, function(k, v) {
  malePercentages.push(getPercentage(k, 'allEngineering'));
});

var femaleCSPercentages = getGroupPercentages(sortedFemaleDegreesByGroup, 'computerScience');
var maleCSPercentages = getGroupPercentages(sortedMaleDegreesByGroup, 'computerScience');


function getGroupPercentages(degreesByGroup, degreeType) {
  var percentages =[];

  _.each(degreesByGroup, function(k, v) {
    percentages.push(getPercentage(k, degreeType));
  });

  return percentages;
}

var labels = ['All Graduates', 'Black', 'Native', 'Hispanic', 'White', 'Asian'];


  var responsiveOptions = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      seriesBarDistance: 10,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
    }],
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          if (value == 'All Graduates') {
            return 'All';
          }
          else if (value == 'Hispanic') {
            return 'Hisp.';
          }
          else {
            return value;            
          }
        }
      }
    }]
  ];


  var allByGenderChart = new Chartist.Bar('.all-by-gender-chart', {
    labels: labels,
    series: [
    malePercentages,
    femalePercentages
  ]
  }, 
  {
    seriesBarDistance: 10,
    axisX: {
      offset: 60
    },
    axisY: {
      offset: 80,
      labelInterpolationFnc: function(value) {
        return value + ' %'
      },
      scaleMinSpace: 15
    }
  },
  responsiveOptions);


  var CSByGenderChart = new Chartist.Bar('.cs-by-gender-chart', {
    labels: labels,
    series: [
    maleCSPercentages,
    femaleCSPercentages
  ]
  }, 
  {
    seriesBarDistance: 10,
    axisX: {
      offset: 60
    },
    axisY: {
      offset: 80,
      labelInterpolationFnc: function(value) {
        return value + ' %'
      },
      scaleMinSpace: 15
    }
  },
  responsiveOptions);


}

addChart();






