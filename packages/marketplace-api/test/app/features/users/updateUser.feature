Feature: Update an existing user
  In order to update my account information
  As an existing user
  I want to update my account details

  Scenario: Update user with valid information
    Given I send a PUT request to "/v1/users/d7cd6582-7010-48e3-aab4-c1b69d38c513" with body:
      """
      {
        "firstname": "test",
        "lastname": "test",
        "email": "test@test.cos",
        "password": "test12345",
        "phone": "1234567898"
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

  Scenario: Update user with invalid information
    Given I send a PUT request to "/v1/users/d7cd6582-7010-48e3-aab4-c1b69d38c513" with body:
      """
      {
        "firstname": 123,
        "lastname": "Lopez",
        "email": "jose.lopez@gmail.com"
      }
      """
    Then the response status code should be 422
