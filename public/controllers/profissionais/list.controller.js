angular
  .module("app")
  .controller("ProfissionalListController", ProfissionalListController);

ProfissionalListController.$inject = ["ProfissionalService"];

function ProfissionalListController(ProfissionalService) {
  var vm = this;
  vm.profissionais = [];

  function _load() {
    ProfissionalService.findAll().then(function(dados) {
      vm.profissionais = dados;
    });
  }
  _load();

  vm.excluir = function(id) {
    if (confirm("Deseja realmente excluir?")) {
      ProfissionalService.remove(id).then(function() {
        _load();
      });
    }
  };
}
