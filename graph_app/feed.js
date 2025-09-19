window.feedData = {
	QuickSort: {
		id: '1',
		label: 'QuickSortzxcmnvbk.lzdsngv.sdfngk.jdn',
		children: [
			{ id: '2', label: 'GreedyMatch' },
			{ id: '3', label: 'MergeScan' },
			{ id: '4', label: 'PathFinder' },
			{ id: '5', label: 'SignalBoost' },
			{ id: '6', label: 'DepthFirst' },
			{ id: '7', label: 'ShortestPath' },
			{ id: '8', label: 'MatrixReduce' },
			{ id: '9', label: 'RandomWalk' },
			{ id: '10', label: 'PrimeGen' },
			{ id: '13', label: 'QuickSelect' },
			{ id: '14', label: 'MonteCarlo' },
			{ id: '15', label: 'CycleDetect' },
			{ id: '16', label: 'BackProp' },
			{ id: '17', label: 'TopoSort' },
			{ id: '18', label: 'WeightedSum' },
			{ id: '20', label: 'RoutePlan' },
		],
		NodeLogic: `function quicksort(arr)
		if len(arr) <= 1 return arr
		pivot := choose(arr)
		left := filter(arr, x -> x < pivot)
		right := filter(arr, x -> x > pivot)
		return quicksort(left) + [pivot] + quicksort(right)
	end`,
		NodeMeta: [['qs_params', ['pivot_strategy', 'threshold']]],
	},
	GreedyMatch: {
		id: '2',
		label: 'GreedyMatch',
		children: [],
		NodeLogic: `function greedyMatch(items, goal)
		result := []
		for each item in items
			if fits(item, goal) then result.append(item)
		return result
	end`,
		NodeMeta: [['gm_metrics', ['score', 'confidence']]],
	},
	MergeScan: {
		id: '3',
		label: 'MergeScan',
		children: [{ id: '9', label: 'RandomWalk' }],
		NodeLogic: `function mergeScan(streams)
		heap := minheap()
		for s in streams push(heap, s.next())
		while heap not empty
			emit pop(heap)
			if source.hasNext() push(heap, source.next())
	end`,
		NodeMeta: [['ms_stats', ['throughput', 'lag']]],
	},
	PathFinder: {
		id: '4',
		label: 'PathFinder',
		children: [{ id: '7', label: 'ShortestPath' }],
		NodeLogic: `function findPath(graph, start, goal)
		open := priorityQueue(start, 0)
		while open not empty
			node := open.pop()
			if node == goal return reconstructPath(node)
			for n in neighbors(node) updateCosts(n)
		return null
	end`,
		NodeMeta: [['pf_graph', ['node_id', 'edge_count']]],
	},
	SignalBoost: {
		id: '5',
		label: 'SignalBoost',
		children: [{ id: '18', label: 'WeightedSum' }],
		NodeLogic: `function boost(signal, factor)
		for i in 0..len(signal)-1
			signal[i] := signal[i] * factor
		return signal
	end`,
		NodeMeta: [['sb_params', ['factor', 'decay']]],
	},
	DepthFirst: {
		id: '6',
		label: 'DepthFirst',
		children: [{ id: '10', label: 'PrimeGen' }],
		NodeLogic: `function dfs(node, visited)
		mark visited
		for n in neighbors(node)
			if not visited.contains(n) dfs(n, visited)
		end`,
		NodeMeta: [['df_state', ['stack_ptr', 'visited_count']]],
	},
	ShortestPath: {
		id: '7',
		label: 'ShortestPath',
		children: [{ id: '13', label: 'QuickSelect' }],
		NodeLogic: `function dijkstra(start)
		dist[start] := 0
		pq := priorityQueue(start)
		while pq not empty
			u := pq.pop()
			for v in neighbors(u) relax(u,v)
	end`,
		NodeMeta: [['sp_nodes', ['node_id', 'dist']]],
	},
	MatrixReduce: {
		id: '8',
		label: 'MatrixReduce',
		children: [],
		NodeLogic: `function reduceMatrix(M)
		for i in rows
			for j in cols
				out[i] += processCell(M[i][j])
		return out
	end`,
		NodeMeta: [['mr_tables', ['matrix_chunks', 'reduction_results']]],
	},
	RandomWalk: {
		id: '9',
		label: 'RandomWalk',
		children: [],
		NodeLogic: `function randomWalk(start, steps)
		pos := start
		for i in 1..steps
			pos := choose(neighbor(pos))
			record(pos)
		return trace
	end`,
		NodeMeta: [['rw_trace', ['pos', 'timestamp']]],
	},
	PrimeGen: {
		id: '10',
		label: 'PrimeGen',
		children: [],
		NodeLogic: `function isPrime(n)
		if n < 2 return false
		for i in 2..sqrt(n)
			if n % i == 0 return false
		return true
	end`,
		NodeMeta: [['pg_tables', ['primes', 'candidates']]],
	},
	QuickSelect: {
		id: '13',
		label: 'QuickSelect',
		children: [],
		NodeLogic: `function quickselect(arr, k)
		if len(arr) <= 1 return arr[0]
		pivot := choose(arr)
		lows := filter(arr, x -> x < pivot)
		highs := filter(arr, x -> x > pivot)
		if k < len(lows) return quickselect(lows, k)
		else if k < len(arr) - len(highs) return pivot
		else return quickselect(highs, k - (len(arr)-len(highs)))
	end`,
		NodeMeta: [['qs_tables', ['selections', 'benchmarks']]],
	},
	MonteCarlo: {
		id: '14',
		label: 'MonteCarlo',
		children: [],
		NodeLogic: `function monteCarlo(iterations)
		results := []
		for i in 1..iterations
			results.append(simulate())
		return aggregate(results)
	end`,
		NodeMeta: [['mc_runs', ['run_id', 'result']]],
	},
	CycleDetect: {
		id: '15',
		label: 'CycleDetect',
		children: [],
		NodeLogic: `function detectCycle(graph)
		visited := set()
		stack := set()
		for n in nodes
			if visit(n) return true
		return false
	end`,
		NodeMeta: [['cd_tables', ['nodes', 'edges']]],
	},
	BackProp: {
		id: '16',
		label: 'BackProp',
		children: [],
		NodeLogic: `function backprop(network, input, target)
		forward(network, input)
		computeError(target)
		for layer in network.reverse
			updateWeights(layer)
		end`,
		NodeMeta: [['bp_models', ['model_id', 'loss']]],
	},
	TopoSort: {
		id: '17',
		label: 'TopoSort',
		children: [],
		NodeLogic: `function topoSort(graph)
		indeg := computeIndegrees(graph)
		q := queue(nodes with indeg 0)
		order := []
		while q not empty
			n := q.pop()
			order.append(n)
			for m in neighbors(n)
				indeg[m] -= 1
				if indeg[m] == 0 q.push(m)
		return order
	end`,
		NodeMeta: [['ts_state', ['indeg', 'queue_len']]],
	},
	WeightedSum: {
		id: '18',
		label: 'WeightedSum',
		children: [],
		NodeLogic: `function weightedSum(values, weights)
		sum := 0
		for i in 0..len(values)-1
			sum += values[i] * weights[i]
		return sum
	end`,
		NodeMeta: [['ws_tables', ['weights', 'values']]],
	},
	RoutePlan: {
		id: '20',
		label: 'RoutePlan',
		children: [],
		NodeLogic: `function planRoute(nodes)
		best := null
		for perm in permutations(nodes)
			cost := evaluate(perm)
			if best == null or cost < best.cost best := {perm,cost}
		return best.perm
	end`,
		NodeMeta: [['rp_routes', ['route_id', 'cost']]],
	},
};
