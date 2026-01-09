# GitHub Actions Workflows

## CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request to main/master:
- Type checking with TypeScript

## Publish Workflow (`.github/workflows/publish.yml`)

Automatically publishes to npm when you push a git tag starting with `v` (e.g., `v0.1.0`).

**Trigger:** Push a tag like `v0.1.1`, `v1.0.0`, etc.

**What it does:**
1. Checks out code
2. Sets up Node.js 24
3. Installs dependencies
4. Runs type checking
5. Verifies package version matches tag
6. Publishes to npm (public) using Trusted Publishers (OIDC)
7. Creates GitHub release

**Setup Required:** Configure Trusted Publishers on npm (see PUBLISHING.md)
- No secrets needed! Uses OIDC authentication
- More secure than token-based authentication
