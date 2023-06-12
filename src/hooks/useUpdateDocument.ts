import { useCallback, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

import { db } from "../configs/firebase";

export const useUpdateDocument = <T>(collectionPath: string) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateDocument = useCallback(
    async (data: T & { id: string }) => {
      setIsUpdating(true);
      setError(null);

      try {
        const { id, ...documentData } = data;
        const documentRef = doc(db, collectionPath, id);

        await updateDoc(documentRef, { ...documentData });
      } catch (error) {
        setError((error as FirebaseError).code);
      } finally {
        setIsUpdating(false);
      }
    },
    [collectionPath]
  );

  return { isUpdating, error, updateDocument };
};
