'use strict';

describe('home module', function() {

  beforeEach(module('home'));

  describe('home controller', function(){

  	var scope, homeCtrl;

  	beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        homeCtrl = $controller('homeController', {$scope: scope});
    }));

    it('should be defined', inject(function($controller) {
      //spec body
      expect(homeCtrl).toBeDefined();
    }));

    it('should initialize with teacher', inject(function($controller) {
    	expect(scope.currentUser.name).toEqual('teacher@school.org');
    }));

    it('should change the user on user selection', inject(function($controller) {
    	scope.selectedItemChanged({user: {name: 'student@school.org', role: 'student'}});
    	expect(scope.currentUser.name).toEqual('student@school.org');
    }));

    it('should not change the user on settings selection', inject(function($controller) {
    	scope.selectedItemChanged({title: 'Settings'});
    	expect(scope.currentUser.name).toEqual('teacher@school.org');
    }));

  });

  describe('options for dropdown', function(){

  	var scope, homeCtrl;

  	beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        homeCtrl = $controller('homeController', {$scope: scope});
    }));

    it('should contain student, settings and sign out options on initialization ', inject(function($controller) {
    	expect(scope.selectOptions().length).toBe(3);
    	expect(scope.selectOptions()[0].title).toBe('student@school.org');
    	expect(scope.selectOptions()[1].title).toBe('Settings');
    	expect(scope.selectOptions()[2].title).toBe('Sign Out');
    }));

    it('should contain teacher, settings and sign out options on change user to student ', inject(function($controller) {
    	scope.selectedItemChanged({user: {name: 'student@school.org', role: 'student'}});
    	expect(scope.selectOptions().length).toBe(3);
    	expect(scope.selectOptions()[0].title).toBe('teacher@school.org');
    	expect(scope.selectOptions()[1].title).toBe('Settings');
    	expect(scope.selectOptions()[2].title).toBe('Sign Out');
    }));

  });

});