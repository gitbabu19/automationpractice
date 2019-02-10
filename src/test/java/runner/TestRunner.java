package runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import com.cucumber.listener.Reporter;
import org.junit.runner.RunWith;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import utils.Config;

import java.io.*;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        glue= {"steps"},
        tags={"@Smoke"},
        plugin= { "pretty","html:target/cucumber-reports","json:target/cucumber-reports/Cucumber.json",
        "junit:target/cucumber-reports/Cucumber.xml",
        "com.cucumber.listener.ExtentCucumberFormatter:output/report.html"},
        monochrome=false
)
public class TestRunner {


    @BeforeClass
    public static void setup() {


    }
    @AfterClass
    public static void writeExtentReport() {
        Config objConfig=new Config();

        Reporter.loadXMLConfig(new File(objConfig.getProperty("reportConfigPath")));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", "Mac OSX");
        Reporter.setTestRunnerOutput("Sample test runner output message");}

}