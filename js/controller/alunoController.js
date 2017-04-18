/**
 * Created by oliveira on 23/03/17.
 */
angular.module("trabalhoweb").controller("alunoController",function ($scope,alunoApiService,cursoApiService,$location) {
    $scope.alunos = [];
    $scope.cursos = [];
    $scope.p= 1;
    $scope.irPara = function(caminho){
        $location.url(caminho);
    };


   var listaAluno = function () {
     var success = function (dados) {
         $scope.alunos = dados.data;
     };

     var err = function(err){
           alert("Erro"+err);
       };

       alunoApiService.listaaluno().then(success,err);

   };
    $scope.mudarPagA = function(p){
        $scope.p=p+1;
        alunoApiService.listaalunopag($scope.p).then(function (dados) {
            if(!dados.data.length==0){
                $scope.alunos = dados.data;
            }else{
                $scope.p--;
            }
        },function (err) {
            alert("Deu tilt");
        });


    };
    $scope.voltPagA = function(p){
        $scope.p=p-1;
        if($scope.p==0){
            $scope.p=1;
        }
        alunoApiService.listaalunopag($scope.p).then(function (dados) {
            if(!dados.data.length==0){
                $scope.alunos = dados.data;
            }
        },function (err) {
            alert("Deu tilt");
        });

    };

    $scope.listaAlunoCurso = function (id) {
        if(id){
        alunoApiService.listaalunocurso(id).then(function (dados) {
            $scope.alunos = dados.data;},function (err) {
                alert("Erro"+err);
          });
        }else{
            listaAluno();
        }
   };

   var listaCurso = function () {
       cursoApiService.listatodocurso().then(function (dados) {
        $scope.cursos = dados.data;
       },function (err){alert("Erro"+err)});
   };

     listaAluno();
     listaCurso();
});