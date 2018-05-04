import moment from 'moment'
export const MODULE_NAME = 'report'
export const DEFAULT_FILTER = {
	start_date:moment().format("DD/MM/YYYY"),
	end_date:moment().format("DD/MM/YYYY")
}