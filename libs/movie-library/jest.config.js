module.exports = {
  name: 'movie-library',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/movie-library',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
