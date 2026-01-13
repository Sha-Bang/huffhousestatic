// gas/Code.gs

/**
 * Google Apps Script to handle form submissions from the Huff House static site.
 *
 * Instructions:
 * 1. Create a new Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Copy this code into the script editor.
 * 4. Save the project.
 * 5. Deploy > New Deployment > Select type: Web App.
 * 6. Set "Execute as: Me" and "Who has access: Anyone".
 * 7. Deploy and copy the Web App URL.
 * 8. Paste the Web App URL into the React application configuration (src/services/googleAppsScript.js).
 */

function doPost(e) {
  try {
    // Parse the incoming JSON data
    // Note: React 'no-cors' requests send data as text/plain usually, or application/json.
    // If using 'no-cors', the content-type might not be strictly respected, so we parse postData.contents.
    var data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // If the sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Message", "Source"]);
    }

    // Append the data
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.message || "",
      data.source || ""
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error and return failure
    Logger.log(error);
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Setup function to initialize the sheet headers (optional helper)
 */
function setup() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(["Timestamp", "Name", "Email", "Message", "Source"]);
}
