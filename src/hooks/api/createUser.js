import useAsync from "../useAsync"
import * as auth from "../../services/auth"

export default function useCreateUser() {
	const { loading, act, error } = useAsync(auth.signUp, false)

	return {
		loadingCreatingUser: loading,
		createUser: act,
		creatingUserError: error,
	}
}

