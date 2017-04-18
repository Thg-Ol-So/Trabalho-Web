/**
 * Created by oliveira on 24/03/17.
 */
angular.module("trabalhoweb").factory("alunoApiService",function ($http) {
    var _salvarAluno = function (aluno) {
        return $http({
            method:"POST",
            url:"http://siscadcpwiv.herokuapp.com/aluno/",
            data:aluno
        })
    };
    var _listaAlunoCurso = function (id) {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/curso/"+id
        })
    };
    var _listaAluno = function () {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/list/1/10"
        })
    };
    var _listaAlunoPag = function (id) {
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+id+"/10"
        })
    };
    return {
        listaaluno: _listaAluno,
        listaalunocurso: _listaAlunoCurso,
        listaalunopag: _listaAlunoPag,
        salvaraluno: _salvarAluno
        }
});