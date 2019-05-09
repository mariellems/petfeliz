angular
  .module("app")
  .controller("EspecieListController", EspecieListController);

EspecieListController.$inject = ["EspecieService"];

function EspecieListController(EspecieService) {
  var vm = this;
  vm.especies = [];

  function _load() {
    EspecieService.findAll().then(function(dados) {
      vm.especies = dados;
    });
  }
  _load();

  vm.excluir = function(id) {
    if (confirm("Deseja realmente excluir?")) {
      EspecieService.remove(id).then(function() {
        _load();
      });
    }
  };
}
