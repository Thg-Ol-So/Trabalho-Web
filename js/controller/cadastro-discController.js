/**
 * Created by oliveira on 29/03/17.
 */
angular.module("trabalhoweb").controller("cadastro-discController",function ($scope,discApiService,cursoApiService,$location) {
    $scope.cursos = [];
    $scope.salvarDisc = function (disc) {
        discApiService.salvardisc(disc).then(function (dados) {
            alert("Cadastro realizado com sucesso");
            $location.url("/listaDisciplinas");
        },function (err) {
            alert("Deu tilt");
        })
    };
    var listarCursos = function(){

        var sucesso = function(dados){
            $scope.cursos = dados.data;
        };
        var erro = function(err){
            alert("Erro"+err);
        };
        cursoApiService.listatodocurso().then(sucesso,erro);
    };
    listarCursos();
});