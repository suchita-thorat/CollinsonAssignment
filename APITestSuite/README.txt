
Steps to run tests from command line:
1. Import/download project from Github
2. Open command prompt
3. Go to project path (until the project root directory APITestSuite) 
4. mvn clean test 
e.g. C:\Users\Suchita.Thorat\git\CollinsonAssignment\APITestSuite>mvn test
-------------
OR Run using IDE:
Run Junit runner file TestRunner.java in chosen IDE
------------
Reports:
Cucumber test reports are generated at below path(copy path in browser to view the reports):
userdirectory\APITestSuite\target\cucumber-reports\index.html
e.g C:\Users\Suchita.Thorat\git\CollinsonAssignment\APITestSuite\target\cucumber-reports\index.html
------------
Other Details:
Used tagging, Scenario outline(parameterisation), Background steps in Cucumber feature file
Six scenarios automated for assignment API

Runner File:
Runner is in Junit currently, 
It can be easily converted to TestNG runner (if needed with below steps)(E2E steps till Jenkins integration) -
1) Add cucumber-testng dependency in pom.xml 
2) In TestRunner.java file 
-comment line @RunWith(Cucumber.class)
-change to 
public class TestRunner extends AbstractTestNGCucumberTests {
3) Create testng.xml file and include TestRunner class in it
e.g.
    <classes>
      <class name="runner.TestRunner"/>
    </classes>
4) testng.xml can be integrated further with maven pom 
(by configuring it under maven-surefire-plugin)
5) Any maven project can be integrated to Jenkins 
by configuring git project url and maven goal mvn test








