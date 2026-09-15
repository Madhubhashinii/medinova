import { useRouterState } from "@tanstack/react-router";

/**
 * In-page anchors ("#about") only work on the home page. On sub-pages such as
 * /doctors/d1 they are rewritten to "/#about" so they navigate home first.
 */
export function useSectionHref() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  return (href: string) => (onHome || !href.startsWith("#") ? href : `/${href}`);
}
