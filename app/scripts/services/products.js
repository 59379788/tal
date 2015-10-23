'use strict';

/**
 * @ngdoc service
 * @name lineApp.products
 * @description
 * # products
 * Factory in the lineApp.
 * 用来操作线路相关的接口
 */
angular.module('lineApp')
  .factory('Products', function ($resource, zidong, shoudong, FileUploader) {
    
    //查询线路列表
    var listapi = zidong + "line/saPageList";
    //得到线路信息
    var lineapi = zidong + "line/info";
    //新建一条线路
    var createapi = shoudong + "lineService/add";
    //修改线路
    var editapi = zidong + "line/edit";
    //删除线路
    var delapi  = zidong + "line/del";

    //启用线路
    var startapi = zidong + "line/onshelf";
    //停用用线路
    var stopapi = zidong + "line/offshelf";
    
    var publish_type_array = ["非补贴","补贴游","公益游"];
    var state_array = ["未上线","使用","停用"];
    
    return {
        //模型
        model : function(){
            return {
                //ta : "1",           //旅行社编号
                //operator : "dlq",
                
            //----------- 基本信息[开始] ----------------------------------//
                area : "",
                pcode : "",   //供应商产品编号
                title : "",
                keyword : "",
                type : "0",             //线路类型--省内游
                publish_type : "0",     //--其他  发布类型
              //  publish_type_show : "",
                guarantee : "0",        //是否担保 --否
                stb_use : "0",          //是否同业可用--否
                days : "1",             //几天
                night : "0",            //几夜
                start_city : "沈阳",
                visa : "0",              //签证
                insurance : "0",         //保险
                img : "",
                
                insuranceprice : "0",     //保险金额
             //----------- 基本信息[结束] ----------------------------------//

	         //----------- 产品推荐[开始] ----------------------------------//   
                feature : "",
                eat_info : "",
                stay_info : "",
                travel_info : "",
                tour_info : "",
                buy_info : "",
                play_info : "",
             //----------- 产品推荐[结束] ----------------------------------//
                
             //----------- 发车信息[开始] ----------------------------------//
                
                contacts : "",
                depart : "",
                
             //----------- 发车信息[结束] ----------------------------------//
                
             //----------- 费用包含[开始] ----------------------------------//
                cost_traffic : "",
                cost_straffic : "",
                cost_stay : "",
                cost_dinner : "",
                cost_ticket : "",
                cost_guide : "",
                cost_child : "",
                cost_give : "",
                cost_other : "",
             //----------- 费用包含[结束] ----------------------------------//
                
             //----------- 费用不包含[开始] ----------------------------------//
                notinclude_straffic : "",
                notinclude_att : "",
                notinclude_srd : "",
                notinclude_ticket : "",
                notinclude_other : "",
                notinclude_supplement : "",
                notinclude_insurance : "",
             //----------- 费用不包含[结束] ----------------------------------//
                
             //----------- 特殊人群限制[开始] ----------------------------------//
                special_population_limit : "",
             //----------- 特殊人群限制[结束] ----------------------------------//
                
             //----------- 其他信息[开始] ----------------------------------//
                booking_information : "",
                note : "",
                reminder : "",
             //----------- 其他信息[结束] ----------------------------------// 
                
             //----------- 价格信息[开始] ----------------------------------//  
                platform_adult : 0,
                platform_child : 0,
                stb_child : 0,
                stb_adult : 0,
                subsidy_adult : 0,
                subsidy_child : 0,
                discount_child : 0,   //让利儿童价格
                discount_adult : 0,
                start_advance : "0",
                end_advance : "0",
             //----------- 价格信息[开始] ----------------------------------//    
                
                trip_info : ""
            };
        },
        dictionaries : {
            type : publish_type_array,
            state : state_array
        },
        list : function(){
            return $resource(listapi, {}, {});
        },
        line : function(){
            return $resource(lineapi, {}, {});
        },
        create : function(){
            return $resource(createapi, {}, {});
        },
        editline : function(){
            return $resource(editapi, {}, {});
        },
        delline : function(){
            return $resource(delapi, {}, {});
        },
        start : function(){
            return $resource(startapi, {}, {});
        },
        stop : function(){
            return $resource(stopapi, {}, {});
        },
        fun :{
            daysarray : [
                {"name" : "1天", value : 1},
                {"name" : "2天", value : 2},
                {"name" : "3天", value : 3},
                {"name" : "4天", value : 4},
                {"name" : "5天", value : 5},
                {"name" : "6天", value : 6},
                {"name" : "7天", value : 7},
                {"name" : "8天", value : 8},
                {"name" : "9天", value : 9},
                {"name" : "10天", value : 10},
                {"name" : "10天以上", value : 999}
            ],
            nightsarray : [
                {"name" : "0晚", value : 0},
                {"name" : "1晚", value : 1},
                {"name" : "2晚", value : 2},
                {"name" : "3晚", value : 3},
                {"name" : "4晚", value : 4},
                {"name" : "5晚", value : 5},
                {"name" : "6晚", value : 6},
                {"name" : "7晚", value : 7},
                {"name" : "8晚", value : 8},
                {"name" : "9晚", value : 9},
                {"name" : "10晚", value : 10},
                {"name" : "10晚以上", value : 999}
            ],
            departArray : [],       //--不存数据库
            insurancearray : [],       //--不存数据库
            triparray : [],       //
            type0array : [],
            type1array : [],
            type2array : [],
            //初始化信息
            init : function(){
                this.departArray = angular.fromJson(this.depart);

                if(this.trip_info != undefined && this.trip_info != "")
                {
                    console.log(this.trip_info);
                    this.triparray = angular.fromJson(this.trip_info);   
                    console.log(this.triparray);
                }
                for(var i = 0; i < this.triparray.length; i++)
                {
                    var trip = this.triparray[i];
                    trip.uploader = new FileUploader({
                        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=line&selfdir=trip'
                    });
                    trip.uploader.onSuccessItem = function(fileItem, response, status, headers) {
                        trip.img = response.savename;
                        console.log(response);
                    };
                    trip.uploader.filters.push({
                        name: 'imageFilter',
                        fn: function(item /*{File|FileLikeObject}*/, options) {
                            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                        }
                    });
                }
                if(this.triparray.length === 0)
                {
                    this.newtrip();
                }
            },
            //制作数据
            do : function(){
                this.depart = angular.toJson(this.departArray);
                console.log(this.triparray);
                for(var i = 0; i < this.triparray.length; i++)
                {
                    delete this.triparray[i].uploader;
                }
                console.log(this.triparray);
                this.trip_info = angular.toJson(this.triparray);
            },
            //新建一条发车信息
            newDepart : function(){
                var d = {
                    start : "",
                    time : "",
                    end : "",
                    mark : ""
                };

                this.departArray.push(d);
            },
            //删除一条发车信息
            delDepart : function(index){
                this.departArray.splice(index,1);
            },
            //更新天数
            newtrip : function(){
                var trip = {
                    resume : "",
                    describe : "",
                    dinner : "",
                    stay : "",
                    img : "",
                    uploader : new FileUploader({
                        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=line&selfdir=trip'
                    })
                };
                
                trip.uploader.onSuccessItem = function(fileItem, response, status, headers) {
                    trip.img = response.savename;
                    console.log(response);
                };
                
                trip.uploader.filters.push({
                    name: 'imageFilter',
                    fn: function(item /*{File|FileLikeObject}*/, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                    }
                });
                
                this.triparray.push(trip);
            },
            deltrip : function(index){
                this.triparray.splice(index,1); 
            },
            changeinsurance : function(value){
                
                for(var i = 0; i < this.insurancearray.length; i++)
                {
                    var ins = this.insurancearray[i];
                    if(ins.id === value)
                    {
                        this.insuranceprice = ins.platformprice;
                        break;
                    }
                }
            },
            changetype : function(){
                
                this.areaarray = this["type" + this.type + "array"];
                this.area = this.areaarray[0].code;
            }
        }
    };
    
  });