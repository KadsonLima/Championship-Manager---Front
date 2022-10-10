import useAsync from "../useAsync"
import { getJobById } from "../../services/jobs"

export default function useGetJobByRegister() {
	const { data, loading, act, error } = useAsync(getJobById, false)

	return {
		job:data,
		loadingJob: loading,
		getJob: act,
		jobError: error,
	}
}