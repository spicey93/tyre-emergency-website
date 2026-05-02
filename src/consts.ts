/**
 * Site configuration and content. Prefer editing `src/config/site.ts` and
 * `src/content/*` for a new business; this file re-exports a single import surface.
 */
export type {
  Area,
  DesignerCredit,
  Pages,
  Service,
  TopbarItem,
} from "./config/types";

export * from "./config/site";
export * from "./content/areas";
export * from "./content/services";
export * from "./content/pages";
