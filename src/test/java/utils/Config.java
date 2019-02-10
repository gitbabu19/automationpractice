package utils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class Config {

    private Properties properties;
    private final String propertyFilePath= "src/main/resources/Configuration.properties";


    public Config(){
        BufferedReader reader;
        try {
            reader = new BufferedReader(new FileReader(propertyFilePath));
            properties = new Properties();
            try {
                properties.load(reader);
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
        }
    }
    public String getReportConfigPath(){
        String reportConfigPath = properties.getProperty("reportConfigPath");
        if(reportConfigPath!= null)
            return reportConfigPath;
        else {
            throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");
        }
    }
    public  String getProperty(String strKey)
    {
        String strPropValue;
        if (strKey!=null)
        {
            strPropValue= properties.getProperty(strKey);
            System.out.println("KEY :: "+strKey+"  FOUND in properties file, VALUE is :: "+strPropValue);
        }
        else
        {
            strPropValue=null;
            System.out.println("KEY :: "+strKey+"  FOUND in properties file");
        }
        return  strPropValue;
    }

}

