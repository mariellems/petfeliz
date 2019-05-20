angular
  .module("app")
  .controller("ProprietarioFormController", ProprietarioFormController);

ProprietarioFormController.$inject = [
  "ProprietarioService",
  "$stateParams",
  "$state"
];

function ProprietarioFormController(
  ProprietarioService,
  $stateParams,
  $state
) {
  var vm = this;
  vm.proprietario = {};
  vm.titulo = "Novo proprietário";

  if ($stateParams.id) {
    vm.titulo = "Editando proprietário";
    ProprietarioService.findOne($stateParams.id).then(function(data) {
      vm.proprietario = data;
    });
  }

  vm.save = function() {
    if ($stateParams.id) {
      ProprietarioService.update($stateParams.id, vm.proprietario).then(
        function() {
          $state.go("proprietarioList");
        }
      );
    } else {
      ProprietarioService.insert(vm.proprietario).then(function() {
        $state.go("proprietarioList");
      });
    }
  };

}
