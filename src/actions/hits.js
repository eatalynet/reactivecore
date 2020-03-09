import { UPDATE_HITS, UPDATE_AGGS, PUSH_TO_STREAM_HITS, UPDATE_COMPOSITE_AGGS } from '../constants';

export function updateAggs(component, aggregations, append = false) {
	return {
		type: UPDATE_AGGS,
		component,
		aggregations,
		append,
	};
}

export function updateCompositeAggs(component, aggregations, append = false) {
	return {
		type: UPDATE_COMPOSITE_AGGS,
		component,
		aggregations,
		append,
	};
}

export function updateHits(component, hits, time, hidden, append = false, prepend = false) {
	return {
		type: UPDATE_HITS,
		component,
		hits: hits.hits,
		// make compatible with es7
		total: typeof hits.total === 'object' ? hits.total.value : hits.total,
		hidden,
		time,
		append,
		prepend,
	};
}

export function pushToStreamHits(component, hit) {
	return {
		type: PUSH_TO_STREAM_HITS,
		component,
		hit,
	};
}
