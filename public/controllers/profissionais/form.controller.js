angular
  .module("app")
  .controller("ProfissionalFormController", ProfissionalFormController);

ProfissionalFormController.$inject = [
  "ProfissionalService",
  "$stateParams",
  "$state"
];

function ProfissionalFormController(ProfissionalService, $stateParams, $state) {
  var vm = this;
  vm.profissional = {};
  vm.titulo = "Novo profissional";

  if ($stateParams.id) {
    vm.titulo = "Editando profissional";
    ProfissionalService.findOne($stateParams.id).then(function(data) {
      vm.profissional = data;
    });
  }

  vm.save = function() {
    if ($stateParams.id) {
      ProfissionalService.update($stateParams.id, vm.profissional).then(
        function() {
          $state.go("profissionalList");
        }
      );
    } else {
      ProfissionalService.insert(vm.profissional).then(function() {
        $state.go("profissionalList");
      });
    }
  };
}
