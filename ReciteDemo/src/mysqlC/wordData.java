package mysqlC;
import java.io.IOException;
import java.sql.*;

import com.mysql.cj.xdevapi.RowResult;
import com.mysql.cj.xdevapi.Session;
import com.mysql.cj.xdevapi.SessionFactory;
public class wordData {

    public static Connection conMysql() {
    	Connection con =null;
    	String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/cet4";
        String dbUsername = "root";
        String dbPassword = "123456"; 
    try {
    	Class.forName(driver);
    	con = DriverManager.getConnection(url, dbUsername, dbPassword);
	} catch (Exception e) {
		// TODO: handle exception
	}
      return con;
    }
    public static boolean checkLogin(String username)  {
    	Connection con = conMysql();
    	  try {
    	    // Create a prepared statement to prevent SQL injection attacks
    	    PreparedStatement stmt = con.prepareStatement("SELECT * FROM user WHERE name = ? ");
    	    stmt.setString(1, username);
//    	    stmt.setString(2, password);

    	    // Execute the query
    	    ResultSet rs = stmt.executeQuery();

    	    // Check if a matching user was found
    	    return rs.next();
    	  } catch (SQLException e) {
    	    e.printStackTrace();
    	  } finally {
    	    // Close the connection
    	    try {
    	      con.close();
    	    } catch (SQLException e) {
    	      e.printStackTrace();
    	    }
    	  }

    	  // Return false by default
    	  return false;
    }
}
