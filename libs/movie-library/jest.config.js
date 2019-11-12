module.exports = {
  name: 'movie-library',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/movie-library',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
