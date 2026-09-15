type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

/**
 * Reports a runtime error to the console (and to `window.onerror` listeners
 * via a thrown async error) so it shows up in your error monitoring tool of
 * choice. Wire this up to Sentry, Bugsnag, etc. as needed.
 */
export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {},
  _options: ErrorReportOptions = {},
) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[error-reporting]", message, {
    route: window.location.pathname,
    ...context,
    error,
  });
}
