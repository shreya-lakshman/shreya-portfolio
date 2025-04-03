import React from "react";
export function Card({ children }) {
  return <div className="rounded-2xl shadow p-4 bg-gray-800">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

