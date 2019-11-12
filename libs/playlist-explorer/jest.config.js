module.exports = {
  name: 'playlist-explorer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/playlist-explorer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
