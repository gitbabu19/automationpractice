package runner;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import com.cucumber.listener.ExtentCucumberFormatter;
import java.io.*;
import utils.FileReaderManager;

import java.time.LocalDateTime;
import java.util.Properties;



@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        glue= {"steps"},
        tags={"@Smoke"},
        plugin= { "pretty","html:target/cucumber-reports","json:target/cucumber-reports/Cucumber.json",
        "junit:target/cucumber-reports/Cucumber.xml",
        "com.cucumber.listener.ExtentCucumberFormatter:output/myreport.html"},
        monochrome=false
)
public class TestRunner {


    @BeforeClass
    public static void setup() {
        String timestamp=LocalDateTime.now().toString();
         ExtentProperties extentProperties = ExtentProperties.INSTANCE;
        extentProperties.setReportPath("output/myreport_"+timestamp+".html");
    }
    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
        Reporter.setSystemInfo("User Name", "Amar Dahifale");
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
        Reporter.setSystemInfo("Selenium", "3.7.0");
        Reporter.setSystemInfo("Maven", "3.5.2");
        Reporter.setSystemInfo("Java Version", "1.8.0_151");
        Reporter.assignAuthor("Amar Dahifale");
    }
}