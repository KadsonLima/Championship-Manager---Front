import useAsync from "../useAsync"
import { getJobs } from "../../services/jobs"

export default function useGetChampionship() {
	const { data, loading, act, error } = useAsync(getJobs, false)

	return {
		jobs:data,
		loadingJobs: loading,
		getJobs: act,
		jobError: error,
	}
}