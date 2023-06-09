import { useCallback, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../configs/firebase"; // Import your Firebase instance
import { FirebaseError } from "firebase/app";

export const useCreateDocument = <T>(collectionPath: string) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createDocument = useCallback(
    async (data: T & { id: string }) => {
      setIsCreating(true);
      setError(null);

      try {
        await setDoc(doc(db, collectionPath, data.id), {
          ...data,
        });
      } catch (error) {
        setError((error as FirebaseError).code);
      } finally {
        setIsCreating(false);
      }
    },
    [collectionPath]
  );

  return { isCreating, error, createDocument };
};
