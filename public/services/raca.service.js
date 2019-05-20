angular.module("app").service("RacaService", RacaService);

RacaService.$inject = ["$http"];

function RacaService($http) {
  var URL = "/racas";

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

  service.update = function(id, raca) {
    return $http.put(URL + "/" + id, raca).then(function(resp) {
      return resp.data;
    });
  };

  service.remove = function(id) {
    return $http.delete(URL + "/" + id);
  };

  service.insert = function(raca) {
    return $http.post(URL, raca).then(function(resp) {
      return resp.data;
    });
  };
}
