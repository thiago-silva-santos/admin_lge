 <template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(item, i) in admins" :key="i" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(item, i) in cruds" :key="i" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>
 
 <script>
// import LinkMenu from "./Menu/LinkMenu.vue";
// import MenuListNew from "@/components/MenuListNew.vue";

export default {
  name: "MenuListNew",
  components: {
    // LinkMenu,
    //MenuListNew,
  },
  props: {
    items: {
      type: Array,
    },
  },

  data: () => ({
    admins: [
      { title: "Child 1", icon: "mdi-home", path: "/Home" },
      { title: "Child 2", icon: "mdi-home", path: "/About" },
      { title: "Child 3", icon: "mdi-home", path: "/Home" },
    ],
    cruds: [
      { title: "Child 1", icon: "mdi-home", path: "/Home" },
      { title: "Child 2", icon: "mdi-home", path: "/About" },
      { title: "Child 3", icon: "mdi-home", path: "/Home" },
    ],
  }),
  methods: {
    hasChildren(item) {
      return item.children?.length > 0;
    },
  },
};
</script>
 
 <style scoped>
.v-list {
  padding: 0 !important;
}
.menuHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  height: 80px;
}
</style>
