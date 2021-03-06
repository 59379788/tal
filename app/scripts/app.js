'use strict';

/**
 * @ngdoc overview
 * @name lineApp
 * @description
 * # lineApp
 *
 * Main module of the application.
 */
angular
  .module('lineApp', [
    //'ngAnimate',
    //'ngAria',
    //'ngCookies',
    //'ngMessages',
    'ngResource',
    'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    'ui.bootstrap',
    'angularFileUpload'
  ])
  //.value("zidong"  , "http://localhost/api/as/lc/")
  //.value("shoudong", "http://localhost/api/ac/lc/")
//  .value("zidong",   "http://115.28.145.50:38985/api/as/lc/")
//  .value("shoudong", "http://115.28.145.50:38985/api/ac/lc/")
//  .value("zidong",   "http://sit.juyouhx.com/api/as/lc/")
//  .value("shoudong", "http://sit.juyouhx.com/api/ac/lc/")
    .value("zidong",   "/api/as/lc/")
    .value("shoudong", "/api/ac/lc/")
    .value("zidongb",  "/api/as/bc/")
    .value("shoudongb",  "/api/ac/bc/")
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve:{
            usermodel : function(users){
                return users.getinfo1;
            }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'xx',
        resolve:{
            ps : function(Products){
                return Products.list();
            },
            typearray : function(Products){
                return Products.dictionaries.type;
            },
            deleteline : function(Products){
                return Products.delline();
            },
            area : function(common){
                return common.getArea();
            },
            statearray : function(common){
                return common.state;
            },
            publishTypearray : function(common){
                return common.publishType;
            },
            startline : function(Products){
                return Products.start();
            },
            stopline : function(Products){
                return Products.stop();
            }
        }
      })
      .when('/editline/:lineid', {
        templateUrl: 'views/createline.html',
        controller: 'EditlineCtrl',
        controllerAs: 'asd',
        resolve:{
            ps : function(Products){
                return Products.line();
            },
            fun : function(Products){
                return Products.fun;
            },
            editline : function(Products){
                return Products.editline();
            },
            area : function(common){
                return common.getArea();
            },
            insurance : function(common){
                return common.getOpenInsurance;
            }
        }
      })
      .when('/lineinfo/:lineid', {
        templateUrl: 'views/createline.html',
        controller: 'LineinfoCtrl',
        resolve:{
            ps : function(Products){
                return Products.line();
            },
            fun : function(Products){
                return Products.fun;
            },
            area : function(common){
                return common.getArea();
            },
            insurance : function(common){
                return common.getOpenInsurance;
            }
        }
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl',
        resolve:{
            orders : function(order){
                return order.query();
            },
            orderstate : function(common){
                return common.orderstate;
            }
        }
      })
      .when('/settlement', {
        templateUrl: 'views/settlement.html',
        controller: 'SettlementCtrl',
        controllerAs: 'settlement'
      })
      .when('/createline', {
        templateUrl: 'views/createline.html',
        controller: 'CreatelineCtrl',
        controllerAs: 'create',
        resolve:{
            ps : function(Products){
                return Products.create();
            },
            line : function(Products, common){
                var n = new Products.model();
                angular.extend(n, Products.fun);
                return n;
            },
            area : function(common){
                return common.getArea();
            },
            insurance : function(common){
                return common.getOpenInsurance;
            }
        }
      })
      .when('/team/:lineid/:linename', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team',
        resolve:{
            teammodel : function(team){
                return team.model;
            },
            createteam : function(team){
                return team.createteam();
            },
            teaminfo : function(team, Products){
                //return team.info();
                return Products.line();
            }
        }
      })
      .when('/teamlist/:lineid/:linename', {
        templateUrl: 'views/teamlist.html',
        controller: 'TeamlistCtrl',
        controllerAs: 'teamlist',
        resolve:{
            list : function(team){
                return team.list();
            },
            shangjia : function(team){
                return team.shangjia();
            },
            xiajia : function(team){
                return team.xiajia();
            },
            del : function(team){
                return team.del();
            },
            finish : function(team){
                return team.finish();
            },
            stateArray : function(team){
                return team.stateArray;
            }
        }
      })
      .when('/editteam/:teamid', {
        templateUrl: 'views/editteam.html',
        controller: 'EditteamCtrl',
        controllerAs: 'editteamasd',
        resolve:{
            editteam : function(team){
                return team.edit();
            },
            info : function(team){
                return team.info();
            }
        }
      })    
      .when('/insurance', {
        templateUrl: 'views/insurance.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurancexx',
        resolve:{
            ins : function(common){
                return common.insmodel;
            },
            inslist : function(common){
                return common.queryInsurance;
            },
            createins : function(common){
                return common.createInsurance;
            },
            startins : function(common){
                return common.startInsurance;
            },
            stopins : function(common){
                return common.stopInsurance;
            }
        }
      })
      .when('/teaminfo/:teamid/:linename', {
        templateUrl: 'views/teaminfo.html',
        controller: 'TeaminfoCtrl',
        resolve:{
            grouporder : function(order){
                return order.grouporder();
            }
        }
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl',
        resolve:{
            statistics : function(order){
                return order.statistics();
            }
        }
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/orderinfo/:orderid', {
        templateUrl: 'views/orderinfo.html',
        controller: 'OrderinfoCtrl',
        controllerAs: 'orderinfo',
        resolve:{
            info : function(order){
                return order.info();
            }
        }
      })
      .when('/visa', {
        templateUrl: 'views/visa.html',
        controller: 'VisaCtrl',
        controllerAs: 'visa',
        resolve:{
            list : function(visa){
                return visa.list();
            },
            country : function(common){
                return common.getCountry();
            },
            visastate : function(common){
                return common.visastate;
            },
            start : function(visa){
                return visa.start();
            },
            stop : function(visa){
                return visa.stop();
            }
        }
      })
      .when('/createvisa', {
        templateUrl: 'views/createvisa.html',
        controller: 'CreatevisaCtrl',
        controllerAs: 'createvisa',
        resolve:{
            country : function(common){
                return common.getCountry();
            },
            create : function(visa){
                return visa.create();
            },
            model : function(visa){
                return visa.model();
            }
        }
      })
      .when('/editvisa/:visaid', {
        templateUrl: 'views/createvisa.html',
        controller: 'EditvisaCtrl',
        controllerAs: 'editvisa',
        resolve:{
            country : function(common){
                return common.getCountry();
            },
            edit : function(visa){
                return visa.edit();
            },
            detail : function(visa){
                return visa.detail();
            }
        }
      })
      .when('/visainfo/:visaid', {
        templateUrl: 'views/createvisa.html',
        controller: 'VisainfoCtrl',
        controllerAs: 'visainfo',
        resolve:{
            country : function(common){
                return common.getCountry();
            },
            detail : function(visa){
                return visa.detail();
            }
        }
      })
      .when('/visaorder', {
        templateUrl: 'views/visaorder.html',
        controller: 'VisaorderCtrl',
        controllerAs: 'visaorder',
        resolve:{
            country : function(common){
                return common.getCountry();
            },
            list : function(order){
                return order.volist();
            },
            updatestate : function(order){
                return order.voupdate();
            }
        }
      })

      .when('/visaorderinfo/:orderid', {
        templateUrl: 'views/visaorderdetail.html',
        controller: 'VisaorderdetailCtrl',
        controllerAs: 'visaorderdetail',
        resolve:{
            info : function(order){
                return order.vodetail();
            },
            update : function(order){
                return order.voupdate();
            }
        }
      })

      .when('/customorder', {
        templateUrl: 'views/customorder.html',
        controller: 'CustomorderCtrl',
        controllerAs: 'customorder',
        resolve:{
            list : function(order){
                return order.colist();
            }
        }
      })
      .when('/customorderdetail/:orderid', {
        templateUrl: 'views/customorderdetail.html',
        controller: 'CustomorderdetailCtrl',
        controllerAs: 'customorderdatilCtrl',
        resolve:{
            info : function(order){
                return order.codetail();
            },
            update : function(order){
                return order.coupdate();
            }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
//拦截器
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpInjector');
  });
