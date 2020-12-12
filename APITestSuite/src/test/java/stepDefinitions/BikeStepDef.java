package stepDefinitions;

import org.junit.Assert;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import org.json.JSONArray;
import org.json.JSONObject;

public class BikeStepDef {

	RequestSpecification httpRequest;
	Response response;
	JsonPath jsonPathEvaluator;
	ResponseBody responseBody;
	String ExtractedCountry;
	double ExtractedLatitude;
	double ExtractedLongitude;

	@Given("^I Set GET Bike api endpoint$")
	public void i_Set_GET_Bike_api_endpoint() {
		// Specify the base URL to the RESTful web service
		RestAssured.baseURI = "http://api.citybik.es/v2";
	}

	@When("^I Set request HEADER$")
	public void i_Set_request_HEADER() {
		// Get the RequestSpecification of the request
		httpRequest = RestAssured.given();
	}

	@When("^Send a GET HTTP request$")
	public void send_a_GET_HTTP_request() {
		// Make a request to the server by specifying the method Type and the method
		// URL.
		// This will return the Response from the server. Store the response in a
		// variable.
		response = httpRequest.request(Method.GET, "/networks");
	}

	// passed expected response code as parameter
	@Then("^I receive valid Response Code (\\d+)$")
	public void i_receive_valid_Response_Code(int arg1) {
		int statusCode = response.getStatusCode();
		// Assertion for 200 response code
		Assert.assertEquals(statusCode, arg1);
	}

	@Then("^Response BODY is non-empty$")
	public void response_BODY_is_non_empty() {
		String responseBody = response.getBody().asString();
		Assert.assertTrue(!responseBody.isEmpty());
	}

	@And("^search response body for city (.+)$")
	public void search_response_body_for_city(String cityname) {
		int statusCode = response.getStatusCode();
		// Assertion for 200 response code
		Assert.assertEquals(statusCode, 200);
		responseBody = response.getBody();

		JSONObject jsonObject = new JSONObject(responseBody.asString());
		JSONArray jsonArray = jsonObject.getJSONArray("networks");
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject json = jsonArray.getJSONObject(i);
			JSONObject locationJson = json.getJSONObject("location");
			String ExtractedCity = locationJson.getString("city");
			if (ExtractedCity.equalsIgnoreCase(cityname))
			{
			  ExtractedCountry = locationJson.getString("country");
			  ExtractedLatitude = locationJson.getDouble("latitude");
			  ExtractedLongitude = locationJson.getDouble("longitude");
			}
		}
	}

	@Then("^It should be in Country (.+)$")
	public void it_should_be_in_country(String countryname) {
		// Validate the country name
		Assert.assertEquals(countryname, ExtractedCountry);
		
	}

    @And("^I get their corresponding (.+) and (.+) in response$")
    public void i_get_their_corresponding_and_in_response(String latitude, String longitude) {
		Assert.assertEquals(latitude, Double.toString(ExtractedLatitude));
		Assert.assertEquals(longitude, Double.toString(ExtractedLongitude));
	}

    @When("^search response body for non listed city \"([^\"]*)\"$")
    public void search_response_body_for_non_listed_city(String arg1) {
		int statusCode = response.getStatusCode();
		// Assertion for 200 response code
		Assert.assertEquals(statusCode, 200);
		responseBody = response.getBody();

		JSONObject jsonObject = new JSONObject(responseBody.asString());
		JSONArray jsonArray = jsonObject.getJSONArray("networks");
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject json = jsonArray.getJSONObject(i);
			JSONObject locationJson = json.getJSONObject("location");
			String ExtractedCity = locationJson.getString("city");
			if (ExtractedCity.equalsIgnoreCase(arg1))
			{
			  ExtractedCountry = locationJson.getString("country");
			  ExtractedLatitude = locationJson.getDouble("latitude");
			  ExtractedLongitude = locationJson.getDouble("longitude");
			}
		}
    }
 
    @Then("^no Country returned$")
    public void no_Country_returned() {
        // Assertion for null country if non listed city Mumbai searched
    	if (ExtractedCountry == null)
    		Assert.assertTrue(true);
    	else
    		Assert.assertTrue(false);
    }
    
}
