import {ADD_COMMENT, EDIT_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from "../actions/actions";
import { REMOVE_COMMENT } from "../actions/actions";

const initialState = {
    comments: [],
    user: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        votes: 0
                    },
                    ...state.comments
                ]
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload.id)
            };
        case EDIT_COMMENT:
            return {
                ...state,
                comments: state.comments.map( comment =>
                comment.id === action.payload.id
                ? { ...comment, text: action.payload.text }
                : comment
                )
            };
        case THUMB_UP_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment =>
                comment.id === action.payload.id
                ? { ...comment, votes: comment.votes + 1 }
                : comment
                )
            };
        case THUMB_DOWN_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment =>
                    comment.id === action.payload.id
                        ? { ...comment, votes: comment.votes - 1 }
                        : comment
                )
            };
        default:
            return state;
    }
};