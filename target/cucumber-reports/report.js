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
    },
    {
      "cells": [
        "Valli",
        "",
        "Ghul",
        "",
        "2234567890",
        "",
        "sanvi02@gmail.com",
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
        "Temp@456",
        "",
        "Temp@456"
      ],
      "line": 17,
      "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;;3"
    },
    {
      "cells": [
        "Adi",
        "",
        "Gar",
        "",
        "3234567890",
        "",
        "sanvi03@gmail.com",
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
        "Temp@789",
        "",
        "Temp@789"
      ],
      "line": 18,
      "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;;4"
    }
  ],
  "keyword": "Examples"
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
  "duration": 498463463,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Register_link()"
});
formatter.result({
  "duration": 68827,
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
  "duration": 4143518,
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
  "duration": 584428,
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
  "duration": 169653,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 70638,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_is_registered()"
});
formatter.result({
  "duration": 70035,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Register User TC01",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;;3",
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
  "name": "User enter Contact Information  \"Valli\" \"Ghul\" \"2234567890\"\"sanvi02@gmail.com\"",
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
  "name": "User enter User Information  \"Sanvi02\"\"Temp@456\"\"Temp@456\"",
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
  "duration": 1008258,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Register_link()"
});
formatter.result({
  "duration": 126183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valli",
      "offset": 33
    },
    {
      "val": "Ghul",
      "offset": 41
    },
    {
      "val": "2234567890",
      "offset": 48
    },
    {
      "val": "sanvi02@gmail.com",
      "offset": 60
    }
  ],
  "location": "StepDefs.user_enter_contact_Information(String,String,String,String)"
});
formatter.result({
  "duration": 222179,
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
  "duration": 191991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanvi02",
      "offset": 30
    },
    {
      "val": "Temp@456",
      "offset": 39
    },
    {
      "val": "Temp@456",
      "offset": 49
    }
  ],
  "location": "StepDefs.user_enter_User_Information(String,String,String)"
});
formatter.result({
  "duration": 455829,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 316363,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_is_registered()"
});
formatter.result({
  "duration": 323608,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Register User TC01",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc01;;4",
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
  "name": "User enter Contact Information  \"Adi\" \"Gar\" \"3234567890\"\"sanvi03@gmail.com\"",
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
  "name": "User enter User Information  \"Sanvi02\"\"Temp@789\"\"Temp@789\"",
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
  "duration": 100222,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Register_link()"
});
formatter.result({
  "duration": 143692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adi",
      "offset": 33
    },
    {
      "val": "Gar",
      "offset": 39
    },
    {
      "val": "3234567890",
      "offset": 45
    },
    {
      "val": "sanvi03@gmail.com",
      "offset": 57
    }
  ],
  "location": "StepDefs.user_enter_contact_Information(String,String,String,String)"
});
formatter.result({
  "duration": 265045,
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
  "duration": 1337300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanvi02",
      "offset": 30
    },
    {
      "val": "Temp@789",
      "offset": 39
    },
    {
      "val": "Temp@789",
      "offset": 49
    }
  ],
  "location": "StepDefs.user_enter_User_Information(String,String,String)"
});
formatter.result({
  "duration": 211916,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 77280,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_is_registered()"
});
formatter.result({
  "duration": 354399,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Register User TC02",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc02",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter Contact Information  \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cPhone\u003e\"\"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter Mailing Information  \"\u003cAddress\u003e\"\"\u003cCity\u003e\"\"\u003cState\u003e\"\"\u003cPostalCode\u003e\"\"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enter User Information  \"\u003cUserName\u003e\"\"\u003cPassword\u003e\"\"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User is registered",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc02;",
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
      "line": 33,
      "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc02;;1"
    },
    {
      "cells": [
        "Amar",
        "",
        "Dahi",
        "",
        "1234567890",
        "",
        "Amar123@gmail.com",
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
      "line": 34,
      "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc02;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Register User TC02",
  "description": "",
  "id": "register-user-on-http://newtours.demoaut.com/;register-user-tc02;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User clicks on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter Contact Information  \"Amar\" \"Dahi\" \"1234567890\"\"Amar123@gmail.com\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
  "line": 27,
  "name": "User enter User Information  \"Sanvi02\"\"Temp@123\"\"Temp@123\"",
  "matchedColumns": [
    18,
    20,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User is registered",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 566315,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Register_link()"
});
formatter.result({
  "duration": 121353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amar",
      "offset": 33
    },
    {
      "val": "Dahi",
      "offset": 40
    },
    {
      "val": "1234567890",
      "offset": 47
    },
    {
      "val": "Amar123@gmail.com",
      "offset": 59
    }
  ],
  "location": "StepDefs.user_enter_contact_Information(String,String,String,String)"
});
formatter.result({
  "duration": 454621,
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
  "duration": 191388,
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
  "duration": 159390,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 59771,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_is_registered()"
});
formatter.result({
  "duration": 68827,
  "status": "passed"
});
});