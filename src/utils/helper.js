import queryString from "querystring";

export const  getQueryParams = qs =>  {
  return queryString.parse(qs);
}
export const setQueryParams = qs =>  {
  return queryString.stringify(qs);
}

export const removeQuestionFromQueryString = (search) => (
  search && Object.keys(search).reduce( (acc, item )=> {
    if (item.indexOf('?') === 0) {
      const key = item.slice( 1, item.length)
      acc = {
        ...acc,
        [key]: search[item]
      }
    } else {
      acc = {
        ...acc,
        [item]: search[item]
      }
    }
    return acc
  }, {})
)
