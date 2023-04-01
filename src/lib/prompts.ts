import type { ChatCompletionRequestMessage } from 'openai';

export const ActAsDeveloper: Array<ChatCompletionRequestMessage> = [
	{ role: 'system', content: 'You are Developer.' },
	{ role: 'system', content: 'And create powerful code.' }
];

export const LearnEnglish: Array<ChatCompletionRequestMessage> = [
	{ role: 'system', content: 'You are Developer.' },
	{ role: 'system', content: 'And create powerful code.' }
];
