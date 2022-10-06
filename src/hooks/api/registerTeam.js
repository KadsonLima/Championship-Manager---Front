import { registerTeam } from "../../services/championship"
import useAsync from "../useAsync"

export default function useRegisterTeam() {
	const { loading, act, error } = useAsync(registerTeam, false)

	return {
		loadingRegisterTeam: loading,
		registerTeam: act,
		registerTeamError: error,
	}
}

