"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e5c96825-3070-49e2-8843-75147c067bd6");
  }, []);

  return null;
};
