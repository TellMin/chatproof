<script lang="ts">
	import type { ActionData } from './$types';
	import ChatHistory from '$lib/ChatHistory.svelte';
	import { ActAsDeveloper } from '$lib/prompts';
	import type { ChatCompletionRequestMessage } from 'openai';
	export let form: ActionData;

	let chatHistory: Array<ChatCompletionRequestMessage> = ActAsDeveloper;

	$: {
		if (form?.chatHistory) {
			chatHistory = form.chatHistory;
		}
	}
</script>

<div class="card p-8 text-surface-700-200-token">
	<form method="POST" action="?/chat">
		<div class="pb-4">
			<ChatHistory chatHistory={chatHistory.filter((s) => s.role !== 'system')} />
		</div>

		<textarea name="message" class="input" placeholder="Input" />

		<button type="submit" class="btn btn-sm variant-filled-tertiary">send</button>

		<input
			hidden
			name="chatHistory"
			value={JSON.stringify(chatHistory)}
			class="input"
			placeholder="Input"
		/>
	</form>
</div>
