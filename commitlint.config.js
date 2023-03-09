module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-empty': [2, 'never'],
      'type-enum': [
        2,
        'always'
        [
          'oops',
          'build',
          'chore',
          'ci',
          'deploy',
          'docs',
          'e2e',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
          'upgrade'
        ],
      ],
    },
  };