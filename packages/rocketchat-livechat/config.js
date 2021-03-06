Meteor.startup(function() {
	RocketChat.settings.addGroup('Livechat');

	RocketChat.settings.add('Livechat_enabled', false, { type: 'boolean', group: 'Livechat', public: true });

	RocketChat.settings.add('Livechat_title', 'Rocket.Chat', { type: 'string', group: 'Livechat', public: true });
	RocketChat.settings.add('Livechat_title_color', '#C1272D', {
		type: 'color',
		editor: 'color',
		allowedTypes: ['color', 'expression'],
		group: 'Livechat',
		public: true
	});

	RocketChat.settings.add('Livechat_display_offline_form', true, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		section: 'Offline',
		i18nLabel: 'Display_offline_form'
	});

	RocketChat.settings.add('Livechat_validate_offline_email', true, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		section: 'Offline',
		i18nLabel: 'Validate_email_address'
	});

	RocketChat.settings.add('Livechat_offline_form_unavailable', '', {
		type: 'string',
		group: 'Livechat',
		public: true,
		section: 'Offline',
		i18nLabel: 'Offline_form_unavailable_message'
	});

	RocketChat.settings.add('Livechat_offline_title', 'Leave a message', {
		type: 'string',
		group: 'Livechat',
		public: true,
		section: 'Offline',
		i18nLabel: 'Title'
	});
	RocketChat.settings.add('Livechat_offline_title_color', '#666666', {
		type: 'color',
		editor: 'color',
		allowedTypes: ['color', 'expression'],
		group: 'Livechat',
		public: true,
		section: 'Offline',
		i18nLabel: 'Color'
	});
	RocketChat.settings.add('Livechat_offline_message', '', {
		type: 'string',
		group: 'Livechat',
		public: true,
		section: 'Offline',
		i18nLabel: 'Instructions',
		i18nDescription: 'Instructions_to_your_visitor_fill_the_form_to_send_a_message'
	});
	RocketChat.settings.add('Livechat_offline_email', '', {
		type: 'string',
		group: 'Livechat',
		i18nLabel: 'Email_address_to_send_offline_messages',
		section: 'Offline'
	});
	RocketChat.settings.add('Livechat_offline_success_message', '', {
		type: 'string',
		group: 'Livechat',
		public: true,
		section: 'Offline',
		i18nLabel: 'Offline_success_message'
	});

	RocketChat.settings.add('Livechat_allow_switching_departments', true, { type: 'boolean', group: 'Livechat', public: true, i18nLabel: 'Allow_switching_departments' });
	RocketChat.settings.add('Livechat_show_agent_email', true, { type: 'boolean', group: 'Livechat', public: true, i18nLabel: 'Show_agent_email' });

	RocketChat.settings.add('Livechat_conversation_finished_message', '', {
		type: 'string',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Conversation_finished_message'
	});

	RocketChat.settings.add('Livechat_registration_form', true, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Show_preregistration_form'
	});

	RocketChat.settings.add('Livechat_name_field_registration_form', true, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Show_name_field'
	});

	RocketChat.settings.add('Livechat_email_field_registration_form', true, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Show_email_field'
	});

	RocketChat.settings.add('Livechat_guest_count', 1, { type: 'int', group: 'Livechat' });

	RocketChat.settings.add('Livechat_Room_Count', 1, {
		type: 'int',
		group: 'Livechat',
		i18nLabel: 'Livechat_room_count'
	});

	RocketChat.settings.add('Livechat_agent_leave_action', 'none', {
		type: 'select',
		group: 'Livechat',
		values: [
			{ key: 'none', i18nLabel: 'None' },
			{ key: 'forward', i18nLabel: 'Forward' },
			{ key: 'close', i18nLabel: 'Close' }
		],
		i18nLabel: 'How_to_handle_open_sessions_when_agent_goes_offline'
	});

	RocketChat.settings.add('Livechat_agent_leave_action_timeout', 60, {
		type: 'int',
		group: 'Livechat',
		enableQuery: { _id: 'Livechat_agent_leave_action', value: { $ne: 'none' } },
		i18nLabel: 'How_long_to_wait_after_agent_goes_offline',
		i18nDescription: 'Time_in_seconds'
	});

	RocketChat.settings.add('Livechat_agent_leave_comment', '', {
		type: 'string',
		group: 'Livechat',
		enableQuery: { _id: 'Livechat_agent_leave_action', value: 'close' },
		i18nLabel: 'Comment_to_leave_on_closing_session'
	});

	RocketChat.settings.add('Livechat_webhookUrl', false, {
		type: 'string',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Webhook_URL'
	});

	RocketChat.settings.add('Livechat_secret_token', false, {
		type: 'string',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Secret_token'
	});

	RocketChat.settings.add('Livechat_webhook_on_close', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Send_request_on_chat_close'
	});

	RocketChat.settings.add('Livechat_webhook_on_offline_msg', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Send_request_on_offline_messages'
	});

	RocketChat.settings.add('Livechat_webhook_on_visitor_message', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Send_request_on_visitor_message'
	});

	RocketChat.settings.add('Livechat_webhook_on_agent_message', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Send_request_on_agent_message'
	});

	RocketChat.settings.add('Livechat_webhook_on_capture', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Send_request_on_lead_capture'
	});

	RocketChat.settings.add('Livechat_lead_email_regex', '\\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\\.)+[A-Z]{2,4}\\b', {
		type: 'string',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Lead_capture_email_regex'
	});

	RocketChat.settings.add('Livechat_lead_phone_regex', '((?:\\([0-9]{1,3}\\)|[0-9]{2})[ \\-]*?[0-9]{4,5}(?:[\\-\\s\\_]{1,2})?[0-9]{4}(?:(?=[^0-9])|$)|[0-9]{4,5}(?:[\\-\\s\\_]{1,2})?[0-9]{4}(?:(?=[^0-9])|$))', {
		type: 'string',
		group: 'Livechat',
		section: 'CRM_Integration',
		i18nLabel: 'Lead_capture_phone_regex'
	});

	RocketChat.settings.add('Livechat_Knowledge_Enabled', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'Knowledge_Base',
		public: true,
		i18nLabel: 'Enabled'
	});

	RocketChat.settings.add('Livechat_Knowledge_Apiai_Key', '', {
		type: 'string',
		group: 'Livechat',
		section: 'Knowledge_Base',
		public: true,
		i18nLabel: 'Apiai_Key'
	});

	RocketChat.settings.add('Livechat_Knowledge_Apiai_Language', 'en', {
		type: 'string',
		group: 'Livechat',
		section: 'Knowledge_Base',
		public: true,
		i18nLabel: 'Apiai_Language'
	});

	RocketChat.settings.add('Livechat_history_monitor_type', 'url', {
		type: 'select',
		group: 'Livechat',
		i18nLabel: 'Monitor_history_for_changes_on',
		values: [
			{ key: 'url', i18nLabel: 'Page_URL' },
			{ key: 'title', i18nLabel: 'Page_title' }
		]
	});

	RocketChat.settings.add('Livechat_enable_office_hours', false, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Office_hours_enabled'
	});

	RocketChat.settings.add('Livechat_videocall_enabled', false, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Videocall_enabled',
		i18nDescription: 'Beta_feature_Depends_on_Video_Conference_to_be_enabled',
		enableQuery: { _id: 'Jitsi_Enabled', value: true }
	});

	RocketChat.settings.add('Livechat_enable_transcript', false, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Transcript_Enabled'
	});

	RocketChat.settings.add('Livechat_transcript_message', '', {
		type: 'string',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Transcript_message',
		enableQuery: { _id: 'Livechat_enable_transcript', value: true }
	});

	RocketChat.settings.add('Livechat_open_inquiery_show_connecting', false, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Livechat_open_inquiery_show_connecting',
		enableQuery: { _id: 'Livechat_Routing_Method', value: 'Guest_Pool' }
	});

	RocketChat.settings.add('Livechat_AllowedDomainsList', '', {
		type: 'string',
		group: 'Livechat',
		public: true,
		i18nLabel: 'Livechat_AllowedDomainsList',
		i18nDescription: 'Domains_allowed_to_embed_the_livechat_widget'
	});

	RocketChat.settings.add('Livechat_Facebook_Enabled', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'Facebook'
	});

	RocketChat.settings.add('Livechat_Facebook_API_Key', '', {
		type: 'string',
		group: 'Livechat',
		section: 'Facebook',
		i18nDescription: 'If_you_dont_have_one_send_an_email_to_omni_rocketchat_to_get_yours'
	});

	RocketChat.settings.add('Livechat_Facebook_API_Secret', '', {
		type: 'string',
		group: 'Livechat',
		section: 'Facebook',
		i18nDescription: 'If_you_dont_have_one_send_an_email_to_omni_rocketchat_to_get_yours'
	});

	RocketChat.settings.add('Livechat_RDStation_Token', '', {
		type: 'string',
		group: 'Livechat',
		public: false,
		section: 'RD Station',
		i18nLabel: 'RDStation_Token'
	});

	RocketChat.settings.add('Livechat_Routing_Method', 'Least_Amount', {
		type: 'select',
		group: 'Livechat',
		public: true,
		section: 'Routing',
		values: [
			{key: 'External', i18nLabel: 'External_Service'},
			{key: 'Least_Amount', i18nLabel: 'Least_Amount'},
			{key: 'Guest_Pool', i18nLabel: 'Guest_Pool'}
		]
	});

	RocketChat.settings.add('Livechat_guest_pool_with_no_agents', false, {
		type: 'boolean',
		group: 'Livechat',
		section: 'Routing',
		i18nLabel: 'Accept_with_no_online_agents',
		i18nDescription: 'Accept_incoming_livechat_requests_even_if_there_are_no_online_agents',
		enableQuery: { _id: 'Livechat_Routing_Method', value: 'Guest_Pool' }
	});

	RocketChat.settings.add('Livechat_show_queue_list_link', false, {
		type: 'boolean',
		group: 'Livechat',
		public: true,
		section: 'Routing',
		i18nLabel: 'Show_queue_list_to_all_agents',
		enableQuery: { _id: 'Livechat_Routing_Method', value: { $ne: 'External' } }
	});

	RocketChat.settings.add('Livechat_External_Queue_URL', '', {
		type: 'string',
		group: 'Livechat',
		public: false,
		section: 'Routing',
		i18nLabel: 'External_Queue_Service_URL',
		i18nDescription: 'For_more_details_please_check_our_docs',
		enableQuery: { _id: 'Livechat_Routing_Method', value: 'External' }
	});

	RocketChat.settings.add('Livechat_External_Queue_Token', '', {
		type: 'string',
		group: 'Livechat',
		public: false,
		section: 'Routing',
		i18nLabel: 'Secret_token',
		enableQuery: { _id: 'Livechat_Routing_Method', value: 'External' }
	});
});
