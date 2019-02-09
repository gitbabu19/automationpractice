Feature: Register User on http://newtours.demoaut.com/
  @Smoke
  Scenario Outline: Register User TC01

    Given User is on Home Page
    When User clicks on Register link
    And User enter Contact Information  "<FirstName>" "<LastName>" "<Phone>""<Email>"
    And User enter Mailing Information  "<Address>""<City>""<State>""<PostalCode>""<Country>"
    And User enter User Information  "<UserName>""<Password>""<ConfirmPassword>"
    Then User clicks on Submit button
    Then User is registered

    Examples:

      |FirstName||LastName||Phone||Email||Address||City||State||PostalCode||Country||UserName||Password||ConfirmPassword|
      |Sanvi||Dahi||1234567890||sanvi01@gmail.com||Pune||Pune||MH||411057||INDIA||Sanvi02||Temp@123||Temp@123|
      |Valli||Ghul||2234567890||sanvi02@gmail.com||Pune||Pune||MH||411057||INDIA||Sanvi02||Temp@456||Temp@456|
      |Adi||Gar||3234567890||sanvi03@gmail.com||Pune||Pune||MH||411057||INDIA||Sanvi02||Temp@789||Temp@789|

  @Smoke
  Scenario Outline: Register User TC02

    Given User is on Home Page
    When User clicks on Register link
    And User enter Contact Information  "<FirstName>" "<LastName>" "<Phone>""<Email>"
    And User enter Mailing Information  "<Address>""<City>""<State>""<PostalCode>""<Country>"
    And User enter User Information  "<UserName>""<Password>""<ConfirmPassword>"
    Then User clicks on Submit button
    Then User is registered

    Examples:

      |FirstName||LastName||Phone||Email||Address||City||State||PostalCode||Country||UserName||Password||ConfirmPassword|
      |Amar||Dahi||1234567890||Amar123@gmail.com||Pune||Pune||MH||411057||INDIA||Sanvi02||Temp@123||Temp@123|
