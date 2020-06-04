<template>
  <v-app>
    <!-- App.vue -->

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Luis Mercado</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <router-link
                style="text-decoration: none; color: inherit;"
                :to="{ name: item.name}"
              >{{ item.title }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="error">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app class="error">
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [
      { title: "Retirar Transformador", icon: "note_add",name:'Retirar' },
      { title: "Evaluar Transformador", icon: "build",name:'Solicitar' },
      { title: "Solicitar Solicitud", icon: "send",name:'Solicitar' },
       { title: "Atender Solicitud", icon: "check",name:'Atender' },
       { title: "Historial Solicitud", icon: "search",name:'Historial' },
       { title: "Registrar Usuario", icon: "search",name:'Registrar' }
    ]
  }),
  components: {}
};
</script>
