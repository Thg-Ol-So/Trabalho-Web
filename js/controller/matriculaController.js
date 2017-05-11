/**
 * Created by oliveira on 29/04/17.
 */
angular.module("trabalhoweb").controller("matriculaController", function ($scope, alunoApiService, matriculaApi, discApiService, cursoApiService, $location) {
    $scope.curso = [];
    $scope.idDisciplina = 0;
    $scope.idSemestre = 0;
    $scope.cadastroPost = [];

    var zerar = function () {
        $scope.disciplinas = [];
        $scope.alunos = [];
        $scope.alunosSelecionado = [];
        $scope.addAlunosSelecionado = [];
        $scope.addAlunosCadastrados = [];
        $scope.semestre = [];
        $scope.idCurso = -1;
    };
    var zerarSemestre = function () {
        $scope.alunos = [];
        $scope.alunosSelecionado = [];
        $scope.addAlunosSelecionado = [];
        $scope.addAlunosCadastrados = [];
        $scope.semestre = [];

    };
//  <-----------------------------------(LISTA CURSOS)----------------------------------------------------------------->
    var listarCursos = function () {
        cursoApiService.listacursos().then(function (dados) {
            $scope.curso = dados.data;
        }, function (err) {
            alert("Erro" + err);
        });
    };
//  <------------------------------------(LISTA DISCIPLINA POR CURSO)-------------------------------------------------->
    $scope.listaDisc = function (id) {
        zerar();
        if (id) {
            $scope.idCurso = id;
            discApiService.listadisccurso(id).then(function (dados) {
                $scope.disciplinas = dados.data;
            }, function (err) {
                alert("Erro" + err);
            });
        }
    };
//  <-----------------------------------(ADICIONA ALUNO)--------------------------------------------------------------->
    $scope.addAlunlos = function () {
        $scope.addAlunosSelecionado = [];
        for (var i = 0; i < $scope.alunosSelecionado.length; i++) {
            $scope.addAlunosSelecionado.push($scope.alunosSelecionado[i]);
            var referencia = {};
            referencia.DisciplinaId = $scope.idDisciplina;
            referencia.SemestreId = $scope.idSemestre;
            referencia.AlunoId = $scope.alunosSelecionado[i].id;
            $scope.cadastroPost.push(referencia);

        }
    };
//  <-----------------------------------(ALUNOS SELECIONADOS PELO CHECKBOX)-------------------------------------------->
    $scope.alunoSelecionado = function (id, valor) {
        var idx = valor.indexOf(id);
        if (idx > -1) {
            $scope.alunosSelecionado.splice(idx, 1);
        }
        else {
            $scope.alunosSelecionado.push(id);
        }
    };
//  <------------------------------------(LISTA ALUNO POR CURSO)------------------------------------------------------->
    $scope.listaAluno = function (idSemestre) {
        $scope.alunos = [];
        $scope.cadastroPost = [];
        $scope.alunosSelecionado = [];
        $scope.addAlunosSelecionado = [];
        $scope.addAlunosCadastrados = [];
        if (idSemestre) {
            $scope.idSemestre = idSemestre;
            matriculaApi.listaSemestreDisc(idSemestre, $scope.idDisciplina).then(function (dados) {
                $scope.addAlunosCadastrados = dados.data;
            }, function (err) {
                alert("Error");
            })
        }
        if ($scope.idCurso > -1) {
            alunoApiService.listaalunocurso($scope.idCurso).then(function (dados) {
                $scope.alunos = dados.data;
                for (var i = 0; i < $scope.addAlunosCadastrados.length; i++) {
                    var valor = $scope.addAlunosCadastrados[i].alunoid;
                    for (var x = 0; x < $scope.alunos.length; x++) {
                        if ($scope.alunos[x].id === valor) {
                            $scope.alunos.splice(x, 1);
                        }
                    }
                }
            }, function (err) {
                alert("Erro" + err);
            });
        }

    };
//  <--------------------------------------(SALVAR MATRICULA)---------------------------------------------------------->
    $scope.salvar = function () {
        if ($scope.cadastroPost.length > 0) {
            matriculaApi.cadastro($scope.cadastroPost).then(function (dados) {
                alert("Sucess");


                $scope.listaAluno($scope.idSemestre);
            }, function (err) {
                alert("erro");
            })
        } else {
            alert("Sem Objeto");
        }
    };
//  <------------------------------------(LISTAR SEMESTRE)------------------------------------------------------------->
    $scope.listarSemestre = function (id) {
        zerarSemestre();
        $scope.idDisciplina = id;
        matriculaApi.listasemestre().then(function (dados) {
            $scope.semestre = dados.data;
        }, function (err) {
            alert("Erro");
        });
    };
//  <------------------------------------------------------------------------------------------------------------------>

    listarCursos();

});