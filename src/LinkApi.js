const apiLink = "https://api.npoint.io";

export const getAll = () =>
  fetch(`${apiLink}/fee177346e7875554413`)
    .then((res) => res.json())
    .then((data) => data.slides);

export const newslisting = () =>
  fetch(`${apiLink}/d275425a434e02acf2f7`)
    .then((res) => res.json())
    .then((data) => data);

export const newsCategory = () =>
  fetch(`${apiLink}/91298d970c27e9a06518`)
    .then((res) => res.json())
    .then((data) => data);
