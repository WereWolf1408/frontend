var myApp = angular.module('myApp', []);

myApp.controller("myController", myController);
myApp.controller("formController", formController);
myApp.controller("sales", sales);
myApp.controller("gallery", gallery);

function myController($scope){
    $scope.name = 'Enotishka';
    $scope.menu_list = ['menu1', 'menu2', 'menu3'];
    $scope.image_menu = [
        {text: 'this is first text'},
        {text: 'this is first text'},
        {text: 'this is first text'},
        {text: 'this is first text'}
    ]; 
    $scope.obout_company_list = [
        {text: 'this is text', img: ''},
        {text: 'this is text', img: ''},
        {text: 'this is text', img: ''},
        {text: 'this is text', img: ''}
    ];
}

function formController($scope){
    $scope.title = "form controller";
}

function sales($scope){
    $scope.name = "sales";
    $scope.sales = [
        {picture: "sales1.jpg1"},
        {picture: "sales2.jpg1"},
        {picture: "sales3.jpg1"},
        {picture: "sales4.jpg1"},
        {picture: "sales1.jpg1"},
        {picture: "sales2.jpg1"}
    ]
}

function gallery($scope){
    $scope.images = [
        {picture: 'slide1.jpg1'},
        {picture: 'slide2.jpg1'},
        {picture: 'slide3.jpg1'},
        {picture: 'slide4.jpg1'},
        {picture: 'slide1.jpg1'},
        {picture: 'slide1.jpg1'}
    ]
}
