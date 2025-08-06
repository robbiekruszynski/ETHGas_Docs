import React from "react";
import BaseChefAI from "@cookbookdev/docsbot/react";

// For now, we'll use a placeholder. In production, this should be set via environment variables
const COOKBOOK_PUBLIC_API_KEY = "your_api_key_here";

export default function ChefAI(props) {
  // Only render if we have an API key
  if (!COOKBOOK_PUBLIC_API_KEY || COOKBOOK_PUBLIC_API_KEY === "your_api_key_here") {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        <p>ChefAI component requires API key configuration.</p>
        <p>Please set your Cookbook API key in the environment variables.</p>
      </div>
    );
  }

  return <BaseChefAI apiKey={COOKBOOK_PUBLIC_API_KEY} />;
} 