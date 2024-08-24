Feature: Get all users
  In order to see all users
  As an admin
  I want to retrieve the list of all users

  Scenario: Get all users
    Given I send a GET request to "/v1/users"
    Then the response status code should be 200
    And the response should be:
      """
      {
        "succesed": true,
        "code": 200,
        "status_code": "OK",
        "data": [
        {
      "id": "d7cd6582-7010-48e3-aab4-c1b69d38c512",
      "firstname": "Jose Luis",
      "lastname": "Sandoval",
      "email": "docs.huehue@gmail.com",
      "phone": "1234567898"
    },
    {
      "id": "d7cd6582-7010-48e3-aab4-c1b69d38c511",
      "firstname": "test",
      "lastname": "test",
      "email": "test@test.com",
      "phone": "1234567898"
    },
    {
      "id": "d7cd6582-7010-48e3-aab4-c1b69d38c513",
      "firstname": "test",
      "lastname": "test",
      "email": "test@test.cos",
      "phone": "1234567898"
    }
        ]
      }
      """
    
