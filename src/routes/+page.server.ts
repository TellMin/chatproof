import type { Actions } from './$types';
import { chat } from '$lib/server/chat';
import { parseJsonToChatCompletionRequestMessages } from '$lib/utils';

export const actions: Actions = {
	// send user message to chatbot
	chat: async ({ request }) => {
		// get user message
		const formData = await request.formData();
		const message = formData.get('message')?.toString();

		// get chat history
		const chatHistory = parseJsonToChatCompletionRequestMessages(
			formData.get('chatHistory')?.toString() ?? ''
		);

		// add user message to chat history
		chatHistory.push({ role: 'user', content: message ?? '' });

		// send chat history to chatbot
		const respond = (await chat(chatHistory)) ?? '';

		// add chatbot response to chat history
		chatHistory.push({ role: 'assistant', content: respond });

		return {
			chatHistory: chatHistory
		};
	}
};
