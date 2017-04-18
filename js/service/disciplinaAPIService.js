/**
 * Created by oliveira on 24/03/17.
 */
angular.module("trabalhoweb").factory("discApiService",function ($http) {
      var _listaDisci = function () {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/list/1/10"
        });
    };

    var _listaDisciPag = function (id) {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+id+"/10"
        });
    };

    var _listaDiscCurso = function (id) {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id
        })
    };
    var _salvarDisc = function (disc) {
        return $http({
            method:"POST",
            url:"http://siscadcpwiv.herokuapp.com/disciplina/",
            data:disc
        })
    };
    return {
        listadisci : _listaDisci,
        listadisccurso: _listaDiscCurso,
        listardiscpag: _listaDisciPag,
        salvardisc: _salvarDisc
    }
});