Feature: Delete an existing user
  In order to remove my account
  As an existing user
  I want to delete my account

  Scenario: Delete user with valid ID
    Given I send a DELETE request to "/v1/users/d7cd6582-7010-48e3-aab4-c1b69d38c513"
    Then the response status code should be 200
    And the response should be:
      """
      {
        "succesed": true,
        "code": 200,
        "status_code": "OK",
        "message": "User deleted successfully"
      }
      """

  Scenario: Delete user with invalid ID
    Given I send a DELETE request to "/v1/users/invalid-id"
    Then the response status code should be 422
