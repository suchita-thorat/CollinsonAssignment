Feature: Validate Bike API

Background: 
    Given I Set GET Bike api endpoint
	When I Set request HEADER
    
@PositiveTest
 Scenario: Get Bike information
    And Send a GET HTTP request 
	Then I receive valid Response Code 200
	And Response BODY is non-empty

@PositiveTest
 Scenario Outline: Get Country and latitude,longitude of requested city 
 	And Send a GET HTTP request 
	And search response body for city <cityName>
	Then It should be in Country <countryName>
	And I get their corresponding <latitude> and <longitude> in response 
Examples: 
| cityName  | countryName | latitude | longitude |
| Frankfurt |  DE         | 50.1072  | 8.66375   |
| Moscow    |  RU         | 55.75    | 37.616667 |


@NegativeTest
 Scenario: Try to get Country of non listed city 
    And Send a GET HTTP request 
	And search response body for non listed city "Mumbai" 
	Then no Country returned

@PositiveTest
 Scenario: Field Filtering in GET request
    And Send a GET HTTP request with query paramters for filtering
	Then I receive only requested fields in response
	
	
		