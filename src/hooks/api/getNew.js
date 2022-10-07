import useAsync from "../useAsync"
import { getAllNew } from "../../services/championship"

export default function useGetNews() {
	const { data, loading, act, error } = useAsync(getAllNew, false)

	return {
		news:data,
		loadingNews: loading,
		getNews: act,
		newsError: error,
	}
}