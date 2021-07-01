<template>
  <div class="home">
    <h1 class="mainTitle">
        Techn'IT
    </h1>
    <transition name="component-fade">
        <div class="container">
		<table class="table log-consulting-table">
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>IdUser</th>
				</tr>
			</thead>
			<tr v-for="loans in jsonarray">
				<td v-for="loan in loans">{{loan}}</td>
			</tr>
		</table>
	</div>
    </transition>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
 var jsonarray = [ {Date: "2021-07-01 12:00:00", Description: "Description log", IdUser : "1"},
    {Date: "2021-07-01 13:01:00", Description: "Description log", IdUser : "2"},
    {Date: "2021-07-01 13:02:00", Description: "Description log", IdUser : "2"},
    {Date: "2021-07-01 14:03:00", Description: "Description log", IdUser : "3"},
    {Date: "2021-07-01 14:02:00", Description: "Description log", IdUser : "3"}, 
    {Date: "2021-07-01 14:01:00", Description: "Description log", IdUser : "3"}, 
    {Date: "2021-07-01 15:00:00", Description: "Description log", IdUser : "4"}, 
    ];
    const TechniqueHome = defineComponent({

    });
    export default TechniqueHome;
   
</script>