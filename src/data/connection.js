import { getConnectability } from '@/api/siacentral';
import Store from '@/store';

let refreshing = false;

export async function refreshHostConnectability() {
	if (refreshing)
		return;

	try {
		refreshing = true;

		const resp = await getConnectability(Store.state.netAddress);

		Store.dispatch('hostConnection/setConnectability', resp.body);
	} finally {
		refreshing = false;
	}
}