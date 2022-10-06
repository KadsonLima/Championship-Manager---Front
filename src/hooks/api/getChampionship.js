import useAsync from "../useAsync"
import { getAll } from "../../services/championship"

export default function useGetChampionship() {
	const { data, loading, act, error } = useAsync(getAll, false)

	return {
		championship:data,
		loadingChampionship: loading,
		getChampionship: act,
		championshipError: error,
	}
}