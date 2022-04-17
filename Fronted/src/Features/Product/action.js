// import axios from "axios"
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
from "./actionType";


export const  getproductsLoading = () => {
    return {
        type: ALL_PRODUCT_LOADING,
    }
}


export const  getproductsSuccess = (payload) => {
    return {
        type: ALL_PRODUCT_SUCCESS,
        payload: payload,
    }
}

export const  getproductsFail = (payload) => {
    return {
        type: ALL_PRODUCT_FAIL,
        payload: payload,
    }
}

export const  productsDetailsLoading = () => {
    return {
        type: PRODUCT_DETAILS_LOADING,
        
    }
}


export const  productsDetailsSuccess = (payload) => {
    return {
        type: PRODUCT_DETAILS_SUCCESS,
        payload: payload,
    }
}

export const  productsDetailsFail = (payload) => {
    return {
        type: PRODUCT_DETAILS_FAIL,
        payload: payload,
    }
}

export const  userLoading = () => {
    return {
        type:  USER_LOGIN_LOADING,   
    }
}

export const  userSuccess = (payload) => {
    return {
        type:  USER_LOGIN_SUCCESS,
        payload: payload,
    }
}

export const  userFail = (payload) => {
    return {
        type:  USER_LOGIN_FAIL,
        payload: payload,
    }
}



export const clearError = () => async (dispatch) => {
   dispatch({
       type: CLEAR_ERROR,
   })
};