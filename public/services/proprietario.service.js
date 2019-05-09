angular.module("app").service("ProprietarioService", ProprietarioService);

ProprietarioService.$inject = ["$http"];

function ProprietarioService($http) {
  var URL = "/proprietarios";

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

  service.update = function(id, proprietario) {
    return $http.put(URL + "/" + id, proprietario).then(function(resp) {
      return resp.data;
    });
  };

  service.remove = function(id) {
    return $http.delete(URL + "/" + id);
  };

  service.insert = function(proprietario) {
    return $http.post(URL, proprietario).then(function(resp) {
      return resp.data;
    });
  };
}
