# Frontend Guidelines

## Framework Version Awareness

- This project's installed Next.js version may include breaking changes — APIs, conventions, and file structure may differ from training data. Before writing Next.js code, read the relevant guide in `sanity-protector-frontend/node_modules/next/dist/docs/` and heed deprecation notices.
- This mirrors `sanity-protector-frontend/AGENTS.md`, which `next dev` regenerates automatically — don't fight it by deleting the file; treat it as a live pointer back to this rule.

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

## Landing Pages

### Above the fold

- Lead with a benefit-driven headline.
- Follow with a sub-headline stating who you are and what you do.
- Show social proof: reviews, testimonials, feature publications.
- Include a clear call-to-action button.
- Reduce fear, uncertainty, and doubt: free trials, return policies.

### Emotional appeal

- People buy with emotion, not logic — favor powerful messaging over dry feature lists.

### Structure over length

- Don't hide the elements that need to be seen (e.g. behind dropdowns).
- Match border radius across buttons and images.
- Give buttons that lead to the same destination the same color.
- Prefer a bento grid over stacked card rows.

### Scannability

- Use sub-headings, bullet points, and bold text so the page can be scanned, not read.

### Credible social proof

- Quote an actual snippet from the publication, not a paraphrase.
- Use real examples and images of people who used the product.
- Cite the source of every review.

### Visual hierarchy

- Vary text sizes to establish hierarchy.
- Less is more; favor simplicity over creativity.
- Balance button placement in the header.
- Outline the most important button(s).
- Break up purely vertical/horizontal layout lines — a slight diagonal, where appropriate, reads as less rigid.

### Interactivity

- Show actual dashboards, not mockups, where possible.
- Use split views.
- Reveal buttons only when they're needed.
- Use auto-expandable navigation headers.

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
- Dev server runs on port 3000.
