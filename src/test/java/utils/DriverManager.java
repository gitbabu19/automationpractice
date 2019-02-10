package utils;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class DriverManager {
    public static WebDriver driver;

   public DriverManager()
   {

       System.out.println("Select Browser and Instantiate WebDriver ");

   }
   public static WebDriver getLocalWebDriver(String BrowserType)
   {
       Config objConfig=new Config();
       BrowserType=BrowserType.toUpperCase();
        try {
            switch (BrowserType) {
                case "CHROME":

                    System.setProperty("webdriver.chrome.driver", objConfig.getProperty("ChromeDriverPath"));
                    driver = new ChromeDriver();

                    break;

                case "INTERNETEXPLORER":

                    System.setProperty("webdriver.ie.driver", objConfig.getProperty("IEDriverPath"));
                    driver = new InternetExplorerDriver();
                    break;
            }
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        finally {
            return driver;
        }


   }
   public static void closeDriver()
   {
       driver.close();
       driver.quit();
   }

   public static void setDriverProperties()
   {
       Config objConfig=new Config();
       String timeouts=objConfig.getProperty("implicitlyWait");
       Long l=new Long(timeouts);
       driver.manage().window().maximize();
       driver.manage().timeouts().implicitlyWait(l, TimeUnit.MILLISECONDS);
   }
}