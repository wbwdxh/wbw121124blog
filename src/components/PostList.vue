<script setup>
const posts = await fetch('./postlist.json').then(res => res.json()).then(data => data.posts);
</script>

<template>
	<div v-for="post in posts" :key="post.id" class=" transition-shadow duration-300 mt-6">
		<a :href="`?path=/post/${post.id}`"
			class="block shadow-sm hover:shadow-md  bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 p-6 rounded-lg transition-colors">
			<h3 class="text-xl font-bold text-indigo-600 dark:text-indigo-500 mb-2">
				{{ post.title }}
			</h3>
			<p class="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">{{ post.summary }}</p>
			<div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
				<span>{{ post.date }}</span>
				<div class="flex flex-wrap gap-1">
					<span v-for="tag in post.tags" :key="tag"
						class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full text-xs">
						{{ tag }}
					</span>
				</div>
			</div>
		</a>
	</div>
</template>
