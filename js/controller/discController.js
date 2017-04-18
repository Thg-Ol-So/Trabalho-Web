/**
 * Created by oliveira on 22/03/17.
 */
angular.module("trabalhoweb").controller("homeController",function ($scope,discApiService,cursoApiService,$location) {
    $scope.cursos = [];
    $scope.disciplinas = [];
    $scope.p= 1;

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

     $scope.mudarPag = function(p){
        $scope.p=p+1;
         discApiService.listardiscpag( $scope.p).then(function (dados) {
            if(!dados.data.length==0){
                $scope.disciplinas = dados.data;
            }else{
               $scope.p--;
            }
    },function (err) {
            alert("Deu tilt");
        });
           
    
    };
    $scope.voltPag = function(p){
        $scope.p=p-1;
        if($scope.p==0){
            $scope.p=1;
        }
        discApiService.listardiscpag($scope.p).then(function (dados) {
            if(!dados.data.length==0){
                $scope.disciplinas = dados.data;
            }
        },function (err) {
            alert("Deu tilt");
        });

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

    var listarDisciplina = function () {
      var ol = function (dados) {
          $scope.disciplinas = dados.data;
      };
        var so = function (err) {
            alert("Erro"+err);
        };
        discApiService.listadisci().then(ol,so);
    };


    $scope.listaDiscCurso = function(id) {
       if(id){
        discApiService.listadisccurso(id).then(function (dados) {
            $scope.disciplinas = dados.data;},function (err) {
            alert("Erro"+err);
        });
       }else{
           listarDisciplina();
       }
    };

    listarCursos();
    listarDisciplina();
});