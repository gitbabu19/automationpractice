$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register User on http://newtours.demoaut.com/",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Register User TC01",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter Contact Information  \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cPhone\u003e\"\"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter Mailing Information  \"\u003cAddress\u003e\"\"\u003cCity\u003e\"\"\u003cState\u003e\"\"\u003cPostalCode\u003e\"\"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter User Information  \"\u003cUserName\u003e\"\"\u003cPassword\u003e\"\"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is registered",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "",
        "LastName",
        "",
        "Phone",
        "",
        "Email",
        "",
        "Address",
        "",
        "City",
        "",
        "State",
        "",
        "PostalCode",
        "",
        "Country",
        "",
        "UserName",
        "",
        "Password",
        "",
        "ConfirmPassword"
      ],
      "line": 15,
      "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;;1"
    },
    {
      "cells": [
        "Sanvi",
        "",
        "Dahi",
        "",
        "1234567890",
        "",
        "sanvi01@gmail.com",
        "",
        "Pune",
        "",
        "Pune",
        "",
        "MH",
        "",
        "411057",
        "",
        "INDIA",
        "",
        "Sanvi02",
        "",
        "Temp@123",
        "",
        "Temp@123"
      ],
      "line": 16,
      "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44266792327,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Register User TC01",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter Contact Information  \"Sanvi\" \"Dahi\" \"1234567890\"\"sanvi01@gmail.com\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter Mailing Information  \"Pune\"\"Pune\"\"MH\"\"411057\"\"INDIA\"",
  "matchedColumns": [
    16,
    8,
    10,
    12,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter User Information  \"Sanvi02\"\"Temp@123\"\"Temp@123\"",
  "matchedColumns": [
    18,
    20,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is registered",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 1530500712,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Register_link()"
});
formatter.result({
  "duration": 4628999071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanvi",
      "offset": 33
    },
    {
      "val": "Dahi",
      "offset": 41
    },
    {
      "val": "1234567890",
      "offset": 48
    },
    {
      "val": "sanvi01@gmail.com",
      "offset": 60
    }
  ],
  "location": "StepDefs.user_enter_contact_Information(String,String,String,String)"
});
formatter.result({
  "duration": 3601384876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 33
    },
    {
      "val": "Pune",
      "offset": 39
    },
    {
      "val": "MH",
      "offset": 45
    },
    {
      "val": "411057",
      "offset": 49
    },
    {
      "val": "INDIA",
      "offset": 57
    }
  ],
  "location": "StepDefs.user_enter_Mailing_Information(String,String,String,String,String)"
});
formatter.result({
  "duration": 1114370274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanvi02",
      "offset": 30
    },
    {
      "val": "Temp@123",
      "offset": 39
    },
    {
      "val": "Temp@123",
      "offset": 49
    }
  ],
  "location": "StepDefs.user_enter_User_Information(String,String,String)"
});
formatter.result({
  "duration": 546491564,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2732418576,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_is_registered()"
});
formatter.result({
  "duration": 497268043,
  "status": "passed"
});
formatter.after({
  "duration": 2529957339,
  "status": "passed"
});
});