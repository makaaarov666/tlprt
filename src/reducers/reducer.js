import {
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  FETCH_GEONAMES_REQUEST,
  FETCH_GEONAMES_SUCCESS,
  FETCH_GEONAMES_FAILURE,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
  FETCH_CITY_INFO_REQUEST,
  FETCH_CITY_INFO_SUCCESS,
  FETCH_CITY_INFO_FAILURE,
  FETCH_SALARIES_REQUEST,
  FETCH_SALARIES_SUCCESS,
  FETCH_SALARIES_FAILURE,
  FETCH_CITY_TAXATION_REQUEST,
  FETCH_CITY_TAXATION_SUCCESS,
  FETCH_CITY_TAXATION_FAILURE,
} from "../consts/reducer";

const targetValue = array =>
  array.map(
    item =>
      item.href
        .split("/")
        .filter(el => el.toLowerCase().indexOf("geonames".toLowerCase()) > -1)
        .flat(), // TODO: вынести в хелпер
  );

const updateCityList = (state, action) => {
  const loading = state.cityList.cityRecived >= 6 ? false : true;

  return {
    ...state,
    cityList: {
      ...state.cityList,
      city: state.cityList.city.concat(action.payload),
      loading: loading,
      cityRecived: state.cityList.cityRecived + 1,
      error: null,
    },
  };
};

const getGeonameId = (state, action) => {
  const geonameId = action.payload.split("/")[5]; // TODO: вынести в хелпер

  return {
    ...state,
    cityDetails: {
      ...state.cityDetails,
      urbanAreasInfo: {
        ...state.cityDetails.urbanAreasInfo,
        info: geonameId,
        loading: false,
      },
    },
  };
};

const getGeonames = (state, action) => {
  const continents = action.payload;
  const geonames = targetValue(continents);

  return {
    ...state,
    cityList: {
      ...state.cityList,
      geonames: geonames,
      loading: false,
    },
  };
};

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      cityList: {
        geonames: null,
        city: [],
        cityRecived: 0,
        loading: true,
        error: null,
      },
      cityDetails: {
        urbanAreasInfo: {
          info: "",
          loading: false,
          error: null,
        },
        cityImage: {
          image: null,
          loading: false,
          error: null,
        },
        cityInfo: {
          info: [],
          loading: false,
          error: null,
          salaries: {
            percent: {},
            loading: false,
            error: null,
          },
          taxations: {
            tax: [],
            loading: false,
            error: null,
          },
        },
      },
    };
  }

  switch (action.type) {
    case FETCH_CITY_REQUEST:
      return {
        ...state,
        cityList: {
          ...state.cityList,
          loading: true,
        },
      };

    case FETCH_CITY_SUCCESS:
      return updateCityList(state, action);

    case FETCH_CITY_FAILURE:
      return {
        ...state,
        cityList: {
          ...state.cityList,
          loading: false,
          error: action.payload,
        },
      };
    case FETCH_GEONAMES_REQUEST:
      return {
        ...state,
        cityList: {
          ...state.cityList,
          loading: true,
        },
      };

    case FETCH_GEONAMES_SUCCESS:
      return {
        ...getGeonames(state, action),
      };

    case FETCH_GEONAMES_FAILURE:
      return {
        ...state,
        cityList: {
          ...state.cityList,
          loading: false,
          error: action.payload,
        },
      };

    case FETCH_DETAILS_REQUEST:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          urbanAreasInfo: {
            ...state.cityDetails.urbanAreasInfo,
            loading: true,
          },
        },
      };

    case FETCH_DETAILS_SUCCESS:
      return getGeonameId(state, action);

    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          urbanAreasInfo: {
            ...state.cityDetails.urbanAreasInfo,
            error: action.payload,
            loading: false,
          },
        },
      };

    case FETCH_IMAGE_REQUEST:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityImage: {
            ...state.cityDetails.cityImage,
            loading: true,
          },
        },
      };

    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityImage: {
            ...state.cityDetails.cityImage,
            image: action.payload,
            loading: false,
          },
        },
      };

    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityImage: {
            ...state.cityDetails.cityImage,
            loading: false,
            error: action.payload,
          },
        },
      };

    case FETCH_CITY_INFO_REQUEST:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            loading: true,
          },
        },
      };

    case FETCH_CITY_INFO_SUCCESS:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            info: action.payload,
            loading: false,
          },
        },
      };

    case FETCH_CITY_INFO_FAILURE:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            loading: false,
            error: action.payload,
          },
        },
      };

    case FETCH_SALARIES_REQUEST:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            salaries: {
              ...state.cityDetails.cityInfo.salaries,
              loading: true,
            },
          },
        },
      };

    case FETCH_SALARIES_SUCCESS:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            salaries: {
              ...state.cityDetails.cityInfo.salaries,
              percent: action.payload,
              loading: false,
            },
          },
        },
      };

    case FETCH_SALARIES_FAILURE:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            salaries: {
              ...state.cityDetails.cityInfo.salaries,
              loading: false,
              error: action.payload,
            },
          },
        },
      };

    case FETCH_CITY_TAXATION_REQUEST:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            taxations: {
              ...state.cityDetails.cityInfo.taxations,
              loading: true,
            },
          },
        },
      };

    case FETCH_CITY_TAXATION_SUCCESS:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            taxations: {
              ...state.cityDetails.cityInfo.taxations,
              tax: action.payload,
              loading: false,
            },
          },
        },
      };

    case FETCH_CITY_TAXATION_FAILURE:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          cityInfo: {
            ...state.cityDetails.cityInfo,
            taxations: {
              ...state.cityDetails.cityInfo.taxations,
              loading: false,
              error: action.payload,
            },
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;
