Feature: Get a role by ID
  In order to retrieve role information
  As an administrator
  I want to get a role's details by ID

  Scenario: Get role with valid ID
    Given I send a GET request to "/v1/roles/38d436a9-f512-4e95-b871-553bab740e3a"
    Then the response status code should be 200
    And the response should be:
      """
      {
        "succesed": true,
        "code": 200,
        "status_code": "OK",
        "data": {
          "id": "38d436a9-f512-4e95-b871-553bab740e3a",
          "name": "Test Role",
          "state": "Active"
        }
      }
      """

  Scenario: Get role with invalid ID
    Given I send a GET request to "/v1/roles/invalid-id"
    Then the response status code should be 422
