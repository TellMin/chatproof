import type { Actions } from './$types';
import { Configuration, OpenAIApi } from 'openai';
import type { CreateChatCompletionRequest } from 'openai';

export const actions: Actions = {
	chat: async ({ request }) => {
		const formData = await request.formData();
		const chat = await chatAI(formData.get('message')?.toString());
		return {
			text: chat
		};
	}
};

const chatAI = async (chat: string | undefined) => {
	if (!chat) return;
	const configuration = new Configuration({
		apiKey: import.meta.env.VITE_OPENAI_API_KEY
	});
	const openai = new OpenAIApi(configuration);

	const request: CreateChatCompletionRequest = {
		model: 'gpt-3.5-turbo',
		messages: [
			{ role: 'assistant', content: 'You are Developer.' },
			{ role: 'assistant', content: 'And create powerful code.' },
			{ role: 'user', content: chat }
		]
	};

	const chatCompletion = await openai.createChatCompletion(request);

	return chatCompletion.data.choices[0].message?.content;
};
