module.exports = {
  main: {
    input: {
      target: '../../lawbox-landing/api/api-spec.yml',
    },
    output: {
      client: 'react-query',
      target: '../src/api/api.ts',
      schemas: '../src/api/models',
      prettier: true,
      override: {
        mutator: {
          path: '../src/api/axios-instance.ts',
          name: 'axiosInstance',
        },
        useTypeOverInterfaces: true,
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
}
