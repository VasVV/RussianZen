export default function selectBackground(state='rain', action) {
    switch(action.type) {
        case 'SELECT_BACKGROUND':
            return action.payload;
        default:
            return state;
    }
}