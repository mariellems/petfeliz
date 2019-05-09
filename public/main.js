angular.module("app", ["ui.router"]);

angular.module("app").config(ConfigMain);

ConfigMain.$inject = ["$stateProvider"];

function ConfigMain($stateProvider) {
  $stateProvider
    .state({
      name: "animalList",
      url: "/animais",
      templateUrl: "/partials/animais/list.html",
      controller: "AnimalListController",
      controllerAs: "vm"
    })
    .state({
      name: "animalNovo",
      url: "/animais/novo",
      templateUrl: "/partials/animais/form.html",
      controller: "AnimalFormController",
      controllerAs: "vm"
    })
    .state({
      name: "animalEditar",
      url: "/animais/:id",
      templateUrl: "/partials/animais/form.html",
      controller: "AnimalFormController",
      controllerAs: "vm"
    })
    .state({
      name: "especieList",
      url: "/especies",
      templateUrl: "/partials/especies/list.html",
      controller: "EspecieListController",
      controllerAs: "vm"
    })
    .state({
      name: "especieNovo",
      url: "/especies/novo",
      templateUrl: "/partials/especies/form.html",
      controller: "EspecieFormController",
      controllerAs: "vm"
    })
    .state({
      name: "especieEditar",
      url: "/especies/:id",
      templateUrl: "/partials/especies/form.html",
      controller: "EspecieFormController",
      controllerAs: "vm"
    })
    .state({
      name: "profissionalList",
      url: "/profissionais",
      templateUrl: "/partials/profissionais/list.html",
      controller: "ProfissionalListController",
      controllerAs: "vm"
    })
    .state({
      name: "profissionaloNovo",
      url: "/profissionais/novo",
      templateUrl: "/partials/profissionais/form.html",
      controller: "ProfissionalFormController",
      controllerAs: "vm"
    })
    .state({
      name: "profissionalEditar",
      url: "/profissionais/:id",
      templateUrl: "/partials/profissionais/form.html",
      controller: "ProfissionalFormController",
      controllerAs: "vm"
    })
    .state({
      name: "produtoList",
      url: "/produtos",
      templateUrl: "/partials/produtos/list.html",
      controller: "ProdutoListController",
      controllerAs: "vm"
    })
    .state({
      name: "produtoNovo",
      url: "/produtos/novo",
      templateUrl: "/partials/produtos/form.html",
      controller: "ProdutoFormController",
      controllerAs: "vm"
    })
    .state({
      name: "produtoEditar",
      url: "/produtos/:id",
      templateUrl: "/partials/produtos/form.html",
      controller: "ProdutoFormController",
      controllerAs: "vm"
    })
    .state({
      name: "proprietarioList",
      url: "/proprietarios",
      templateUrl: "/partials/proprietarios/list.html",
      controller: "ProprietarioListController",
      controllerAs: "vm"
    })
    .state({
      name: "proprietarioNovo",
      url: "/proprietarios/novo",
      templateUrl: "/partials/proprietarios/form.html",
      controller: "ProprietarioFormController",
      controllerAs: "vm"
    })
    .state({
      name: "proprietarioEditar",
      url: "/proprietarios/:id",
      templateUrl: "/partials/proprietarios/form.html",
      controller: "ProprietarioFormController",
      controllerAs: "vm"
    })
    .state({
      name: "pedidoList",
      url: "/pedidos",
      templateUrl: "/partials/pedidos/list.html",
      controller: "PedidoListController",
      controllerAs: "vm"
    })
    .state({
      name: "pedidoNovo",
      url: "/pedidos/novo",
      templateUrl: "/partials/pedidos/form.html",
      controller: "PedidoFormController",
      controllerAs: "vm"
    })
    .state({
      name: "pedidoEditar",
      url: "/pedidos/:id",
      templateUrl: "/partials/pedidos/form.html",
      controller: "PedidoFormController",
      controllerAs: "vm"
    })
    .state({
      name: "racaList",
      url: "/racas",
      templateUrl: "/partials/racas/list.html",
      controller: "RacaListController",
      controllerAs: "vm"
    })
    .state({
      name: "racaNovo",
      url: "/racas/novo",
      templateUrl: "/partials/racas/form.html",
      controller: "RacaFormController",
      controllerAs: "vm"
    })
    .state({
      name: "racaEditar",
      url: "/racas/:id",
      templateUrl: "/partials/racas/form.html",
      controller: "RacaFormController",
      controllerAs: "vm"
    })
    .state({
      name: "servicoList",
      url: "/servicos",
      templateUrl: "/partials/servicos/list.html",
      controller: "ServicoListController",
      controllerAs: "vm"
    })
    .state({
      name: "servicoNovo",
      url: "/servicos/novo",
      templateUrl: "/partials/servicos/form.html",
      controller: "ServicoFormController",
      controllerAs: "vm"
    })
    .state({
      name: "servicoEditar",
      url: "/servicos/:id",
      templateUrl: "/partials/servicos/form.html",
      controller: "ServicoFormController",
      controllerAs: "vm"
    });
}
