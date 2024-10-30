const TypesReducer = {
    SET_NAME: 'SET_NAME',
};

const initialState = {
    name: '',
    level: '', // beginner, intermediate, advanced
    workoutDays: [], // 1-7
    myWorkouts: [],
    lastWorkouts: '', // ID
    dailyProgress: ['2024-10-29', '2024-10-28'],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TypesReducer.SET_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        default:
            return state; 
    }
};

export default reducer;
