const importAll = r => {
  const all = r.keys().map(fileName => r(fileName).meta);
  return [...new Set(all)];
};

export const allWorks = importAll(
  require.context('pages/work', false, /\.mdx$/),
);

export const getRelatedWorks = (allWorks, currentWorkSlug) =>
  allWorks.filter(work => work.link && work.slug !== currentWorkSlug);
