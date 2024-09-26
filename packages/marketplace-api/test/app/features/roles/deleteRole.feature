Feature: Delete an existing role
  In order to remove unnecessary roles
  As an administrator
  I want to delete an existing role

  Scenario: Delete role with valid ID
    Given I send a DELETE request to "/v1/roles/38d436a9-f512-4e95-b871-553bab740e3a"
    Then the response status code should be 200
    And the response should be:
      """
      {
        "succesed": true,
        "code": 200,
        "status_code": "OK",
        "message": "Role deleted successfully"
      }
      """

  Scenario: Delete role with invalid ID
    Given I send a DELETE request to "/v1/roles/invalid-id"
    Then the response status code should be 422
