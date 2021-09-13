const getOneSlugHelper = href => href.split("/").slice(5, -1)[0].split(":")[1];

export default getOneSlugHelper;
