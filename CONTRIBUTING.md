# Contributing to LaunchKit

Thank you for your interest in contributing to LaunchKit!

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies: `npm install`
4. Copy `.env.example` to `.env.local` and fill in your values
5. Start the dev server: `npm run dev`

## Development

### Branch Naming

- `feature/description` — new features
- `fix/description` — bug fixes
- `docs/description` — documentation changes

### Commit Messages

Use conventional commits:
- `feat: add new feature`
- `fix: fix bug`
- `docs: update documentation`
- `refactor: refactor code`
- `test: add tests`
- `chore: update dependencies`

### Code Style

- TypeScript strict mode
- ESLint + Prettier
- Use `cn()` from `@/lib/utils` for conditional classes
- Use shadcn/ui components when possible

## Pull Requests

1. Create a branch from `main`
2. Make your changes
3. Run `npm run build` to verify
4. Submit a PR with a clear description

## Issues

- Use the issue tracker for bugs and feature requests
- Include steps to reproduce for bugs
- Include your Node.js and Next.js versions
