import useAsync from "../useAsync"
import * as auth from "../../services/auth"

export default function useLoginUser() {
	const { data, loading, act, error } = useAsync(auth.signIn, false)

	return {
		tokenUser:data,
		loadingLoginUser: loading,
		loginUser: act,
		loginUserError: error,
	}
}