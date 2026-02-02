import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Service to post contact form data to Cloud Firestore.
 *
 * @param {Object} data - The data to send { name, email, message, source }
 * @returns {Promise<Object>} - The result object { success: boolean, error?: any }
 */
export const submitContactForm = async (data) => {
  try {
    await addDoc(collection(db, "messages"), {
      ...data,
      timestamp: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error("Error writing to Firestore:", error);
    return { success: false, error };
  }
};
