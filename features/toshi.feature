Feature:

  As cucumber tester
  I want to test response

  Background:
    * I send request to "https://bitcoin.toshi.io/api/v0"
    * I send and accept JSON

  Scenario: Test response status
    When I send a GET request to "/toshi.json"
    Then the response status should be "200"
    And the JSON schema should be:
      """
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "peers": {
            "type": "object",
            "properties": {
              "available": {
                "type": "integer"
              },
              "connected": {
                "type": "integer"
              }
            },
            "required": [
              "available",
              "connected"
            ]
          },
          "database": {
            "type": "object",
            "properties": {
              "size": {
                "type": "string"
              }
            },
            "required": [
              "size"
            ]
          },
          "transactions": {
            "type": "object",
            "properties": {
              "count": {
                "type": "integer"
              },
              "unconfirmed_count": {
                "type": "integer"
              }
            },
            "required": [
              "count",
              "unconfirmed_count"
            ]
          },
          "blocks": {
            "type": "object",
            "properties": {
              "main_count": {
                "type": "integer"
              },
              "side_count": {
                "type": "integer"
              },
              "orphan_count": {
                "type": "integer"
              }
            },
            "required": [
              "main_count",
              "side_count",
              "orphan_count"
            ]
          },
          "status": {
            "type": "string"
          }
        },
        "required": [
          "peers",
          "database",
          "transactions",
          "blocks",
          "status"
        ]
      }
      """
