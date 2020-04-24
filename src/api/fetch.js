export const apiUrl = 'https://217.174.101.5/api/v1/locations';
export const fetchData = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(dataCollection => {
            return dataCollection;
        })
        .catch(console.error)
};