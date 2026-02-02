// src/services/googleAppsScript.js

/**
 * Service to post data to a Google Apps Script Web App.
 *
 * @param {Object} data - The data to send { name, email, message, source }
 * @returns {Promise<Object>} - The response from the script
 */
export const postToGoogleSheet = async (data) => {
  // Deployed Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBjPBQ57zJVtFXFDBRgCbxVDo-M2PiYhziQXapjHV9ABMBlMFFvRaPW-N8YaUj2jjV/exec';

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for GAS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    // With no-cors, we can't read the response, so we assume success if no error thrown
    return { success: true };
  } catch (error) {
    console.error('Error posting to GAS', error);
    return { success: false, error };
  }
};
