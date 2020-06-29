module.exports = {
  name: 'playlist-explorer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/playlist-explorer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
