Feature:

  As cucumber tester
  I want to test response

  Scenario: Test response status
    When I send a GET request to "https://bitcoin.toshi.io/api/v0/toshi.json"
    Then the response status should be "200"
