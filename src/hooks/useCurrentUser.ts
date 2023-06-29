import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../configs/firebase";
import { useNavigate } from "react-router-dom";

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return navigate("/login");
      setUser(user);
    });

    return () => unsubscribe();
  }, [navigate]);

  return { user };
};
