function CalculoGeometrico() {

    var clazz =  {
        areaRetangulo : function(base, altura) {
            return base * altura;
        },

        areaTrianguloEquilatero : function(base, altura) {
            return (base * altura) / 2;
        },
        
        areaCirculo : function (raio) {
            return Math.PI * (raio *raio);
        }


    };
    return clazz;
}