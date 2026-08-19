# Frontend Guidelines

## Architecture

### Limitations

- Never export a type and a React component from the same file — except a Context provider's own type.
- Two components may share a file only if they're always used together.

### Folder structure

- All code lives under `src/`.
- Group components by feature; features may nest.
- Standalone components go in `shared/`.
- Inside a feature folder or `shared/`, use these subfolders as needed:
  - `assets` — static files
  - `components/pages` — standalone pages
  - `components/custom` — business components
  - `components/providers` — Context API providers
  - `components/layout` — layout components
  - `components/ui` — primitive components
  - `services` — low-level API calls (Next.js server actions) to the backend
  - `stores` — state-manager stores
  - `hooks` — custom React hooks
  - `types` — custom TS types/interfaces
  - `schemas` — Zod schemas, their inferred types, and defaults
  - `utils` — custom functions and wrappers for third-party libraries
  - `constants` — constants, in `PASCAL_CASE`
- Each feature exposes its public API through `index.ts`.

### Patterns

- Every query/mutation has a matching `services` function.
- Factor a TanStack mutation into its own hook once it's used more than once.
- Handle mutation error/success messaging through one dedicated hook, always.
- Read the current user's permissions through one dedicated hook, always.
- Return a function's result inside an object, unless it's used immediately in an expression — keeps naming consistent at call sites.
- Define query keys in a factory, used by `useQuery`.
- Add a sub-type specifier (`type`, `service`, `store`, etc.) to filenames that would otherwise share a base name.
- If the same prop set is passed to multiple components across files, add a Context provider even without prop drilling.
- Combine all providers into one `MainProvider` at the app entry point.

## UI/UX

- Use standardized icons, not emojis.
- Visually group related navigation components.
- Add images to cards where possible.
- Animate hover/press states for actions.
- Button horizontal padding = 2x vertical padding.
- Underline text links.
- Implement one reusable pattern for optimistic updates.

## SEO

- Use semantic HTML5 tags where possible.
- Page title format: `<specific resource> | <site name>`.
- Specify keywords, `robots.ts`, and `sitemap.ts` where possible.

## Optimization

- Use `useMemo`/`useCallback` where they help — weigh against memoization's own cost.
- Use `React.memo` and `Suspense` for components.
- Server components: Next.js fetch/revalidate/cache. Client components: TanStack Query.
- Push interactivity down the component tree.
- Show skeleton placeholders for remote data (lists, dashboards).
- Show a toast message on every mutation error.
- Reuse one debounce function for full-text search.
- Use `useTransition` for lower-priority updates.

## Configuration

- Define environment variables in `next.config`.
