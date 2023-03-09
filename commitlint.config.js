module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-empty': [1, 'never'],
      'type-enum': [
        0,
        'never'
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
          'sjlee'
        ],
      ],
    },
    prompt : {
        settings :{},
        messages:{
            skip :':skip',
            emptyWarning : 'can not be empty'
        },
        questions:{
            type:{
                description:"Select the type of change that you';re committing"

            }
        }
    }
  };