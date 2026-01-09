# Publishing Guide

## Prerequisites

1. **npm account**: Create one at https://www.npmjs.com/signup
2. **Organization setup**: Since this is a scoped package (`@sklv-labs/ts-dev-configs`), you need to:
   - Create the `sklv-labs` organization on npm (or ensure you have access)
   - Scoped packages are **private by default** unless you publish with `--access public`

## Pre-Publishing Checklist

- [ ] All tests pass (if you have any)
- [ ] Type checking passes: `npm run type-check`
- [ ] README is complete and accurate
- [ ] Version number is correct in `package.json`
- [ ] All files in `files` array exist and are correct
- [ ] LICENSE file is present
- [ ] Repository URL is correct

## Publishing Steps

### 1. Login to npm

```bash
npm login
```

Enter your npm username, password, and email when prompted.

### 2. Verify you're logged in

```bash
npm whoami
```

### 3. Check what will be published

```bash
npm pack --dry-run
```

This shows what files will be included in the package.

### 4. Publish the package

Since this is a scoped package, publish it as **public**:

```bash
npm publish --access public
```

Or if you want to publish as private (requires npm paid plan):

```bash
npm publish
```

### 5. Verify publication

Check your package on npm:
```
https://www.npmjs.com/package/@sklv-labs/ts-dev-configs
```

## Version Management

### Update version before publishing

Use npm version commands:

```bash
# Patch version (0.1.0 -> 0.1.1)
npm version patch

# Minor version (0.1.0 -> 0.2.0)
npm version minor

# Major version (0.1.0 -> 1.0.0)
npm version major
```

This automatically:
- Updates `package.json` version
- Creates a git tag
- Commits the change

Then publish:
```bash
npm publish --access public
```

## Troubleshooting

### "You do not have permission to publish"

- Ensure you're logged in: `npm whoami`
- Verify you have access to the `@sklv-labs` organization
- Check if the package name already exists

### "Package name already exists"

- The package name might be taken
- Consider a different name or contact the current owner

### "Invalid package name"

- Scoped packages must start with `@`
- Organization name must match your npm username or organization

## Best Practices

1. **Always test locally first**: Use `npm pack` to create a tarball and test it
2. **Use semantic versioning**: Follow semver (major.minor.patch)
3. **Update CHANGELOG.md**: Document changes before publishing
4. **Tag releases in git**: `npm version` automatically creates tags
5. **Publish from CI/CD**: Consider automating releases

## Testing the Published Package

After publishing, test it in a new project:

```bash
mkdir test-package
cd test-package
npm init -y
npm install --save-dev @sklv-labs/ts-dev-configs
```

Then try importing:
```js
import baseEslint from '@sklv-labs/ts-dev-configs/eslint/base';
```
