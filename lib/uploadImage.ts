import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "6470e92850318b3ee7db",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
