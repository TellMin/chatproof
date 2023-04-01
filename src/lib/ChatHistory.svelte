<script lang="ts">
	import type { ChatCompletionRequestMessage } from 'openai';
	export let chatHistory: Array<ChatCompletionRequestMessage> | undefined;
</script>

{#if chatHistory}
	{#if chatHistory.length === 0}
				<h2>Let's chat</h2>
	{:else}

	<div class="card p-4 text-surface-700-200-token variant-ghost-surface">
			{#each chatHistory as chat}
			<div class="p-2">

				<div class="card p-4 variant-glass-tertiary">
					<div class="">
						{chat.role}
					</div>
					<div class="">
						{chat.content}
					</div>
				</div>
				</div>	
			{/each}
	</div>
	{/if}

{/if}
