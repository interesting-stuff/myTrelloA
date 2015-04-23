"use strict";

function listNameDirective() {
  return {
    restrict: "A",
    replace: true,
    scope: {
      listNameDirective: "="
    },
    link: function (scope, element, attrs) {
      console.log(scope.listNameDirective);

      MyTrello.get("/lists/" + Object.keys(scope.listNameDirective)[0], function(list) {
        var html = "<h2 class='md-title'>" + list.name + "</h2>"
        element.html(html);
      })
    }
  }

}

myTrello.directive("listNameDirective", listNameDirective);