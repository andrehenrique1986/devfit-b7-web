const TypesReducer = {
    SET_NAME: 'SET_NAME',
    SET_WORKOUTDAYS: 'SET_WORKOUTDAYS',
    SET_LEVEL: 'SET_LEVEL'
};

const initialState = {
    name: '',
    level: '', // beginner, intermediate, advanced
    workoutDays: [], // 0-6
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
        case TypesReducer.SET_WORKOUTDAYS: 
            return {
             ...state,
             workoutDays: action.payload.workoutDays
            };
        case TypesReducer.SET_LEVEL:
            return {
                ...state,
                level: action.payload.level
            };
        default:
            return state; 
    }
};

export default reducer;
