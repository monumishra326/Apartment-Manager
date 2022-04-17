import { 
    ALL_PRODUCT_LOADING,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    CLEAR_ERROR
} 
from "./actionType"

const initialState = { 
    flats: [], 
    loading: true,
    flatsCount: 0,
};

export const productReducer = ( state = initialState, action) =>{
     
    switch(action.type){
        case ALL_PRODUCT_LOADING:
        return{
                loading : true,
                flats : [],
                flatsCount: 0,
        }
        case ALL_PRODUCT_SUCCESS : 
        return{  
              loading : false,
              flats : action.payload.flats,
              flatsCount: action.payload.flatsCount,
              resultPerPage:action.payload.resultPerPage,
        }
        case ALL_PRODUCT_FAIL : 
        return{
             loading : false,
             error : action.payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
};

const initialState1 = { 
    flat: {}, 
    loading: true,
};

export const productDetailsReducer = ( state = initialState1, action) =>{
     
    switch(action.type){
        case PRODUCT_DETAILS_LOADING:
        return{
                loading : true,
                ...state
        }
        case PRODUCT_DETAILS_SUCCESS : 
        return{
             
              loading : false,
              flat : action.payload,
        }
        case PRODUCT_DETAILS_FAIL : 
        return{
             loading : false,
             error : action.payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
}


const initialState2 = { 
    userDetails: {}, 
    loading: true,
};

export const userLoginReducer = ( state = initialState2, action) =>{
     
    switch(action.type){
        case USER_LOGIN_LOADING:
        return{
                loading : true,
                ...state
        }
        case USER_LOGIN_SUCCESS : 
        return{
              loading : false,
              userDetails : action.payload,
        }
        case USER_LOGIN_FAIL : 
        return{
             loading : false,
             error : action.payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
}