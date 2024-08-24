Feature: Update an existing role
  In order to manage user permissions effectively
  As an administrator
  I want to update an existing role

  Scenario: Update role with valid information
    Given I send a PUT request to "/v1/roles/38d436a9-f512-4e95-b871-553bab740e3a" with body:
      """
      {
        "name": "Updated Role Name",
        "state": "Active"
      }
      """
    Then the response status code should be 200
    And the response should be:
      """
      {
        "succesed": true,
        "code": 200,
        "status_code": "OK"
      }
      """

  Scenario: Update role with invalid information
    Given I send a PUT request to "/v1/roles/38d436a9-f512-4e95-b871-553bab740e3a" with body:
      """
      {
        "name": 123,
        "state": "Active"
      }
      """
    Then the response status code should be 422
