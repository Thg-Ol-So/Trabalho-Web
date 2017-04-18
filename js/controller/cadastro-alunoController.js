/**
 * Created by oliveira on 27/03/17.
 */

angular.module("trabalhoweb").controller("cadastro-alunoController", function ($scope,alunoApiService,cursoApiService, $location) {
    $scope.cursos = [];
    $scope.salvarAluno = function (aluno) {
        alunoApiService.salvaraluno(aluno).then(function (dados) {
            alert("Aluno cadastrado com Sucesso");
            $location.url("/listaAlunos");
        },function(err){
            alert("Erro");
        });
    };
    var listaCurso = function () {
        cursoApiService.listatodocurso().then(function (dados) {
            $scope.cursos = dados.data;
        },function (err){alert("Erro"+err)});
    };
    listaCurso();

});