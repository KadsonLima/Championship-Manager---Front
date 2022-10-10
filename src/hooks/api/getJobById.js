import useAsync from "../useAsync"
import { getById } from "../../services/jobs"

export default function useGetJobById() {
	const { data, loading, act, error } = useAsync(getById, false)

	return {
		job:data,
		loadingJob: loading,
		getJob: act,
		jobError: error,
	}
}