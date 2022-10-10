import { registerTeam } from "../../services/jobs"
import useAsync from "../useAsync"

export default function useRegisterTeam() {
	const { loading, act, error } = useAsync(registerTeam, false)

	return {
		loadingRegisterTeam: loading,
		registerTeam: act,
		registerTeamError: error,
	}
}

