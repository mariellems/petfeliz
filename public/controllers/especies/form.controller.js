angular
  .module("app")
  .controller("EspecieFormController", EspecieFormController);

EspecieFormController.$inject = ["EspecieService", "$stateParams", "$state"];

function EspecieFormController(EspecieService, $stateParams, $state) {
  var vm = this;
  vm.especie = {};
  vm.titulo = "Novo especie";

  if ($stateParams.id) {
    vm.titulo = "Editando especie";
    EspecieService.findOne($stateParams.id).then(function(data) {
      vm.especie = data;
    });
  }

  vm.save = function() {
    if ($stateParams.id) {
      EspecieService.update($stateParams.id, vm.especie).then(function() {
        $state.go("especieList");
      });
    } else {
      EspecieService.insert(vm.especie).then(function() {
        $state.go("especieList");
      });
    }
  };
}
