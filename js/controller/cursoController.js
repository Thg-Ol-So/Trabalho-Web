/**
 * Created by oliveira on 23/03/17.
 */
angular.module("trabalhoweb").controller("cursoController",function ($scope,cursoApiService,$location) {

    $scope.curso = [];
    $scope.p= 1;

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    $scope.mudarPagC = function(p){
        $scope.p=p+1;
        cursoApiService.listacursoPag( $scope.p).then(function (dados) {
            if(!dados.data.length==0){
                $scope.curso = dados.data;
            }else{
                $scope.p--;
            }
        },function (err) {
            alert("Deu tilt");
        });
     };
    $scope.voltPagC = function(p){
        $scope.p=p-1;
        if($scope.p==0){
            $scope.p=1;
        }
        cursoApiService.listacursoPag($scope.p).then(function (dados) {
            if(!dados.data.length==0){
                $scope.curso = dados.data;
            }
        },function (err) {
            alert("Deu tilt");
        });

    };


    var listarCursos = function(){

        var su = function(dados){
            $scope.curso = dados.data;
        };
        var er = function(err){
            alert("Erro"+err);
        };
        cursoApiService.listacursos().then(su,er);
    };
    listarCursos();

});