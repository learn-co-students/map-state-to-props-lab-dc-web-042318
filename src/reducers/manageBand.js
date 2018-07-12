export default function manageUsers(
	state = {
		users: [],
		primaryUser: ""
	},
	action
) {
	switch (action.type) {
		case "ADD_USER":
			// let primaryUser = null;
			// state.primaryUser !== ""
			// 	? (primaryUser = state.primaryUser)
			// 	: (primaryUser = action.user);
			return Object.assign({}, state, {
				users: state.users.concat(action.user)
				// primaryUser
			});
		default:
			return state;
	}
}
