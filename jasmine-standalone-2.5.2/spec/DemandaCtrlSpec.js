describe("Testando funções em demanda", function () {
    var demandaCtrl;
    var scope = {};
    beforeEach(function () {
        demandaCtrl = new DemandaCtrl(scope);
        scope = {demand: {id: '22',name: 'JasmineJS'}}
   });

    it("Adicionar curso em demanda", function () {
        demandaCtrl.addCourse(scope.demand);
        expect(scope.demand.courses[0]).toEqual('Excel');
    });

});