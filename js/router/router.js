/**
 * Created by oliveira on 20/03/17.
 */
angular.module("trabalhoweb")
    .config(["$routeProvider", function($routeProvider){

        $routeProvider.when("/",{
            templateUrl:"view/home.html",
            controller:"homeController"
        });

        $routeProvider.when("/listaCursos",{
            templateUrl:"view/lista-curso.html",
            controller: "cursoController"

        });

        $routeProvider.when("/cadastroCurso", {
            templateUrl: "view/cadastro-curso.html",
            controller:"cadastro-cursoController"

        });

        $routeProvider.when("/listaAlunos",{
            templateUrl:"view/lista-aluno.html",
            controller:"alunoController"


        });
        $routeProvider.when("/cadastroAluno", {
            templateUrl: "view/cadastro-aluno.html",
            controller:"cadastro-alunoController"

        });

        $routeProvider.when("/listaDisciplinas",{
            templateUrl:"view/lista-disci.html",
            controller: "homeController"
        });

        $routeProvider.when("/cadastroDisc", {
            templateUrl: "view/cadastro-disciplina.html",
            controller: "cadastro-discController"

        });

    }]);