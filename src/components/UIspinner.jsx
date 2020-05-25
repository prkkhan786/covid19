import React from "react";
export default function UIspinner() {
  return (
    <div
      class="spinner-border text-primary"
      style={{
        textAlign: "center",
        position: "relative",
        top: "50%",
        left: "50%",
      }}
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
