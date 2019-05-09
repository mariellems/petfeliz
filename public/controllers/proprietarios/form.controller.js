angular
  .module("app")
  .controller("ProprietarioFormController", ProprietarioFormController);

ProprietarioFormController.$inject = [
  "ProprietarioService",
  "AnimalService",
  "$stateParams",
  "$state"
];

function ProprietarioFormController(
  ProprietarioService,
  AnimalService,
  $stateParams,
  $state
) {
  var vm = this;
  vm.proprietario = {};
  vm.titulo = "Novo proprietário";

  vm.animais = [];

  AnimalService.findAll().then(function(data) {
    vm.animais = data;
  });

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

  vm.addItem = function() {
    vm.proprietario.itens = vm.proprietario.itens || [];
    vm.animalSelecionado = {};
    vm.indexSelecionado = null;
  };

  vm.saveItem = function() {
    if (vm.indexSelecionado) {
      vm.proprietario.itens[vm.indexSelecionado] = vm.animalSelecionado;
    } else {
      vm.proprietario.itens.push(vm.animalSelecionado);
    }
  };
}
