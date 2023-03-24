export function statusFunc(states, action) {
	switch (action.type) {
		case "setError":
			return { success: null, waiting: null, error: action.payload };
		case "setWaiting":
			return { success: null, waiting: true, error: null };
		case "setSuccess":
			return { success: action.payload, waiting: null, error: null };
		case "clearStatus":
			return { success: null, waiting: null, error: null };
		default:
			return states;
	}
}
