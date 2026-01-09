import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/build/**'],
    pool: 'forks',
    fileParallelism: true,
    testTimeout: 5000,
    hookTimeout: 10000,
    reporters: ['default', 'json', 'html'],
    outputFile: {
      json: './test-results.json',
      html: './test-results/index.html',
    },
    coverage: {
      provider: 'v8',
      enabled: false,
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/',
        'dist/',
        'build/',
        '**/*.d.ts',
        '**/*.config.{ts,js,mjs}',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    clearMocks: true,
    restoreMocks: true,
    sequence: {
      shuffle: false,
      concurrent: false,
      hooks: 'stack',
    },
  },
});
