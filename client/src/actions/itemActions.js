import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios  
        .get("https://mern-stack-app-liamwebb.c9users.io:8081/api/items")
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))
};

export const deleteItem = (id) => dispatch => {
    axios.delete(`https://mern-stack-app-liamwebb.c9users.io:8081/api/items/${id}`).then(res => 
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
};

export const addItem = (item) => dispatch => {
    axios
        .post("https://mern-stack-app-liamwebb.c9users.io:8081/api/items", item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    };
};