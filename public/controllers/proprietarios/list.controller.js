angular
  .module("app")
  .controller("ProprietarioListController", ProprietarioListController);

ProprietarioListController.$inject = ["ProprietarioService"];

function ProprietarioListController(ProprietarioService) {
  var vm = this;
  vm.proprietarios = [];

  function _load() {
    ProprietarioService.findAll().then(function(dados) {
      vm.proprietarios = dados;
    });
  }
  _load();

  vm.excluir = function(id) {
    if (confirm("Deseja realmente excluir?")) {
      ProprietarioService.remove(id).then(function() {
        _load();
      });
    }
  };
}
