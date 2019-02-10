package steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.lang.*;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import po.RegisterPage;
import utils.Config;
import utils.DriverManager;
public class StepDefs {
    RegisterPage pg;
    WebDriver driver;
    Config cg;


    @Before
    public void beforeScenario(){
        try {
            cg = new Config();
            driver = DriverManager.getLocalWebDriver(cg.getProperty("Browser"));

            System.out.println("This will run before the Scenario");

            String url = cg.getProperty("URL");
            System.out.println("AUT URL :: " + url);
            driver.get(url);
            pg = new RegisterPage(driver);
        }
        catch (Exception e){
            e.printStackTrace();
        }


    }

    @After
    public void afterScenario(){
        System.out.println("This will run after the Scenario");
        try
        {
            DriverManager.closeDriver();
        }
        catch(Exception e){
            e.printStackTrace();
        }

    }

    @Given("^User is on Home Page$")
    public void user_is_on_Home_Page()  {
        System.out.println(" Home Page");

    }

    @When("^User clicks on Register link$")
    public void user_clicks_on_Register_link()  {
        System.out.println("clicks on Register");
        driver.findElement(pg.RegisterLnk).click();
    }




    @Then("^User clicks on Submit button$")
    public void user_clicks_on_Submit_button()  {
        System.out.println("Submit");
        driver.findElement(pg.Submit).click();
    }

    @Then("^User is registered$")
    public void user_is_registered()  {

    String xpath="/html/body/div/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[3]/td/p[2]/font";
    String actual=driver.findElement(By.xpath(xpath)).getText();
        System.out.println("Value::"+actual);
        String expected="Thank you for registering. You may now sign-in using the user name and password you've just entered.";
        Assert.assertEquals(expected,actual);



    }

    @When("^User enter Contact Information  \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_contact_Information(String arg1, String arg2, String arg3, String arg4) throws Throwable {
        System.out.println(arg1+" "+arg2+" "+arg3+"  "+arg4);

        driver.findElement(pg.FirstName).sendKeys(arg1);
        driver.findElement(pg.LastName).sendKeys(arg2);
        driver.findElement(pg.Phone).sendKeys(arg3);
        driver.findElement(pg.Email).sendKeys(arg4);
    }

    @When("^User enter Mailing Information  \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_Mailing_Information(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        System.out.println(arg1+" "+arg2+" "+arg3+"  "+arg4+"  "+arg5);
        driver.findElement(pg.Address).sendKeys(arg1);
        driver.findElement(pg.City).sendKeys(arg2);

        driver.findElement(pg.State).sendKeys(arg3);
        driver.findElement(pg.PostalCode).sendKeys(arg4);
        WebElement e =driver.findElement(pg.Country);
        Select ele=new Select(e) ;
        ele.selectByVisibleText(arg5);

    }

    @When("^User enter User Information  \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_User_Information(String arg1, String arg2, String arg3) throws Throwable {
        System.out.println(arg1+" "+arg2+" "+arg3);

        driver.findElement(pg.UserName).sendKeys(arg1);
        driver.findElement(pg.Pwd).sendKeys(arg2);
        driver.findElement(pg.ConfPwd).sendKeys(arg3);
    }

}
