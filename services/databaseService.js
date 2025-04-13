import { databases } from "./appwrite";

const databaseService = {
  //List Documents
  async listDocuments(dbId, colId) {
    try {
      const response = await databases.listDocuments(dbId, colId);
      return response.documents || [];
    } catch (error) {
      console.error("Error fetching documents:", error.message);
      return error;
    }
  },

  // Create Documents
  async createDocument(dbId, colId, data, id = null) {
    try {
      return await databases.createDocument(dbId, colId, id || undefined, data);
    } catch (error) {
      console.error("Error creating document", error.message);
      return {
        error: error.message,
      };
    }
  },

  // Delete Document
  async deleteDocument(dbId, colId, id) {
    try {
      await databases.deleteDocument(dbId, colId, id);
      return { success: true };
    } catch (error) {
      console.error("Error deleting document", error.message);
      return {
        error: error.message,
      };
    }
  },
};

export default databaseService;
