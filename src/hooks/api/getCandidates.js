import useAsync from "../useAsync"
import { getCandidates } from "../../services/jobs"

export default function useGetCandidates() {
	const { data, loading, act, error } = useAsync(getCandidates, false)

	return {
		jobs:data,
		loadingJobs: loading,
		getJobs: act,
		jobError: error,
	}
}