import React from "react";
import BaseChefAI from "@cookbookdev/docsbot/react";

const COOKBOOK_PUBLIC_API_KEY = process.env.REACT_APP_COOKBOOK_API_KEY;

export default function ChefAI(props) {
  return <BaseChefAI apiKey={COOKBOOK_PUBLIC_API_KEY} />;
} 