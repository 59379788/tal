'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:CreatevisaCtrl
 * @description
 * # CreatevisaCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('CreatevisaCtrl', function ($scope, $location, FileUploader, country, create, model) {
    
	$scope.visa = model;

	var uploader = $scope.uploader = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });

    // FILTERS

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.visa.img = response.savename;
    };


  	/* 地区下拉列表
     * ========================================= */
    country.get({pageSize : 200}, function(res){
        if(res.errcode === 0)
        {
            console.log(res.data.results);
            $scope.countryarray = res.data.results; 
            $scope.visa.country_id = $scope.countryarray[0].id;
        }
    });

    $scope.save = function(){
 
        //$scope.line.do();
        console.log($scope.visa);

        var dd = angular.toJson($scope.visa);

        //alert(dd);
        
        create.save(dd, function(res){
            
            console.log(res);
            
            if(res.errcode == 0)
            {
                alert("添加成功");
                $location.path("/editvisa/" + res.data);
            }
            
        });
    };



  });
