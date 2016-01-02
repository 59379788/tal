'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('StatisticsCtrl', function ($scope, statistics) {
    
    $scope.today = function() {
        $scope.dt1 = $scope.dt2 = new Date();
    };
    $scope.today();
    
    $scope.open1 = function($event) {
        $scope.status1.opened = true;
    }; 

    $scope.status1 = {
        opened: false
    };

    $scope.open2 = function($event) {
        $scope.status2.opened = true;
    }; 

    $scope.status2 = {
        opened: false
    };

    $scope.load = function(){
        
       var para = {
            _type : "nonpage",
            start_time : getDate($scope.dt1) + " 00:00:00",
            end_time : getDate($scope.dt2) + " 23:59:59"
        };
        
        statistics.get(para, function(res){

           console.log(res);

           if(res.errcode === 0)
           {
               var orderarray = res.data,
                   target = new Array(),
                   count = -1,
                   tmpdate = "",
                   allamount = 0,
                   allrefund = 0,
                   allsubsidy = 0;
               for(var i = 0, len = orderarray.length; i < len; i++)
               {

                   var temorder = orderarray[i];

                   var paystate = temorder.pay_state;
                   if(paystate == 1)
                   {
                      temorder.pay_state = "已支付";
                   }
                   else if(paystate == 0)
                   {
                      temorder.pay_state = "待支付";
                   }
                   else
                   {
                      //temorder.pay_state = "";
                   }

                   var grouptime = temorder.group_time;
                   if(tmpdate !== grouptime)
                   {
                        tmpdate = grouptime;
                        count++;
                        !target[count] && target.push(new Object());
                        target[count].arr = new Array();
                        target[count].allamount = 0;
                        target[count].allrefund = 0;
                        target[count].allsubsidy = 0;
                   }
                   target[count].arr.push(temorder);
                   target[count].allamount += temorder.amount;
                   target[count].allrefund += temorder.refund;
                   target[count].allsubsidy += temorder.subsidy;
                   
                   allamount += temorder.amount;
                   allrefund += temorder.refund;
                   allsubsidy += temorder.subsidy;
               }
               $scope.targets = target;
               $scope.allamount = allamount;
               $scope.allrefund = allrefund;
               $scope.allsubsidy = allsubsidy;
           }
        });
    };
    $scope.load();
    
    function getDate(d){
        return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
    }
    
});
