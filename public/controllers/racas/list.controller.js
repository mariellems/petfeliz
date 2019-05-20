angular.module("app").controller("RacaListController", RacaListController);

RacaListController.$inject = ["RacaService"];

function RacaListController(RacaService) {
  var vm = this;
  vm.racas = [];

  function _load() {
    RacaService.findAll().then(function(dados) {
      vm.racas = dados;
    });
  }
  _load();

  vm.excluir = function(id) {
    if (confirm("Deseja realmente excluir?")) {
      RacaService.remove(id).then(function() {
        _load();
      });
    }
  };
}
