/**
 * Created by oliveira on 24/03/17.
 */
angular.module("trabalhoweb").factory("cursoApiService",function ($http) {
    var _listaCursos = function () {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/1/10"
        });
    };
    var _listaTodosCursos = function () {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/1/1000"
        });
    };
    var _listaCursPag = function (id) {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/"+id+"/10"
        });
    };
    var _listaDiscCurso = function (id) {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id
        })
    };

    var _salvarCurso = function (curso) {
        return $http({
            method:"POST",
            url:"http://siscadcpwiv.herokuapp.com/curso/",
            data:curso
        })
    };
    return {
        listacursos : _listaCursos,
        listadisccurso: _listaDiscCurso,
        salvarcurso: _salvarCurso,
        listacursoPag: _listaCursPag,
        listatodocurso: _listaTodosCursos
    }

});