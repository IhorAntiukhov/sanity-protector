# Shared Guidelines

Apply these regardless of whether the work is frontend or backend.

## Architecture Philosophy

- Keep tightly-coupled, related code co-located so it's easy to view and modify together.
- Minimize the number of places a single change must touch.
- Prefer deeper implementations behind simpler interfaces (interface = props, parameters, exceptions).
- When designing something new, consider 1-2 realistic ways it may need to scale later.
- Every component has a single purpose.
- Name variables, functions, and files so they're understandable without reading the surrounding code — unless the variable's lifecycle is short, uninterrupted, and obvious.
- Comment only what isn't obvious from the code itself.

## Documentation

- Use Architecture Decision Records (ADRs) to document decisions that span modules.
- Document large additions or features — anything significant enough to go through planning mode — in `docs/plans/`, one file per feature (`docs/plans/<feature-name>.md`).

## Configuration

- Provide a `.env.example` file.

## Security

- Apply standardized XSS protection.
- Configure CORS.
- Disable the `X-Powered-By` header.
