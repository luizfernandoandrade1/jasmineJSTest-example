describe("Teste Calculos", function () {

    var calculadora;
    beforeEach(function () {
        calculadora = new CalculoGeometrico();
    });

    it("calcular area retangulo", function () {
        expect(calculadora.areaRetangulo(2,2)).toEqual(4);
    });

    it("calcular area triangulo equilatero", function () {
        expect(calculadora.areaTrianguloEquilatero(3,3)).toEqual(4.5);
    });

    it("calcular area circulo", function () {
        expect(calculadora.areaCirculo(1)).toEqual(Math.PI);
    });

});