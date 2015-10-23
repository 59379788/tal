'use strict';

/**
 * @ngdoc directive
 * @name lineApp.directive:pages
 * @description
 * # pages
 */
angular.module('lineApp')
  .directive('pages', function () {
    return {
      replace: true,
      templateUrl: '/views/directive/pages.html',
      link: function(scope, ele, attrs) {
        scope.currentPage = 1;//当前页数
        scope.count = 0;//总条数
        scope.pageSize = attrs.size;//分页大小
        scope.totalPage = 1;//总页数
        scope.pages = [];//分页数组
        if (!scope[attrs.method]) {
            throw new Error('load method is undefined');
        }
        scope.next = function () {
            if (scope.currentPage < scope.totalPage) {
                 scope.currentPage++;
                 scope.getData();                 
            }             
        };             
        scope.prev = function () {                 
            if (scope.currentPage > 1) {
                scope.currentPage--;
                scope.getData();
            }
        };
        //调用
        scope.getData = function (page) {
            page && (scope.currentPage = page);
            scope[attrs.method](scope.currentPage, scope.pageSize, function (data) {
                scope.totalPage = Math.ceil(data.count / scope.pageSize);
                
//                for(var i = 0; i < scope.totalPage; i++)
//                {
//                    scope.pages[i] = i+1;
//                }
             
                if (scope.currentPage > 2 && scope.currentPage < scope.totalPage - 1) {                         
                     scope.pages = [
                         scope.currentPage - 2,
                         scope.currentPage - 1,
                         scope.currentPage,
                         scope.currentPage + 1,
                         scope.currentPage + 2
                     ];                     
                } else if (scope.currentPage == 2 && scope.totalPage > 2) {
                    scope.pages = [
                        scope.currentPage - 1,
                        scope.currentPage,
                        scope.currentPage + 1,
                    ];
                } else if (scope.currentPage == scope.totalPage - 1 && scope.totalPage > 2) {
                    scope.pages = [
                        scope.currentPage - 1,
                        scope.currentPage,
                        scope.currentPage + 1,
                    ];
                } else if (scope.currentPage == 1 && scope.totalPage == 2) {
                    scope.pages = [
                        scope.currentPage,
                        scope.currentPage + 1
                    ];
                } else if (scope.currentPage == 1 && scope.totalPage > 2) {
                    scope.pages = [
                        scope.currentPage,
                        scope.currentPage + 1,
                        scope.currentPage + 2
                    ];
                } else if (scope.currentPage == scope.totalPage && scope.totalPage == 2) {
                    scope.pages = [
                        scope.currentPage - 1,
                        scope.currentPage
                    ];
                } else if (scope.currentPage == scope.totalPage && scope.totalPage > 2) {
                    scope.pages = [
                        scope.currentPage - 2,
                        scope.currentPage - 1,
                        scope.currentPage
                    ];
                }
                scope.list = data.list;
            });
        };
        scope.getData();
      }
    };
  });
