var app = angular.module('app', ['ngRoute','pascalprecht.translate']);

app.config(['$routeProvider','$translateProvider', function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      })
      .when('/physics', {
        templateUrl: 'physics.html'
      })
      .otherwise({redirectTo:'/'});


    var translationsEN = {
      GEN_TITLE: 'Exact sciences',
      BUTTON_LANG_EN: 'English',
      BUTTON_LANG_RU: 'Russian',
      CHEMESTRY: 'Chemestry',
      PHYSICS: 'Physics',
      SEC_TITLE: 'Chemestry',
      PARAGRAPH1: 'Chemistry is the scientific study of the properties and behavior of matter.[1] It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.[2][3][4][5] In the scope of its subject, chemistry occupies an intermediate position between physics and biology.[6] It is sometimes called the central science because it provides a foundation for understanding both basic and applied scientific disciplines at a fundamental level.[7] For example, chemistry explains aspects of plant chemistry (botany), the formation of igneous rocks (geology), how atmospheric ozone is formed and how environmental pollutants are degraded (ecology), the properties of the soil on the moon (cosmochemistry), how medications work (pharmacology), and how to collect DNA evidence at a crime scene (forensics).Chemistry addresses topics such as how atoms and molecules interact via chemical bonds to form new chemical compounds. There are two types of chemical bonds: 1. primary chemical bonds e.g covalent bonds, in which atoms share one or more electron(s); ionic bonds, in which an atom donates one or more electrons to another atom to produce ions (cations and anions); metallic bonds and 2. secondary chemical bonds e.g. hydrogen bonds; Van der Waals force bonds, ion-ion interaction, ion-dipole interaction etc.'
      };
    var translationsRU = {
      GEN_TITLE: 'Точные науки',
      BUTTON_LANG_EN: 'Англ',
      BUTTON_LANG_RU: 'Русский',
      CHEMESTRY: 'Химия',
      PHYSICS: 'Физика',
      SEC_TITLE: 'Химия',
      PARAGRAPH1: 'Хи́мия (от араб. کيمياء, произошедшего, предположительно, от египетского слова Кемет (транслит. егип. Kmt) (чёрный), откуда возникло также название Египта, чернозёма и свинца — Та-Кемет — «чёрная земля» (егип. tA-kmt)[1][2][3]; другие возможные варианты: др.-греч. χυμος — „сок“, „эссенция“, „влага“, „вкус“, др.-греч. χυμα — „сплав (металлов)“, „литьё“, „поток“, др.-греч. χυμευσις — „смешивание“) — одна из важнейших и обширных областей естествознания, наука, изучающая вещества, также их состав и строение, их свойства, зависящие от состава и строения, их превращения, ведущие к изменению состава — химические реакции, а также законы и закономерности, которым эти превращения подчиняются. Поскольку все вещества состоят из атомов, которые благодаря химическим связям способны формировать молекулы, то химия занимается, прежде всего, рассмотрением перечисленных выше задач на атомно-молекулярном уровне, то есть на уровне химических элементов и их соединений. Химия имеет немало связей с физикой и биологией, по сути граница между ними условна[4], а пограничные области изучаются квантовой химией, химической физикой, физической химией, геохимией, биохимией и другими науками. Является точной наукой.'
      };
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('ru', translationsRU);
    $translateProvider.fallbackLanguage('en');
    $translateProvider.preferredLanguage('ru');
   
}]);
  
  app.controller('homeCtrl', ['$scope', '$location', '$translate', function ($scope, $location, $translate) {
    console.log('HomeCtrl'); 

    $scope.openPhy = function() {
      $location.path('/physics');
    };
  
    $scope.changeLang = function(e) {
      // debugger;
      var langKey = 'ru';
      if (e.target.checked === true) {  
        langKey = 'ru';
      } else {
        langKey = 'en';
      }
      $translate.use(langKey);
      
    };
    
  }]);

 

//Modal 
app.controller('mainCtrl', function($scope) {

  $scope.dialog = function() {
    $scope.popUpDialogContent = 'Желаете оставить отзыв?';
    $scope.showPopUpDialog = true;
    $scope.name = '';
    $scope.email = '';
    $scope.myText = '50';
  };
});

app.directive('popUpDialog', function(){
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'modal.html',
    controller: function($scope) {
      $scope.showPopUpDialog = false;
      $scope.closePopUpDialog = function() {
      $scope.showPopUpDialog = false;
      };
      $scope.popUpDialogApprove = function() {
      $scope.showPopUpDialog = false;
      };
    }
  };
});



  



