module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-empty': [2, 'never'],
      "header-max-length": [2, "always", 72],
      'type-enum': [
        2,
        'always'
        [
          'build',
          'chore',
          'deploy',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
         ],
      ],
    }, 
  };