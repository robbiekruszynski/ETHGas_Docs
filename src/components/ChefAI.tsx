import React, { useEffect, useState } from "react";
import BaseChefAI from "@cookbookdev/docsbot/react";

const COOKBOOK_PUBLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODhiYjdiNGUyNWM1MzM5MDhiM2Y1N2IiLCJpYXQiOjE3NTM5ODY5OTYsImV4cCI6MjA2OTU2Mjk5Nn0.o0d_aT1zUe08bYcYk1FyjBD9ubcjsLvxwe346ZJT3Qw";

export default function ChefAI(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <BaseChefAI apiKey={COOKBOOK_PUBLIC_API_KEY} />;
} 