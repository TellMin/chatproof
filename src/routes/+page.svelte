<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="card p-4 text-surface-700-200-token">
	<form method="POST" action="?/chat">
		<label class="label pb-4">
			<h1>Input</h1>
			<textarea name="message" class="input" placeholder="Input" />
		</label>

		<button type="submit" class="btn btn-sm variant-filled-tertiary">send</button>
	</form>

	<div class="card p-4 mt-4 variant-filled-surface">
		{#if form}
			{form.text}
		{/if}
	</div>
</div>
