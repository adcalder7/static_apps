// Mocked tables dataset assigned to window.tables
// Each table: { name: "", columns: [ { name: "" }, ... ] }
window.tables = [
	{
		name: 'users',
		columns: [
			{ name: 'id' },
			{ name: 'username' },
			{ name: 'email' },
			{ name: 'created_at' },
		],
	},
	{
		name: 'profiles',
		columns: [
			{ name: 'user_id' },
			{ name: 'display_name' },
			{ name: 'bio' },
			{ name: 'avatar' },
		],
	},
	{
		name: 'posts',
		columns: [
			{ name: 'id' },
			{ name: 'author_id' },
			{ name: 'title' },
			{ name: 'content' },
			{ name: 'published_at' },
		],
	},
	{
		name: 'comments',
		columns: [
			{ name: 'id' },
			{ name: 'post_id' },
			{ name: 'author_id' },
			{ name: 'body' },
			{ name: 'created_at' },
		],
	},
	{
		name: 'likes',
		columns: [
			{ name: 'id' },
			{ name: 'user_id' },
			{ name: 'post_id' },
			{ name: 'created_at' },
		],
	},
	{
		name: 'follows',
		columns: [
			{ name: 'follower_id' },
			{ name: 'followee_id' },
			{ name: 'since' },
		],
	},
	{
		name: 'messages',
		columns: [
			{ name: 'id' },
			{ name: 'from_id' },
			{ name: 'to_id' },
			{ name: 'message' },
			{ name: 'sent_at' },
		],
	},
	{
		name: 'notifications',
		columns: [
			{ name: 'id' },
			{ name: 'user_id' },
			{ name: 'type' },
			{ name: 'data' },
			{ name: 'seen' },
		],
	},
	{ name: 'tags', columns: [{ name: 'id' }, { name: 'name' }] },
	{ name: 'post_tags', columns: [{ name: 'post_id' }, { name: 'tag_id' }] },
	{
		name: 'categories',
		columns: [{ name: 'id' }, { name: 'name' }, { name: 'parent_id' }],
	},
	{
		name: 'assets',
		columns: [
			{ name: 'id' },
			{ name: 'owner_id' },
			{ name: 'url' },
			{ name: 'type' },
		],
	},
	{
		name: 'sessions',
		columns: [
			{ name: 'id' },
			{ name: 'user_id' },
			{ name: 'token' },
			{ name: 'expires_at' },
		],
	},
	{
		name: 'api_keys',
		columns: [
			{ name: 'id' },
			{ name: 'owner_id' },
			{ name: 'key' },
			{ name: 'scopes' },
		],
	},
	{
		name: 'transactions',
		columns: [
			{ name: 'id' },
			{ name: 'user_id' },
			{ name: 'amount' },
			{ name: 'status' },
			{ name: 'created_at' },
		],
	},
	{
		name: 'invoices',
		columns: [
			{ name: 'id' },
			{ name: 'user_id' },
			{ name: 'total' },
			{ name: 'due_date' },
		],
	},
	{
		name: 'payments',
		columns: [
			{ name: 'id' },
			{ name: 'invoice_id' },
			{ name: 'method' },
			{ name: 'paid_at' },
		],
	},
	{
		name: 'subscriptions',
		columns: [
			{ name: 'id' },
			{ name: 'user_id' },
			{ name: 'plan' },
			{ name: 'status' },
		],
	},
	{
		name: 'plans',
		columns: [
			{ name: 'id' },
			{ name: 'name' },
			{ name: 'price' },
			{ name: 'features' },
		],
	},
	{
		name: 'audit_logs',
		columns: [
			{ name: 'id' },
			{ name: 'actor_id' },
			{ name: 'action' },
			{ name: 'target' },
			{ name: 'created_at' },
		],
	},
	{
		name: 'permissions',
		columns: [{ name: 'id' }, { name: 'name' }, { name: 'description' }],
	},
	{ name: 'roles', columns: [{ name: 'id' }, { name: 'name' }] },
	{
		name: 'role_permissions',
		columns: [{ name: 'role_id' }, { name: 'permission_id' }],
	},
	{
		name: 'events',
		columns: [
			{ name: 'id' },
			{ name: 'title' },
			{ name: 'start_at' },
			{ name: 'end_at' },
			{ name: 'location' },
		],
	},
	{
		name: 'attendees',
		columns: [
			{ name: 'id' },
			{ name: 'event_id' },
			{ name: 'user_id' },
			{ name: 'status' },
		],
	},
	{
		name: 'feeds',
		columns: [
			{ name: 'id' },
			{ name: 'source' },
			{ name: 'payload' },
			{ name: 'received_at' },
		],
	},
	{
		name: 'metrics',
		columns: [
			{ name: 'id' },
			{ name: 'name' },
			{ name: 'value' },
			{ name: 'collected_at' },
		],
	},
	{
		name: 'health_checks',
		columns: [
			{ name: 'id' },
			{ name: 'service' },
			{ name: 'status' },
			{ name: 'checked_at' },
		],
	},
	{
		name: 'feature_flags',
		columns: [{ name: 'id' }, { name: 'key' }, { name: 'enabled' }],
	},
	{
		name: 'experiments',
		columns: [
			{ name: 'id' },
			{ name: 'name' },
			{ name: 'variant' },
			{ name: 'started_at' },
		],
	},
	{
		name: 'experiment_results',
		columns: [{ name: 'experiment_id' }, { name: 'metric' }, { name: 'value' }],
	},
	{
		name: 'search_index',
		columns: [{ name: 'id' }, { name: 'document' }, { name: 'rank' }],
	},
	{
		name: 'cache_entries',
		columns: [{ name: 'key' }, { name: 'value' }, { name: 'expires_at' }],
	},
	{
		name: 'schedules',
		columns: [
			{ name: 'id' },
			{ name: 'job_name' },
			{ name: 'cron' },
			{ name: 'next_run' },
		],
	},
	{
		name: 'jobs',
		columns: [
			{ name: 'id' },
			{ name: 'type' },
			{ name: 'payload' },
			{ name: 'status' },
			{ name: 'attempts' },
		],
	},
	{
		name: 'job_history',
		columns: [
			{ name: 'job_id' },
			{ name: 'ran_at' },
			{ name: 'duration_ms' },
			{ name: 'status' },
		],
	},
	{
		name: 'settings',
		columns: [{ name: 'key' }, { name: 'value' }, { name: 'scope' }],
	},
	{
		name: 'analytics_sessions',
		columns: [
			{ name: 'id' },
			{ name: 'user_id' },
			{ name: 'started_at' },
			{ name: 'ended_at' },
		],
	},
	{
		name: 'errors',
		columns: [
			{ name: 'id' },
			{ name: 'message' },
			{ name: 'stack' },
			{ name: 'reported_at' },
		],
	},
	{
		name: 'backups',
		columns: [{ name: 'id' }, { name: 'blob_url' }, { name: 'created_at' }],
	},
	{
		name: 'migrations',
		columns: [{ name: 'id' }, { name: 'name' }, { name: 'applied_at' }],
	},
	{
		name: 'locks',
		columns: [{ name: 'key' }, { name: 'owner' }, { name: 'expires_at' }],
	},
	{
		name: 'integration_tokens',
		columns: [
			{ name: 'id' },
			{ name: 'service' },
			{ name: 'token' },
			{ name: 'created_at' },
		],
	},
];
