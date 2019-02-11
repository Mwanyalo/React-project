
import usersApi from '../.././api/usersApi';
import * as action from './actionCreators';

export function getUsers() {
	return function(dispatch) {

		dispatch(action.fetching());

		return usersApi.getUsers().then(response => {

			dispatch(action.fetchComplete());
			dispatch(action.getUsersSuccess(response));

		}).catch(error => {

			dispatch(action.fetchComplete());
			dispatch(action.dispatchGeneralError(error));
		});
	};
}

export function updateUser(user) {
  return function(dispatch) {

    return usersApi.updateUser(user).then(response => {

			dispatch(action.updateUserSuccess(response));
			
    }).catch(error => {

      dispatch(action.dispatchGeneralError(error));
    });
  };
}


