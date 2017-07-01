'use strict';

const { CLIEngine } = require('eslint');

const configs = [{
  file: 'index.js',
  code: "'use strict'; const foo = 'bar'; (() => foo + 'bar')();"
}, {
  file: 'react.js',
  code: "var React = require('react'); (function() { return <div>Hi!</div>; })();"
}, {
  file: 'jest.js',
  code: "describe('Some stuff', function() { it('does some stuff', function() { expect(1 + 1).toBe(2); }); });"
}];

configs.forEach(({ file, code }) => {
  test(`${file} config has no errors`, () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: file
    });
    const result = cli.executeOnText(code);
    expect(result.results[0].messages).toEqual([]);
  });
});
