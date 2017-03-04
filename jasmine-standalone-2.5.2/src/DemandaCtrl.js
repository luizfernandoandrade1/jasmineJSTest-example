function DemandaCtrl(scope) {


    /*
    * Same business roles
    * */

    var clazz = {
        addCourse : function (demand) {
            if (!demand.courses) {
                demand.courses = [];
            }

            demand.courses.push('Excel');
        }

    };

    scope.addCourse = clazz.addCourse;

    return clazz;

}
DemandaCtrl.$inject = ['$scope'];
