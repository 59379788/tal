'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:VisainfoCtrl
 * @description
 * # VisainfoCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('VisainfoCtrl', function ($scope, $routeParams, country, FileUploader, detail) {    
    
    var visaid =  $routeParams.visaid;

    $scope.hide = true;
    
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
        }
    });
    
    detail.get({id : visaid}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
            alert("获取数据失败");
            return;
        }

        $scope.visa = res.data;
        
    });
    
  });
