import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { __GraphQL_API__ } from './config'

/**
 *
 *
 **************************Implement your own data caching*****************************
 *
 * 																(In-memory Cache)
 * const oneMinute = 60 * 1000;
 * const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });
 *
 *
 */

/**
 * Create Data Store
 */
const store = new Store(new RecordSource())

/**
 * Create Network Layer
 */
const network = Network.create((operation, variables, cacheConfig) =>
	fetch(__GraphQL_API__, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: operation.text,
			variables
		})
	}).then(response => {
		return response.json()
	})
)

/**
 * Create Relay Environment
 */
export default new Environment({
	network,
	store
})
