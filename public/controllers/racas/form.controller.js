angular.module("app").controller("RacaFormController", RacaFormController);

RacaFormController.$inject = [
  "RacaService",
  "EspecieService",
  "$stateParams",
  "$state"
];

function RacaFormController(RacaService, EspecieService, $stateParams, $state) {
  var vm = this;
  vm.raca = {};
  vm.titulo = "Nova raça";

  vm.animais = [];

  EspecieService.findAll().then(function(data) {
    vm.animais = data;
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

  vm.addItem = function() {
    vm.raca.itens = vm.raca.itens || [];
    vm.especieSelecionado = {};
    vm.indexSelecionado = null;
  };

  vm.saveItem = function() {
    if (vm.indexSelecionado) {
      vm.raca.itens[vm.indexSelecionado] = vm.especieSelecionado;
    } else {
      vm.raca.itens.push(vm.especieSelecionado);
    }
  };
}
