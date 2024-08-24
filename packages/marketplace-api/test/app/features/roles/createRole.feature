Feature: Create a new role
  In order to manage user permissions
  As an administrator
  I want to create a new role

  Scenario: Create a valid new role
    Given I send a POST request to "/v1/roles" with body:
      """
      {
        "id": "38d436a9-f512-4e95-b871-553bab740e3b",
        "name": "Test",
        "state": "Active"
      }
      """
    Then the response status code should be 201
    And the response should be:
      """
      {
        "succesed": true,
        "code": 201,
        "status_code": "Created"
      }
      """

  Scenario: Create an invalid new role
    Given I send a POST request to "/v1/roles" with body:
      """
      {
        "role_state": "Active"
      }
      """
    Then the response status code should be 422
