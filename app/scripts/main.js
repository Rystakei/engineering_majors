function addChart() {

 var labels = ['Black Engineers','Black All Fields','Asian Engineering','Asian All Fields'];

//engineering, then all fields
 var black = {engineering: 3218, computerScience: 4847, allFields: 172868},
 	 asian = {engineering: 9243, computerScience: 3964, allFields: 118261},
 	 white = {engineering: 52352, computerScience: 27067, allFields: 1132689},
 	 hispanic = {engineering: 7173, computerScience: 4210, allFields: 176699};

var blackRatio = getRatio(black.engineering,black.allFields),
	asianRatio = getRatio(asian.engineering, asian.allFields),
	whiteRatio = getRatio(white.engineering, white.allFields),
	hispanicRatio = getRatio(hispanic.engineering, hispanic.allFields);

 var series = [blackRatio,asianRatio,whiteRatio,hispanicRatio];

 var blackCSRatio = getRatio(black.computerScience,black.allFields),
 	asianCSRatio = getRatio(asian.computerScience, asian.allFields),
 	whiteCSRatio = getRatio(white.computerScience, white.allFields),
 	hispanicCSRatio = getRatio(hispanic.computerScience, hispanic.allFields);



$('.ratios').append('<p> Black Percentage: '+blackRatio+'%</p>');
$('.ratios').append('<p> Asian Percentage: '+asianRatio+'%</p>');
$('.ratios').append('<p> White Percentage: '+whiteRatio+'%</p>');
$('.ratios').append('<p> Hispanic Percentage: '+hispanicRatio+'%</p>');


$('.ratios-cs').append('<p> Black Percentage: '+blackCSRatio+'%</p>');
$('.ratios-cs').append('<p> Asian Percentage: '+asianCSRatio+'%</p>');
$('.ratios-cs').append('<p> White Percentage: '+whiteCSRatio+'%</p>');
$('.ratios-cs').append('<p> Hispanic Percentage: '+hispanicCSRatio+'%</p>');


//Female Data

var femaleDegrees = {
  allFields: 753300,
  allEngineering: 12682,
  aerospace: 312,
  chemical: 2123,
  civil: 2224,
  electrical: 2717,
  industrial: 1341,
  materials: 285,
  mechanical: 1779,
  other: 1901
};


getSortedData("female", femaleDegrees);
function getSortedData(title, degrees) {
  $('.ratios-cs').append('<hr/>');    
  var convertedDegrees = [];

  _.each(degrees, function(amount, field) {
    var degree = {field: field, amount: amount};
    convertedDegrees.push(degree);
  });


  var sortedDegrees = _.sortBy(convertedDegrees, 'amount').reverse();
  console.log(sortedDegrees);

  var degreesByAmount = {};

  _.each(sortedDegrees, function(degree,index) {
    degreesByAmount[degree.field]=degree.amount;
  });

  console.log("fdby", degreesByAmount);

  var femaleRatio = getRatio(degrees.allEngineering, degrees.allFields);
  console.log(degrees.allEngineering, degrees.allFields);

  var selector = '.' + title;

  $(selector).append('<h2> ' + capitalize(title) + ' Percentage: '+femaleRatio+'%</h2>');

  $(selector).append('<h3>' + 'Engineering Subfields' + '</h3>');

  _.each(degreesByAmount, function(amount, field) {
    console.log("amount", amount, "field: ", field)
    if (field != 'allFields' && field != 'allEngineering') {
      console.log("amount and all", amount, degrees.allEngineering);
      var ratio = getRatio(amount, degrees.allEngineering);
      console.log(title, amount, field, ratio);
      $(selector).append('<p>' + capitalize(field) + ' Percentage: '+ratio+'%</p>');    
    }
  });
    $(selector).append('<hr/>');    
}


//Male Data
var maleDegrees = {
  allFields: 772175,
  allEngineering: 67282,
  aerospace: 3082,
  chemical: 5809,
  civil: 11747,
  electrical: 15457,
  industrial: 3413,
  materials: 954,
  mechanical: 18351,
  other: 8469
};

var maleRatio = getRatio(maleDegrees.allEngineering, maleDegrees.allFields);

$('.ratios-cs').append('<p> Male Percentage: '+maleRatio+'%</p>');

getSortedData("male", maleDegrees);



var blackFemale = {
  allFields: 113601,
  allEngineering: 862,
  aerospace: 15, 
  chemical: 139,
  civil: 146,
  electrical: 193,
  industrial: 78,
  materials: 14,
  mechanical: 116,
  other: 161
};

var asianFemale = {
  allFields: 64348,
  allEngineering: 2122,
  aerospace: 50,
  chemical: 374,
  civil: 346,
  electrical: 338,
  industrial: 116,
  materials: 57,
  mechanical: 278,
  other: 563
};

var whiteFemale = {
  allFields: 635766,
  allEngineering: 9096,
  aerospace: 293,
  chemical: 1384,
  civil: 2126,
  electrical: 730,
  industrial: 670,
  materials: 210,
  mechanical: 1610,
  other: 2073
};

var femaleDegrees = [{name: "black-female", info: blackFemale}, 
                     {name: "asian-female", info: asianFemale}, 
                     {name: "white-female", info: whiteFemale}];

_.each(femaleDegrees, function(k, v) {
  getSortedData(k.name, k.info);  
});

var blackMale = {
  allFields: 59267,
  allEngineering: 2365,
  aerospace: 58,
  chemical: 198,
  civil: 367,
  electrical: 803,
  industrial: 180,
  materials: 22,
  mechanical: 494,
  other: 234
};

var whiteMale = {
  allFields: 496923,
  allEngineering: 43256,
  aerospace: 2086,
  chemical: 3625,
  civil: 8137,
  electrical: 8384,
  industrial: 2022,
  materials: 636,
  mechanical: 12816,
  other: 5550
};

var asianMale = {
  allFields: 53913,
  allEngineering: 7121,
  aerospace: 298,
  chemical: 675,
  civil: 923,
  electrical: 2184,
  industrial: 279,
  materials: 103,
  mechanical: 1442,
  other: 1217
};

var maleDegrees = [{name: "black-male", info: blackMale}, 
                     {name: "asian-male", info: asianMale}, 
                     {name: "white-male", info: whiteMale}];

_.each(maleDegrees, function(k, v) {
  getSortedData(k.name, k.info);  
});




function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


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

//   negotiationChart = new Chartist.Bar('.ct-chart', {
//   labels: labels,
//   series: [
//     series
//   ]
// }, {
//   fullWidth: true,
//   // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
//   axisY: {
//     onlyInteger: true,
//     offset: 20
//   }
// });


  var femaleDegrees = {
    allFields: 753300,
    allEngineering: 12682,
    aerospace: 312,
    chemical: 2123,
    civil: 2224,
    electrical: 2717,
    industrial: 1341,
    materials: 285,
    mechanical: 1779,
    other: 1901
  };

  //Male Data
  var maleDegrees = {
    allFields: 772175,
    allEngineering: 67282,
    aerospace: 3082,
    chemical: 5809,
    civil: 11747,
    electrical: 15457,
    industrial: 3413,
    materials: 954,
    mechanical: 18351,
    other: 8469
  };


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


var femalePercentage = ((femaleDegrees.allEngineering / femaleDegrees.allFields) * 100).toFixed(2),
    malePercentage = ((maleDegrees.allEngineering / maleDegrees.allFields) * 100).toFixed(2),
    allByGenderSeries = [[femalePercentage], [malePercentage]];

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



//end getting

function getGroupPercentages(degreesByGroup, degreeType) {
  var percentages =[];

  _.each(degreesByGroup, function(k, v) {
    percentages.push(getPercentage(k, degreeType));
  });

  return percentages;
}


//intergroup-gender comparison
  var likelihoods =  _.zip(femalePercentages, malePercentages);

  var c = _.map(likelihoods, function(pair) {
    var first = pair[0],
        second = pair[1];
    var likelihood = (second / first).toFixed(2);
    console.log(first, second, likelihood);
    return likelihood;
  });

console.log("likelihoods: ", c);



//



  var blackFemalePercentage = getPercentage(blackFemaleDegrees),
      blackMalePercentage = getPercentage(blackMaleDegrees);

  blackByGenderSeries = [[blackFemalePercentage], [blackMalePercentage]]; 

  var femaleSeries = [femalePercentage, blackFemalePercentage, 
                      femalePercentage, blackFemalePercentage,
                      femalePercentage, blackFemalePercentage],
      maleSeries = [malePercentage, blackMalePercentage,
                    malePercentage, blackFemalePercentage,
                    malePercentage, blackFemalePercentage];


      console.log(blackByGenderSeries);

  var newLabels = ['All Graduates', 'Black', 'Native', 'Hispanic', 'White', 'Asian'],
      oldLabels = ['All Graduates', 'Black', 'White', 'Hispanic', 'Asian', 'Native American'];


  var allByGenderChart = new Chartist.Bar('.all-by-gender-chart', {
    labels: newLabels,
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
  });


  var CSByGenderChart = new Chartist.Bar('.cs-by-gender-chart', {
    labels: newLabels,
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
  });


}

addChart();






