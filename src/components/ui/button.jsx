import React from "react";
export function Button({ children, asChild = false }) {
  if (asChild) return <div className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl">{children}</div>;
  return <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl">{children}</button>;
}

