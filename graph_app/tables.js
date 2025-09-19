// Mocked tables dataset assigned to window.tables
// Each table: { name: "", columns: [ { name: "", description: "" }, ... ] }
window.tables = [
	{
		name: 'users',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'username', description: 'Username / handle' },
			{ name: 'email', description: 'Email address' },
			{ name: 'created_at', description: 'Record creation timestamp' },
		],
	},
	{
		name: 'profiles',
		columns: [
			{ name: 'user_id', description: 'Foreign key to users.id' },
			{ name: 'display_name', description: 'User display name' },
			{ name: 'bio', description: 'User biography / about text' },
			{ name: 'avatar', description: 'Avatar URL or image reference' },
		],
	},
	{
		name: 'posts',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'author_id', description: 'Foreign key to users.id' },
			{ name: 'title', description: 'Post title' },
			{ name: 'content', description: 'Main post content' },
			{ name: 'published_at', description: 'Publish timestamp' },
		],
	},
	{
		name: 'comments',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'post_id', description: 'Foreign key to posts.id' },
			{ name: 'author_id', description: 'Foreign key to users.id' },
			{ name: 'body', description: 'Comment body text' },
			{ name: 'created_at', description: 'Creation timestamp' },
		],
	},
	{
		name: 'likes',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'user_id', description: 'Foreign key to users.id' },
			{ name: 'post_id', description: 'Foreign key to posts.id' },
			{ name: 'created_at', description: 'When the like was created' },
		],
	},
	{
		name: 'follows',
		columns: [
			{ name: 'follower_id', description: 'User who follows (foreign key)' },
			{ name: 'followee_id', description: 'User being followed (foreign key)' },
			{
				name: 'since',
				description: 'Since when the follow started (timestamp or date)',
			},
		],
	},
	{
		name: 'messages',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'from_id', description: 'Sender user id (foreign key)' },
			{ name: 'to_id', description: 'Recipient user id (foreign key)' },
			{ name: 'message', description: 'Message content' },
			{ name: 'sent_at', description: 'Sent timestamp' },
		],
	},
	{
		name: 'notifications',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'user_id', description: 'Recipient user id (foreign key)' },
			{ name: 'type', description: 'Notification type' },
			{ name: 'data', description: 'Payload / metadata' },
			{ name: 'seen', description: 'Seen flag' },
		],
	},
	{
		name: 'tags',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Tag name' },
		],
	},
	{
		name: 'post_tags',
		columns: [
			{ name: 'post_id', description: 'Foreign key to posts.id' },
			{ name: 'tag_id', description: 'Foreign key to tags.id' },
		],
	},
	{
		name: 'categories',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Category name' },
			{ name: 'parent_id', description: 'Parent category id (nullable)' },
		],
	},
	{
		name: 'assets',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'owner_id', description: 'Owner user id (foreign key)' },
			{ name: 'url', description: 'Resource URL' },
			{ name: 'type', description: 'Asset type' },
		],
	},
	{
		name: 'sessions',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'user_id', description: 'User id (foreign key)' },
			{ name: 'token', description: 'Session token' },
			{ name: 'expires_at', description: 'Expiration timestamp' },
		],
	},
	{
		name: 'api_keys',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'owner_id', description: 'Owner user id (foreign key)' },
			{ name: 'key', description: 'API key value' },
			{ name: 'scopes', description: 'Comma-separated scopes or permissions' },
		],
	},
	{
		name: 'transactions',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'user_id', description: 'User id (foreign key)' },
			{ name: 'amount', description: 'Monetary amount' },
			{ name: 'status', description: 'Transaction status' },
			{ name: 'created_at', description: 'Creation timestamp' },
		],
	},
	{
		name: 'invoices',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'user_id', description: 'User id (foreign key)' },
			{ name: 'total', description: 'Invoice total amount' },
			{ name: 'due_date', description: 'Due date' },
		],
	},
	{
		name: 'payments',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'invoice_id', description: 'Invoice id (foreign key)' },
			{ name: 'method', description: 'Payment method' },
			{ name: 'paid_at', description: 'When payment was made' },
		],
	},
	{
		name: 'subscriptions',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'user_id', description: 'User id (foreign key)' },
			{ name: 'plan', description: 'Plan identifier' },
			{ name: 'status', description: 'Subscription status' },
		],
	},
	{
		name: 'plans',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Plan name' },
			{ name: 'price', description: 'Plan price' },
			{ name: 'features', description: 'Plan features (serialized)' },
		],
	},
	{
		name: 'audit_logs',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'actor_id', description: 'Actor user id (foreign key)' },
			{ name: 'action', description: 'Action performed' },
			{ name: 'target', description: 'Target object' },
			{ name: 'created_at', description: 'Timestamp' },
		],
	},
	{
		name: 'permissions',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Permission name' },
			{ name: 'description', description: 'Permission description' },
		],
	},
	{
		name: 'roles',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Role name' },
		],
	},
	{
		name: 'role_permissions',
		columns: [
			{ name: 'role_id', description: 'Role id (foreign key)' },
			{ name: 'permission_id', description: 'Permission id (foreign key)' },
		],
	},
	{
		name: 'events',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'title', description: 'Event title' },
			{ name: 'start_at', description: 'Start timestamp' },
			{ name: 'end_at', description: 'End timestamp' },
			{ name: 'location', description: 'Event location' },
		],
	},
	{
		name: 'attendees',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'event_id', description: 'Event id (foreign key)' },
			{ name: 'user_id', description: 'User id (foreign key)' },
			{ name: 'status', description: 'Attendance status' },
		],
	},
	{
		name: 'feeds',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'source', description: 'Source of feed' },
			{ name: 'payload', description: 'Payload contents' },
			{ name: 'received_at', description: 'Received timestamp' },
		],
	},
	{
		name: 'metrics',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Metric name' },
			{ name: 'value', description: 'Metric value' },
			{ name: 'collected_at', description: 'Collection timestamp' },
		],
	},
	{
		name: 'health_checks',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'service', description: 'Service name' },
			{ name: 'status', description: 'Health status' },
			{ name: 'checked_at', description: 'Timestamp' },
		],
	},
	{
		name: 'feature_flags',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'key', description: 'Feature key' },
			{ name: 'enabled', description: 'Enabled flag' },
		],
	},
	{
		name: 'experiments',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Experiment name' },
			{ name: 'variant', description: 'Variant identifier' },
			{ name: 'started_at', description: 'Start timestamp' },
		],
	},
	{
		name: 'experiment_results',
		columns: [
			{ name: 'experiment_id', description: 'Experiment id (foreign key)' },
			{ name: 'metric', description: 'Metric name' },
			{ name: 'value', description: 'Metric value' },
		],
	},
	{
		name: 'search_index',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'document', description: 'Indexed document' },
			{ name: 'rank', description: 'Rank or score' },
		],
	},
	{
		name: 'cache_entries',
		columns: [
			{ name: 'key', description: 'Cache key' },
			{ name: 'value', description: 'Cached value' },
			{ name: 'expires_at', description: 'Expiration timestamp' },
		],
	},
	{
		name: 'schedules',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'job_name', description: 'Job name' },
			{ name: 'cron', description: 'Cron expression' },
			{ name: 'next_run', description: 'Next scheduled run' },
		],
	},
	{
		name: 'jobs',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'type', description: 'Job type' },
			{ name: 'payload', description: 'Payload (serialized)' },
			{ name: 'status', description: 'Job status' },
			{ name: 'attempts', description: 'Number of attempts' },
		],
	},
	{
		name: 'job_history',
		columns: [
			{ name: 'job_id', description: 'Job id (foreign key)' },
			{ name: 'ran_at', description: 'Run timestamp' },
			{ name: 'duration_ms', description: 'Duration in milliseconds' },
			{ name: 'status', description: 'Run status' },
		],
	},
	{
		name: 'settings',
		columns: [
			{ name: 'key', description: 'Setting key' },
			{ name: 'value', description: 'Setting value' },
			{ name: 'scope', description: 'Setting scope' },
		],
	},
	{
		name: 'analytics_sessions',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'user_id', description: 'User id (foreign key)' },
			{ name: 'started_at', description: 'Session start' },
			{ name: 'ended_at', description: 'Session end' },
		],
	},
	{
		name: 'errors',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'message', description: 'Error message' },
			{ name: 'stack', description: 'Stack trace' },
			{ name: 'reported_at', description: 'Reported timestamp' },
		],
	},
	{
		name: 'backups',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'blob_url', description: 'Backup blob URL' },
			{ name: 'created_at', description: 'Creation timestamp' },
		],
	},
	{
		name: 'migrations',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'name', description: 'Migration name' },
			{ name: 'applied_at', description: 'Applied timestamp' },
		],
	},
	{
		name: 'locks',
		columns: [
			{ name: 'key', description: 'Lock key' },
			{ name: 'owner', description: 'Lock owner' },
			{ name: 'expires_at', description: 'Expiration timestamp' },
		],
	},
	{
		name: 'integration_tokens',
		columns: [
			{ name: 'id', description: 'Primary identifier' },
			{ name: 'service', description: 'Service name' },
			{ name: 'token', description: 'Integration token' },
			{ name: 'created_at', description: 'Creation timestamp' },
		],
	},
];
