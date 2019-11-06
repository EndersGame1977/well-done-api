const Prismic = require("prismic-javascript");

const prismicURL = `https://welldone-dashboard.cdn.prismic.io/api/v2`;

async function getDoc(pageName) {
  const api = await Prismic.api(prismicURL);
  const doc = await api.getSingle(pageName);
  return doc;
}

async function getDocs(docType) {
  const api = await Prismic.api(prismicURL);
  const docs = await api.query(
    Prismic.Predicates.at("document.type", docType),
    { pageSize: 1000 }
  );
  return docs;
}

async function getVillage(village) {
  const api = await Prismic.api(prismicURL);
  const doc = await api.getByID(village);
  return doc.data;
}

module.exports = {
  prismicURL,
  getDoc,
  getDocs,
  getVillage
};
