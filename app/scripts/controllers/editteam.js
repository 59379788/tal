'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:EditteamCtrl
 * @description
 * # EditteamCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('EditteamCtrl', function ($routeParams, $scope, editteam, info) {
    
    var teamid =  $routeParams.teamid;
    
    info.get({code:teamid}, function(res){
        
        if(res.errcode === 0)
        {
            $scope.teammodel = res.data;
        }

    });
    
    
    $scope.save = function(){
        
        $scope.teammodel.code = teamid;
        
        editteam.save($scope.teammodel, function(res){

            if(res.errcode === 0)
            {
                alert("修改成功");
            }

        });
        
        
    };
    
    
    
    
    
  });
