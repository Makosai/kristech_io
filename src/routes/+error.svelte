<script>
	import { page } from '$app/stores';
</script>

<div class="h-[100vh] w-full flex justify-center items-center">
	<h1>{$page.status}: {$page.error?.message ?? 'Error'}</h1>
</div>
