Feature: Get all roles
  In order to see all roles
  As an administrator
  I want to retrieve the list of all roles

  Scenario: Get all roles
    Given I send a GET request to "/v1/roles"
    Then the response status code should be 200
    And the response should be:
      """
      {
        "succesed": true,
        "code": 200,
        "status_code": "OK",
        "data": [
          {
            "id": "38d436a9-f512-4e95-b871-553bab740e3b",
            "name": "Test",
            "state": "Active"
          },
          {
            "id": "38d436a9-f512-4e95-b871-553bab740e3a",
            "name": "Test Role",
            "state": "Active"
          },
          {
            "id": "38d436a9-f512-4e95-b871-553bab740e7a",
            "name": "Administrador",
            "state": "Active"
          }
        ]
      }
      """
