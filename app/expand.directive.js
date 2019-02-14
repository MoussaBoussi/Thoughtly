"use strict";

function expand() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("focus", function(){
                $element.css("transform", "scaleX(1.1) scaleY(1.1)")
            })
            $element.on("blur", function(){
                $element.css("transform", "")
            })
        }
    }



}

angular
    .module("app")
    .directive("expand", expand)