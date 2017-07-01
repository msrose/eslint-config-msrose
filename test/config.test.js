const eslint = require('eslint');

test('Base config has no errors', () => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: 'index.js'
  });
  const code = "const foo = 'bar'; (() => foo + 'bar')();";
  const result = cli.executeOnText(code);
  expect(result.results[0].messages).toEqual([]);
});

test('React config has no errors', () => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: 'react.js'
  });
  const code = "var React = require('react'); (function() { return <div>Hi!</div>; })();";
  const result = cli.executeOnText(code);
  expect(result.results[0].messages).toEqual([]);
});

test('Jest config has no errors', () => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: 'jest.js'
  });
  const code = "describe('Some stuff', function() { it('does some stuff', function() { expect(1 + 1).toBe(2); }) })";
  const result = cli.executeOnText(code);
  expect(result.results[0].messages).toEqual([]);
});
