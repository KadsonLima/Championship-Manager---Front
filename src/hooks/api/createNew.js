import { createNew } from "../../services/championship"
import useAsync from "../useAsync"

export default function useCreateNew() {
	const { loading, act, error } = useAsync(createNew, false)

	return {
		loadingCreatingNew: loading,
		createNew: act,
		creatingNewError: error,
	}
}

