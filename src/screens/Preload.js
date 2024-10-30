import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";


const Preload = (props) => {

    // Temporário
    if (!props.name) {
        // mandar para a StarterStack
        props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName:'StarterStack'})
            ]
        }));
    // } else {
    //     // mandar para a AppTab
    //     props.navigation.dispatch(StackActions.reset({
    //         index: 0,
    //         actions: [
    //             NavigationActions.navigate({routeName:'AppTab'})
    //         ]
    //     }));
    // }
    }

    return null;
}

const mapStateToPrpos = (state) => {
    return {
        name: state.userReducer.name
    }
}

export default connect(mapStateToPrpos)(Preload);