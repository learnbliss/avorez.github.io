export const GET_DATA_SEARCH = 'GET_DATA_SEARCH';

//action creators
export const searchAC = (dataSearch) => ({
    type: GET_DATA_SEARCH,
    payload: {
        dataSearch,
    },
});

// action functions

// const types = {
//
// }

export const getDataSearch = (inputValue) => {
    return async (dispatch, getState) => {
        try {
            const {isSelect, inputName} = getState().accordionReducer;
            const {dataLocations, countryGroups} = getState().locationsReducer;
            let dataSearch;
            // const getIdCountries = () => {
            //     let id, input;
            //     countryGroups.map((item) => {
            //         if (item.name === isSelect) {
            //             id = item.id
            //         }
            //     })
            // };
            let getArrToSearch = () => {
                let isSelectInputNameString = `${isSelect} ${inputName}`;
                console.log('isSelectInputNameString: ', isSelectInputNameString);
                switch (isSelectInputNameString) {
                    case 'Россия Вся Россия':
                        return [{name: 'Не работает'}];
                    case 'Россия Область':
                        return Object.values(dataLocations.payload.regions);
                    case 'Россия Город':
                        return Object.values(dataLocations.payload.cities).filter((item) => {
                            return item.country_id === 1
                        });
                    case 'Страны СНГ Все страны СНГ':
                        return Object.values(dataLocations.payload.countries).filter((item) => {
                            return item.group_id === 2
                        });
                    case 'Страны СНГ Отдельная страна':
                        return [{name: 'Не работает'}];
                    case 'Остальные страны Все страны':
                        console.log('Object.values(dataLocations.payload.countries): ', Object.values(dataLocations.payload.countries));
                        return Object.values(dataLocations.payload.countries).filter((item) => {
                            return item.group_id === 3
                        });
                    case 'Остальные страны Отдельная страна':
                        return [{name: 'Не работает'}];
                    case 'Страны Евросоюза Все страны Евросоюза':
                        return Object.values(dataLocations.payload.countries).filter((item) => {
                            return item.group_id === 4
                        });
                    case 'Страны Евросоюза Отдельная страна':
                        return [{name: 'Не работает'}];
                    default:
                        return console.log('');
                }
            };
            console.log('getArrToSearch(): ', getArrToSearch());
            let intermediateValue = () => {
                let arr = [];
                getArrToSearch().filter((item) => {
                    if (!inputValue) {
                        return null
                    } else if (item.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                        arr.push(item.name)
                    }
                });
                return arr;
            };
            dataSearch = intermediateValue().slice(0, 5);
            dispatch(searchAC(dataSearch));
        } catch (err) {
            console.error(err);
        }
    };
};

