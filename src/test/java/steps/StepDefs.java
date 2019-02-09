package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.lang.*;


public class StepDefs {

    @Given("^User is on Home Page$")
    public void user_is_on_Home_Page()  {
        System.out.println(" Home Page");
    }

    @When("^User clicks on Register link$")
    public void user_clicks_on_Register_link()  {
        System.out.println("clicks on Register");
    }




    @Then("^User clicks on Submit button$")
    public void user_clicks_on_Submit_button()  {
        System.out.println("Submit");
    }

    @Then("^User is registered$")
    public void user_is_registered()  {
        System.out.println("registered$");
    }

    @When("^User enter Contact Information  \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_contact_Information(String arg1, String arg2, String arg3, String arg4) throws Throwable {
        System.out.println(arg1+" "+arg2+" "+arg3+"  "+arg4);
    }

    @When("^User enter Mailing Information  \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_Mailing_Information(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        System.out.println(arg1+" "+arg2+" "+arg3+"  "+arg4+"  "+arg5);
    }

    @When("^User enter User Information  \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_User_Information(String arg1, String arg2, String arg3) throws Throwable {
        System.out.println(arg1+" "+arg2+" "+arg3);
    }

}
