angular.module("app").service("EspecieService", EspecieService);

EspecieService.$inject = ["$http"];

function EspecieService($http) {
  var URL = "/especies";

  var service = this;

  service.findAll = function() {
    return $http.get(URL).then(function(resp) {
      return resp.data;
    });
  };

  service.findOne = function(id) {
    return $http.get(URL + "/" + id).then(function(resp) {
      return resp.data;
    });
  };

  service.update = function(id, especie) {
    return $http.put(URL + "/" + id, especie).then(function(resp) {
      return resp.data;
    });
  };

  service.remove = function(id) {
    return $http.delete(URL + "/" + id);
  };

  service.insert = function(especie) {
    return $http.post(URL, especie).then(function(resp) {
      return resp.data;
    });
  };
}
