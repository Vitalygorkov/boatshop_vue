<template>
<div>
	this component nav

	<ul>
		<li v-for="category in categories" v-if="category.level ==0" :key="category.id"><a :href=category.url>{{ category.name }}</a>
			<ul>
				<li v-for="subcategory in categories" v-if="category.id == subcategory.parent" :key="subcategory.id"><a :href=subcategory.url>{{ subcategory.name }}</a>
					<ul>
						<li v-for="subcategory1 in categories" v-if="subcategory.id == subcategory1.parent" :key="subcategory1.id"><a :href=subcategory1.url>{{ subcategory1.name }}</a>
							<ul>
								<li v-for="subcategory2 in categories" v-if="subcategory1.id == subcategory2.parent" :key="subcategory2.id"><a :href=subcategory2.url>{{ subcategory2.name }}</a>
									<ul>
										<li v-for="subcategory3 in categories" v-if="subcategory2.id == subcategory3.parent" :key="subcategory3.id"><a :href=subcategory3.url>{{ subcategory3.name }}</a>
										</li>
									</ul>
								</li>
							</ul>
						
						</li>
					</ul>
				</li>
			</ul>
		</li>				
	</ul>
</div>
</template>
<script>
export default {
    props: ['categories'],
}


</script>

<style>

</style>