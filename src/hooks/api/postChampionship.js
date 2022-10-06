import useAsync from "../useAsync"
import { createChampionship } from "../../services/championship"

export default function useCreateChampionship() {
	const { data, loading, act, error } = useAsync(createChampionship, false)

	return {
		championship:data,
		loadingChampionship: loading,
		createChampionship: act,
		championshipError: error,
	}
}