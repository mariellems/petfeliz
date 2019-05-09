angular.module("app").controller("PedidoFormController", PedidoFormController);

PedidoFormController.$inject = [
  "PedidoService",
  "ProprietarioService",
  "AnimalService",
  "ProdutoService",
  "ServicoService",
  "$stateParams",
  "$state"
];

function PedidoFormController(
  PedidoService,
  ProprietarioService,
  AnimalService,
  ProdutoService,
  ServicoService,
  $stateParams,
  $state
) {
  var vm = this;
  vm.pedido = {};
  vm.titulo = "Novo pedido";

  vm.proprietarios = [];
  vm.animais = [];
  vm.produtos = [];
  vm.servicos = [];

  ProprietarioService.findAll().then(function(data) {
    vm.proprietarios = data;
  });
  AnimalService.findAll().then(function(data) {
    vm.animais = data;
  });
  ProdutoService.findAll().then(function(data) {
    vm.produtos = data;
  });
  ServicoService.findAll().then(function(data) {
    vm.servicos = data;
  });

  if ($stateParams.id) {
    vm.titulo = "Editando pedido";
    PedidoService.findOne($stateParams.id).then(function(data) {
      vm.pedido = data;
    });
  }

  vm.save = function() {
    if ($stateParams.id) {
      PedidoService.update($stateParams.id, vm.pedido).then(function() {
        $state.go("pedidoList");
      });
    } else {
      PedidoService.insert(vm.pedido).then(function() {
        $state.go("pedidoList");
      });
    }
  };

  vm.addItem = function() {
    vm.pedido.itens = vm.pedido.itens || [];
    vm.itemSelecionado = {};
    vm.indexSelecionado = null;
  };

  vm.saveItem = function() {
    if (vm.indexSelecionado) {
      vm.pedido.itens[vm.indexSelecionado] = vm.itemSelecionado;
    } else {
      vm.pedido.itens.push(vm.itemSelecionado);
    }
  };
}
