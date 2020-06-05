<template>
  <v-app>
    <!-- App.vue -->

   
    <!-- Sizes your content based upon application components -->
    <v-content>
     <Menu v-if="isLogged"/>
      <v-container fluid>

        <router-view></router-view>
        
      </v-container>
    </v-content>

    <v-footer app class="error">
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu'
import { mapState } from 'vuex';

export default {
  name: "App",
  data: () => ({
   
  }),
  components: {
    Menu
  },
  computed:{
    ...mapState(['isLogged'])
  }
};
</script>
