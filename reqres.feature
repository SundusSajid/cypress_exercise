
@api
Feature: API Test
  As a QE
  I want to verify test scenarios on the website are working
  So that the user can work properly and access all the features


Background:
Given I visit "https://reqres.in/"

@list-users
Scenario: List Users
    Given I call the list users API
    Then the users API should return a 200 status code
    And the users API should show 12 users in the list
    And the first user name should be "Michael"


Scenario: GET single user details
    Given I make a GET request to "/api/users/2"
    Then the response status should be 200
    And the response JSON should have property "data"
    And the response JSON property "data" should have property "email"
    And the response JSON property "data" should have property "first_name"


Scenario: Verify if a user is not populated
    Given I make a GET request to "/api/users/23"
    Then the users API should return a 404 status code


Scenario:Verify all resources are listed
    Given I make a GET request to "/api/unknown"
    Then the users API should return a 200 status code

Scenario:Verify a resource is listed
    Given I make a GET request to "/api/unknown/2"
    Then the users API should return a 200 status code

Scenario: Verify if a resource is not found
    Given I make a GET request to "/api/unknown/23"
    Then the users API should return a 200 status code


Scenario:Verify a resource is listed
    Given I make a GET request to "/api/unknown/2"
    Then the users API should return a 200 status code

