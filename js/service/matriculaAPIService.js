/**
 * Created by oliveira on 02/05/17.
 */
angular.module("trabalhoweb").factory("matriculaApi", function ($http) {
    var _listaSemestre = function () {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/semestre/list"
        })
    };
    var _listaSemestreDisc = function (semestre, disciplina) {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/matricula/semestre/disciplina/" + semestre + "/" + disciplina
        })
    };
    var _cadastro = function (cadastro) {
        return $http({
            method: "POST",
            url: "http://siscadcpwiv.herokuapp.com/matricula/",
            data:cadastro
        })
    };

    return {
        listaSemestreDisc: _listaSemestreDisc,
        listasemestre: _listaSemestre,
        cadastro: _cadastro
    }
});