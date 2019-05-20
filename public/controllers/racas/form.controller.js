angular.module("app").controller("RacaFormController", RacaFormController);

RacaFormController.$inject = [
  'RacaService',
  'EspecieService',
  "$stateParams",
  "$state"
];

function RacaFormController(RacaService, EspecieService, $stateParams, $state) {
  var vm = this;
  vm.raca = {};
  vm.titulo = "Nova raça";

  vm.especies = [];

  EspecieService.findAll().then(function(data) {
    vm.especies = data;
  });

  if ($stateParams.id) {
    vm.titulo = "Editando raça";
    RacaService.findOne($stateParams.id).then(function(data) {
      vm.raca = data;
    });
  }

  vm.save = function() {
    if ($stateParams.id) {
      RacaService.update($stateParams.id, vm.raca).then(function() {
        $state.go("racaList");
      });
    } else {
      RacaService.insert(vm.raca).then(function() {
        $state.go("racaList");
      });
    }
  };
}
