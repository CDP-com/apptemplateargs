//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 1;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "apptemplateargs";				// This app's name / folder name which must be unique
var apptitle = "App Template with Arguments";			// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/app-template-with-arguments/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 3;                            // This is the number of buttons on the App Home tab in main.html

// Setup for Button0 (The First Button)
var btn0_Title = "Say Something";		// This is what is displayed on the button.
var btn0_MouseOver = "Clicking this button will return your select arguments in a pop-up.";	// This is what appears upon mouseover for the button.
var btn0_Description = "This button demonstrates a simple use of passing arguments to your script.  Whatever you select as your options to the left will be written to an XML file in the app's folder.  The script then parses this data and returns the results of what you chose.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Why = "Run this button to see the end results of the options you chose.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "displaymessage0.js";	// This is the actual script the button will be calling.
var btn0_Source = "displaymessage0.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Button0 Arguments
var btn0_arguments=2; 						// Must specify if your button has any arguments, even if its 0 (zero) 
var btn0_arguments0DisplayName = "Greeting";	// The name of your argument option which is displayed to the user
var btn0_arguments0xmlName= "greeting";		// The section name which for your argument in the xml file and which should be all one word
var btn0_arguments0Values = ["Hello","Goodbye"];	// The values for this argument, which are in an array
var btn0_arguments0Default = ["Hello"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments0Type = "radio";			// The type of input to display your argument.  Currently supporting "checkbox" and "radio"
var btn0_arguments1DisplayName = "Object";	// The name of your argument option which is displayed to the user
var btn0_arguments1xmlName= "object";		// The section name which for your argument in the xml file
var btn0_arguments1Values = ["World","Moon","Sun"];	// The values for this argument, which are in an array
var btn0_arguments1Default = ["World"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments1Type = "radio";			// The type of input to display your argument.  Currently supporting "checkbox" and "radio"

// Permissions for Button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn0( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		// This function executes your script.  Do not edit this line
}




// Setup for Button1 (The Second Button)
var btn1_Title = "Tell Us About Yourself";		// This is what is displayed on the button.
var btn1_MouseOver = "Select a variety of options and see how the button parses the information.";	// This is what appears upon mouseover for the button.
var btn1_Description = "This button writes and returns a more complicated set of arguments.  Based upon the conditions you choose, selected pop-ups will appear. ";		// This is what is displayed as the description of the button.
var btn1_Why = "Run this button to see how more complicated arguments are passed to a given script.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Command = "displaymessage1.js";	// This is the actual script the button will be calling.
var btn1_Source = "displaymessage1.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn1_id="btn1";							// The unique ID of the button.  Please follow the format provided.

// Button1 Arguments
var btn1_arguments=2;						// Must specify if your button has any arguments, even if its 0 (zero)  
var btn1_arguments0DisplayName = "What vehicle do you use?";	// The name of your argument option which is displayed to the user
var btn1_arguments0xmlName= "YourVehicle";	// The section name which for your argument in the xml file and which should be all one word
var btn1_arguments0Values = ["Bike","Car","Truck","Golf Cart"];	// The values for this argument, which are in an array
var btn1_arguments0Default = ["Car","Truck"];	// The default value which is selected upon page load and before the button is ever run
var btn1_arguments0Type = "checkbox";		// The type of input to display your argument.  Currently supporting "checkbox" and "radio"
var btn1_arguments1DisplayName = "What's your favorite color?";	// The name of your argument option which is displayed to the user
var btn1_arguments1xmlName= "FavoriteColor";	// The section name which for your argument in the xml file and which should be all one word
var btn1_arguments1Values = ["Blue","Red","Green","Brown","Other"];	// The values for this argument, which are in an array
var btn1_arguments1Default = ["Blue"];		// The default value which is selected upon page load and before the button is ever run
var btn1_arguments1Type = "radio";			// The type of input to display your argument.  Currently supporting "checkbox" and "radio"

// Permissions for Button1 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn1_KeyValue="button1"; 				// Key value name for the registry
var btn1_DefaultEnableButton=1;
var btn1_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn1_DefaultAllowUser=1;
var btn1_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn1_DefaultCaution=1;
var btn1_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button1
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn1_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn1_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn1_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn1( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}




// Setup for Button2 (The Third Button)
var btn2_Title = "Run a Simple Button";		// This is what is displayed on the button.
var btn2_MouseOver = "Run a Simple Button without Any Arguments";	// This is what appears upon mouseover for the button.
var btn2_Description = "This button merely demonstrates that a button does not have to have arguments.  Further, you can include simple buttons with ones that pass arguments all on a given page.";		// This is what is displayed as the description of the button.
var btn2_Why = "Run this button to see how a simple button without arguments works.";		// Use this to explain to an end user why they would want to run this button.
var btn2_Command = "displaymessage2.js";	// This is the actual script the button will be calling.
var btn2_Source = "displaymessage2.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn2_id="btn2";							// The unique ID of the button.  Please follow the format provided.

// Button2 Arguments
var btn2_arguments=0;						// Must specify if your button has any arguments, even if its 0 (zero)  
var btn2_arguments0DisplayName = "";		// The name of your argument option which is displayed to the user
var btn2_arguments0xmlName= "";				// The section name which for your argument in the xml file and which should be all one word
var btn2_arguments0Values = ["",""];		// The values for this argument, which are in an array
var btn2_arguments0Default = [""];			// The default value which is selected upon page load and before the button is ever run
var btn2_arguments0Type = "";				// The type of input to display your argument.  Currently supporting "checkbox" and "radio"

// Permissions for Button2 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn2_KeyValue="button2"; 				// Key value name for the registry
var btn2_DefaultEnableButton=1;
var btn2_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn2_DefaultAllowUser=1;
var btn2_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn2_DefaultCaution=1;
var btn2_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button2
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn2_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn2_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn2_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn2( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}



	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****

