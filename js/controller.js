
var appTrainer = angular.module('appTrainer', []);

appTrainer.controller('ListarColores',  ['$scope','$timeout',function ($scope, $timeout) {
    $scope.colores = ['#ffa'];
    $scope.repeticion = 0;
    $scope.tiempo = 0;
    $scope.segundos = 0;
    $scope.formulario = 'd-block';
	    	 			$scope.resultado = 'd-none';
    $scope.registrar = function() {
    	 if(typeof($scope.color) !== 'undefined') {
    	 	if ( $scope.colores.length<10){
	            $scope.colores.push(
	                $scope.color
	            );
	            
	            // Limpia
	            $scope.color = "";
	        }

	     }
	    
	    return false;
    }
    $scope.retirar = function($index) {
    	$scope.colores.splice($index, 1);

    }

    $scope.ejecutar = function() {
    	 if(typeof($scope.tiempo) !== 'undefined'){
    	 	if ($scope.colores.length > 1) {
	    	 	var tiempo = $scope.tiempo * 1000 ;
	    	 	$scope.formulario = 'd-none';
	    	 	$scope.resultado = 'd-block';
	    	 	$scope.segundos = 0;
	    	 	
	    	 	function random(max,min,rand) {
	    	 		var numero = Math.floor(Math.random() * (max - min)) + min;
	    	 		while(numero === rand)
	    	 		{
	    	 			
	    	 			numero = Math.floor(Math.random() * (max - min)) + min;
	    	 		}
	  				return numero;
				}
				var i = 1;
				var segundos = 0;
				var cuentasegundos = function(){
		            $scope.segundos = segundos;
		            segundos += 1;
		            $timeout(cuentasegundos, 1000);
		        };
	    	 	var cambiodefondo = function() {
	    	 		if( i <= $scope.repeticion ) {
	    	 			
	    	 			var rand = $scope.rand;
	    	 			if(typeof(rand) === 'undefined') {
	    	 				rand = 0;
	    	 			}
	   	 				rand=random(0,$scope.colores.length,rand);
	    	 			$scope.background=$scope.colores[rand];
	    	 			$scope.rand = rand;
	    	 			console.log('Color: '+rand);
	    	 			console.log('repeticion: '+i);
	    	 			i += 1;
			            $timeout(cambiodefondo,tiempo);
		     		}
		     		else{
		     			$scope.formulario = 'd-block';
	    	 			$scope.resultado = 'd-none';
		     		}
		     	}
		    }
		    else {
		    	alert('Debes añadir 2 colores o más colores.')
		    }
	     }
	     $timeout(cambiodefondo, 0);	
	     $timeout(cuentasegundos, 0);
	    
	    return false;
    }
}]);
