export const INITIAL_STATE = {
  isValid: {
    title: true,
    date: true,
    post: true
  },
  values: {
    title: '',
    date: '',
    post: '',
    tag: ''    
  },
  isFormReadyToSubmit: false
};

export const formReducer = (state, action) => {
  switch(action.type) {
    case 'SET_VALUE': 
      return { ...state, values: {...state, ...action.payload} };
    case 'CLEAR': 
      return { ...state, values: INITIAL_STATE.values };
    case 'RESET_VALIDITY': 
      return { ...state, isValid: INITIAL_STATE.isValid };
    case 'SUBMIT': {
      const titleValidity = state.values.title?.trim().length;
      const postValidity = state.values.post?.trim().length;
      const dateValidity = state.values.date;
      return {
        values: action.payload,
        isValid: {
          post: postValidity,
          title: titleValidity,
          date: dateValidity
        },
        isFormReadyToSubmit: titleValidity && dateValidity && postValidity
      };
    }
  }
};