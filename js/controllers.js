var controller = app.controller('mainPageController', function($scope, $templateCache, $http) {


 
 // var source = [ { value: "https://Subway.com",
 //                 label: "Subway"
 //               },
 //               { value: "https://potbelly.com",
 //                 label: "potbelly"
 //               },
 //               { value: "https://MashawiGrill.com",
 //                 label: "MashawiGrill"
 //               },
 //               { value: "http://www.mcdonalds.com/us/en/home.html",
 //                 label: "McDonalds"
 //               },
 //               { value: "https://Cravings.com",
 //                 label: "cravings.com"
 //               },
 //      ];

$http.get("menus/getRestaurants.php")
    .success(function (response) {$scope.restaurants = response;
        
        console.log($scope.restaurants);
        var url = "./menus/#/menu/";
        for( var i=0; i< $scope.restaurants.length; i++){

            $scope.restaurants[i].label =  $scope.restaurants[i].name; 
            $scope.restaurants[i].value = url.concat($scope.restaurants[i].name); 
            delete $scope.restaurants[i].name;
          
        }
        // console.log(obj);
        source = $scope.restaurants;

        $("input#autocomplete").autocomplete({
        source: source,
        select: function( event, ui ) { 
            window.location.href = ui.item.value;
        }

      });



  });

 
  
});