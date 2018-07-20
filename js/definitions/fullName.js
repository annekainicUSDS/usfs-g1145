export const schema = {
  type: 'object',
  properties: {
    first: {
      type: 'string',
      pattern: '^.*\\S.*',
      minLength: 1,
      maxLength: 30
    },
    middle: {
      type: 'string'
    },
    last: {
      type: 'string',
      pattern: '^.*\\S.*',
      minLength: 2,
      maxLength: 30
    },
  },
  required: [
    'first',
    'last'
  ]
};

export const uiSchema = {
  first: {
    'ui:title': 'Applicant/petitioner full first name'
  },
  last: {
    'ui:title': 'Applicant/petitioner full last name'
  },
  middle: {
    'ui:title': 'Applicant/petitioner full middle name'
  }
};
