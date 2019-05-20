angular.module("app").service("ProfissionalService", ProfissionalService);

ProfissionalService.$inject = ["$http"];

function ProfissionalService($http) {
  var URL = "/profissionais";

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

  service.update = function(id, profissional) {
    return $http.put(URL + "/" + id, profissional).then(function(resp) {
      return resp.data;
    });
  };

  service.remove = function(id) {
    return $http.delete(URL + "/" + id);
  };

  service.insert = function(profissional) {
    return $http.post(URL, profissional).then(function(resp) {
      return resp.data;
    });
  };
}
