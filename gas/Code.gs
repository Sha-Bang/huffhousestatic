// gas/Code.gs

/**
 * Google Apps Script to handle form submissions from the Huff House static site.
 *
 * Managed via Clasp.
 * See README.md for deployment instructions.
 */

function doPost(e) {
  try {
    // Parse the incoming JSON data
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

function setup() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(["Timestamp", "Name", "Email", "Message", "Source"]);
}
