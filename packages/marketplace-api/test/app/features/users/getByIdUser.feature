Feature: Get a user by ID
  In order to retrieve my account information
  As an existing user
  I want to get my account details by user ID

  Scenario: Get user with valid ID
    Given I send a GET request to "/v1/users/d7cd6582-7010-48e3-aab4-c1b69d38c511"
    Then the response status code should be 200
    And the response should be:
      """
      {
        "succesed": true,
        "code": 200,
        "status_code": "OK",
        "data": {
          "id": "d7cd6582-7010-48e3-aab4-c1b69d38c511",
          "firstname": "test",
          "lastname": "test",
          "email": "test@test.com",
          "phone": "1234567898"
        }
      }
      """

  Scenario: Get user with invalid ID
    Given I send a GET request to "/v1/users/invalid-id"
    Then the response status code should be 422
