# Backend Guidelines

## Code Structure

- Use one custom Logger module/service instead of `console.log`.
- Give each nested API endpoint its own module.
- Nest modules to mirror the API hierarchy.
- Always use Swagger.
- Factor module configuration into standalone config functions.

## Authentication

### Essential

- Use one function to convert time units; use it for every token/cookie expiry date.
- Add optional session fields via `express-session.d.ts`.
- Always rate-limit critical endpoints by IP address and User-Agent.
- Temporarily block login attempts for a user after 3 consecutive failures.
- Never store personal user data (e.g. role) in tokens.
- Always implement refresh tokens with rotation, backed by Redis.

### Optional — weigh against actual business requirements

- Increase hashing cost/resources.
- Add a pepper alongside the salt.

## Caching

- Vary cache expiry per field/key to avoid cache stampede.
