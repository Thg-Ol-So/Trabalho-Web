/**
 * Created by oliveira on 29/03/17.
 */
angular.module("trabalhoweb").controller("cadastro-cursoController",function ($scope,cursoApiService,$location) {

    $scope.salvarCurso = function(curso){
        cursoApiService.salvarcurso(curso).then(function(dados){
            alert("Curso cadastrado com Sucesso");
            $location.url("/listaCursos");
        },function(err){
            alert("Erro");
        });
    };

});