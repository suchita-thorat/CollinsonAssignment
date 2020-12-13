$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bike.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Bike API",
  "description": "",
  "id": "validate-bike-api",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Set GET Bike api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.match({
  "location": "BikeStepDef.i_Set_GET_Bike_api_endpoint()"
});
formatter.result({
  "duration": 1168962671,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.i_Set_request_HEADER()"
});
formatter.result({
  "duration": 302341104,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Get Bike information",
  "description": "",
  "id": "validate-bike-api;get-bike-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@PositiveTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Send a GET HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I receive valid Response Code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Response BODY is non-empty",
  "keyword": "And "
});
formatter.match({
  "location": "BikeStepDef.send_a_GET_HTTP_request()"
});
formatter.result({
  "duration": 3611855341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "BikeStepDef.i_receive_valid_Response_Code(int)"
});
formatter.result({
  "duration": 4174653,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.response_BODY_is_non_empty()"
});
formatter.result({
  "duration": 25802768,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Get Country and latitude,longitude of requested city",
  "description": "",
  "id": "validate-bike-api;get-country-and-latitude,longitude-of-requested-city",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@PositiveTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Send a GET HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "search response body for city \u003ccityName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "It should be in Country \u003ccountryName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I get their corresponding \u003clatitude\u003e and \u003clongitude\u003e in response",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "validate-bike-api;get-country-and-latitude,longitude-of-requested-city;",
  "rows": [
    {
      "cells": [
        "cityName",
        "countryName",
        "latitude",
        "longitude"
      ],
      "line": 20,
      "id": "validate-bike-api;get-country-and-latitude,longitude-of-requested-city;;1"
    },
    {
      "cells": [
        "Frankfurt",
        "DE",
        "50.1072",
        "8.66375"
      ],
      "line": 21,
      "id": "validate-bike-api;get-country-and-latitude,longitude-of-requested-city;;2"
    },
    {
      "cells": [
        "Moscow",
        "RU",
        "55.75",
        "37.616667"
      ],
      "line": 22,
      "id": "validate-bike-api;get-country-and-latitude,longitude-of-requested-city;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Set GET Bike api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.match({
  "location": "BikeStepDef.i_Set_GET_Bike_api_endpoint()"
});
formatter.result({
  "duration": 36101,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.i_Set_request_HEADER()"
});
formatter.result({
  "duration": 399989,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get Country and latitude,longitude of requested city",
  "description": "",
  "id": "validate-bike-api;get-country-and-latitude,longitude-of-requested-city;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@PositiveTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Send a GET HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "search response body for city Frankfurt",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "It should be in Country DE",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I get their corresponding 50.1072 and 8.66375 in response",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BikeStepDef.send_a_GET_HTTP_request()"
});
formatter.result({
  "duration": 133443252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Frankfurt",
      "offset": 30
    }
  ],
  "location": "BikeStepDef.search_response_body_for_city(String)"
});
formatter.result({
  "duration": 33928079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DE",
      "offset": 24
    }
  ],
  "location": "BikeStepDef.it_should_be_in_country(String)"
});
formatter.result({
  "duration": 85331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50.1072",
      "offset": 26
    },
    {
      "val": "8.66375",
      "offset": 38
    }
  ],
  "location": "BikeStepDef.i_get_their_corresponding_and_in_response(String,String)"
});
formatter.result({
  "duration": 122664,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Set GET Bike api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.match({
  "location": "BikeStepDef.i_Set_GET_Bike_api_endpoint()"
});
formatter.result({
  "duration": 34461,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.i_Set_request_HEADER()"
});
formatter.result({
  "duration": 313017,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Get Country and latitude,longitude of requested city",
  "description": "",
  "id": "validate-bike-api;get-country-and-latitude,longitude-of-requested-city;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@PositiveTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Send a GET HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "search response body for city Moscow",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "It should be in Country RU",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I get their corresponding 55.75 and 37.616667 in response",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BikeStepDef.send_a_GET_HTTP_request()"
});
formatter.result({
  "duration": 156702500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moscow",
      "offset": 30
    }
  ],
  "location": "BikeStepDef.search_response_body_for_city(String)"
});
formatter.result({
  "duration": 13812948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RU",
      "offset": 24
    }
  ],
  "location": "BikeStepDef.it_should_be_in_country(String)"
});
formatter.result({
  "duration": 59895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55.75",
      "offset": 26
    },
    {
      "val": "37.616667",
      "offset": 36
    }
  ],
  "location": "BikeStepDef.i_get_their_corresponding_and_in_response(String,String)"
});
formatter.result({
  "duration": 95587,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Set GET Bike api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.match({
  "location": "BikeStepDef.i_Set_GET_Bike_api_endpoint()"
});
formatter.result({
  "duration": 33640,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.i_Set_request_HEADER()"
});
formatter.result({
  "duration": 297428,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Try to get Country of non listed city",
  "description": "",
  "id": "validate-bike-api;try-to-get-country-of-non-listed-city",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@NegativeTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Send a GET HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "search response body for non listed city \"Mumbai\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "no Country returned",
  "keyword": "Then "
});
formatter.match({
  "location": "BikeStepDef.send_a_GET_HTTP_request()"
});
formatter.result({
  "duration": 139421752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 42
    }
  ],
  "location": "BikeStepDef.search_response_body_for_non_listed_city(String)"
});
formatter.result({
  "duration": 8227463,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.no_Country_returned()"
});
formatter.result({
  "duration": 28717,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Set GET Bike api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.match({
  "location": "BikeStepDef.i_Set_GET_Bike_api_endpoint()"
});
formatter.result({
  "duration": 34461,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.i_Set_request_HEADER()"
});
formatter.result({
  "duration": 270761,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Field Filtering in GET request",
  "description": "",
  "id": "validate-bike-api;field-filtering-in-get-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@PositiveTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Send a GET HTTP request with query paramters for filtering",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I receive only requested fields in response",
  "keyword": "Then "
});
formatter.match({
  "location": "BikeStepDef.send_a_GET_HTTP_request_with_query_paramters_for_filtering()"
});
formatter.result({
  "duration": 997378534,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.i_receive_only_requested_fields_in_response()"
});
formatter.result({
  "duration": 7468099,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Set GET Bike api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.match({
  "location": "BikeStepDef.i_Set_GET_Bike_api_endpoint()"
});
formatter.result({
  "duration": 34050,
  "status": "passed"
});
formatter.match({
  "location": "BikeStepDef.i_Set_request_HEADER()"
});
formatter.result({
  "duration": 260096,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Incorrect URL in GET request",
  "description": "",
  "id": "validate-bike-api;incorrect-url-in-get-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@NegativeTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Send a GET HTTP request with incorrect url",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should receive Not found page with 404 response code",
  "keyword": "Then "
});
formatter.match({
  "location": "BikeStepDef.send_a_GET_HTTP_request_with_incorrect_url()"
});
formatter.result({
  "duration": 33542859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 37
    }
  ],
  "location": "BikeStepDef.i_should_receive_Not_found_page_with_response_code(int)"
});
formatter.result({
  "duration": 207174,
  "status": "passed"
});
});