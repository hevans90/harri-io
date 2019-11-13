export const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Biography',
  'Documentary',
  'Drama',
  'Horror',
  'Family',
  'Fantasy',
  'Music',
  'Musical',
  'Romance',
  'Sci-Fi',
  'Thriller',
  'War',
  'Western'
] as const;

type genreTuple = typeof genres;

export type Genre = genreTuple[number];
