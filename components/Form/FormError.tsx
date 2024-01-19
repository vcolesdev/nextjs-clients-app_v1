import React from "react";

export function FormError({
  errorClasses,
  errorLabel
}: {
  errorClasses?: string;
  errorLabel: string;
}) {
  return (
    <div
      className={`form--error flex flex-shrink-0 items-center ${errorClasses}`}
      role="alert"
    >
      <div className="inline-block mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="inilne-block">{errorLabel} is required</p>
    </div>
  );
}
