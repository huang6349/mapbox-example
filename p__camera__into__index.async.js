(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{MObi:function(e){e.exports={version:8,name:"basic",center:[114.29,30.55],sources:{water:{type:"vector",scheme:"tms",tiles:["#{BASEURL}#{TMSURL}/#{WORKSPACE}:#{WATER}@EPSG:#{EPSG}@pbf/{z}/{x}/{y}.pbf"]},roads:{type:"vector",scheme:"tms",tiles:["#{BASEURL}#{TMSURL}/#{WORKSPACE}:#{ROAD}@EPSG:#{EPSG}@pbf/{z}/{x}/{y}.pbf"]},buildings:{type:"vector",scheme:"tms",tiles:["#{BASEURL}#{TMSURL}/#{WORKSPACE}:#{BUILDING}@EPSG:#{EPSG}@pbf/{z}/{x}/{y}.pbf"]}},layers:[{id:"background",type:"background",paint:{"background-color":"#{BACKGROUND_COLOR}"}},{id:"water",source:"water","source-layer":"water",type:"fill",paint:{"fill-color":"#{WATER_COLOR}"}},{id:"roads",source:"roads","source-layer":"roads",type:"line",minzoom:9,paint:{"line-width":["interpolate",["exponential",1.75],["zoom"],5,.75,18,32],"line-color":"#{ROAD_COLOR}"}},{id:"roads-case",source:"roads","source-layer":"roads",type:"line",minzoom:9,paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],10,1,18,2],"line-color":"#{ROAD_CASE_COLOR}","line-gap-width":["interpolate",["exponential",1.75],["zoom"],5,.75,18,32]}},{id:"buildings",source:"buildings","source-layer":"buildings",type:"fill-extrusion",minzoom:10,paint:{"fill-extrusion-opacity":.8,"fill-extrusion-color":["interpolate",["linear"],["*",4,["to-number",["get","floor"]]],0,"#{BUILDING_SHORT_COLOR}",50,"#{BUILDING_HIGH_COLOR}"],"fill-extrusion-height":["*",5,["to-number",["get","floor"]]]}}]}},mC9z:function(e,t,o){"use strict";var n=o("JPcv"),r=o.n(n),i=o("MObi"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.stringify(i).replace(/\#\{([^}]+)\}/g,function(t,o){return{BASEURL:"http://129.211.24.130:6066",TMSURL:"/geoserver/gwc/service/tms/1.0.0",WORKSPACE:"wuhan",EPSG:"900913",WATER:"water",ROAD:"roads",BUILDING:"buildings"}[o]||e[o]});return r.a.fromJS(JSON.parse(t))};o.d(t,"a",function(){return l});a({BACKGROUND_COLOR:"rgba(9, 16, 29, 1)",WATER_COLOR:"rgba(18, 35, 48, 1)",ROAD_COLOR:"rgba(18, 35, 48, 0.45)",ROAD_CASE_COLOR:"rgba(0, 0, 0, 0.2)",BUILDING_SHORT_COLOR:"rgba(60, 140, 200, 1)",BUILDING_HIGH_COLOR:"rgba(255, 255, 255, 1)"});var l=a({BACKGROUND_COLOR:"hsl(150, 6%, 93%)",WATER_COLOR:"hsl(185, 9%, 81%)",ROAD_COLOR:"hsl(0, 0%, 100%)",ROAD_CASE_COLOR:"hsl(156, 12%, 92%)",BUILDING_SHORT_COLOR:"hsl(55, 5%, 91%)",BUILDING_HIGH_COLOR:"hsl(185, 7%, 73%)"})},zMXG:function(e,t,o){"use strict";o.r(t);var n=o("jehZ"),r=o.n(n),i=o("p0pE"),a=o.n(i),l=o("qIgq"),s=o.n(l),O=o("q1tI"),u=o("UP1k"),c=o("mC9z"),R=[114.27917,30.5725],p=function(){var e=O["useState"]({longitude:R[0],latitude:R[1],zoom:12,bearing:0,pitch:0,scrollZoom:!0,dragPan:!0,dragRotate:!1,doubleClickZoom:!0}),t=s()(e,2),o=t[0],n=t[1],i=function(){n(function(e){return a()({},e,{longitude:R[0],latitude:R[1],zoom:12,pitch:45,transitionDuration:1e3})})},l=function(e){return n(a()({},o,e))};return O["createElement"](u["c"],r()({},o,{preventStyleDiffing:!1,mapStyle:c["a"],width:"100%",height:"100%",minZoom:11,maxZoom:18,transitionInterruption:u["b"].IGNORE,transitionInterpolator:new u["a"],onLoad:i,onViewportChange:l}))};t["default"]=p}}]);