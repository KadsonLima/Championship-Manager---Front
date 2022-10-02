import useAsync from "../useAsync"
import * as auth from "../../services/auth"
import { getById } from "../../services/championship"

export default function useGetChampionshipById() {
	const { data, loading, act, error } = useAsync(getById, false)

	return {
		championship:data,
		loadingChampionship: loading,
		getChampionship: act,
		championshipError: error,
	}
}