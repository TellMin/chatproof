import type { ChatCompletionRequestMessage } from 'openai';

export const parseJsonToChatCompletionRequestMessages = (
	json: string
): Array<ChatCompletionRequestMessage> => {
	const parsed = JSON.parse(json);

	if (!isChatCompletionRequestMessages(parsed)) {
		throw new Error(
			'Invalid JSON: The provided JSON does not match the ChatCompletionRequestMessage[] structure.'
		);
	}

	return parsed;
};

export const isChatCompletionRequestMessage = (
	obj: unknown
): obj is ChatCompletionRequestMessage => {
	if (typeof obj !== 'object' || obj === null) {
		return false;
	}

	const objectWithKeys = obj as { [key: string]: unknown };

	return typeof objectWithKeys.role === 'string' && typeof objectWithKeys.content === 'string';
};

export const isChatCompletionRequestMessages = (
	obj: unknown
): obj is Array<ChatCompletionRequestMessage> => {
	if (typeof obj !== 'object' || obj === null) {
		return false;
	}

	if (!Array.isArray(obj)) {
		return false;
	}

	return obj.every(isChatCompletionRequestMessage);
};
