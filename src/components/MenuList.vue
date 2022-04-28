 <template>
  <div class="menuContainer">
    <div class="menuHeader">
      <v-list-item-avatar width="50" height="50">
        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
      </v-list-item-avatar>
    </div>

    <div class="menuLinks">
      <!-- <v-list
        <menu-items :menus="item.children">

        </menu-items>

        <v-list-item :menus="itens"> </v-list-item>
      </v-list> -->
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" @click="$router.push(item.path)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>

        <v-list>
          <template v-for="(item, index) in items">
            <v-list-group
              :key="index"
              prepend-icon="mdi-account-circle"
              v-if="hasChildren(item)"
            >
              <template v-slot:activator>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </template>

              <v-list-item
                v-for="(item, index) in item.children"
                :key="index"
                @click="$router.push(item.path)"
              >
                <v-list-item-icon>
                  <!-- <v-icon>{{ item.icon }}</v-icon> -->
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>

              <v-list-group no-action sub-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Child da Child</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="(item, i) in admins" :key="i" link>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </template>
        </v-list>
      </v-list>
    </div>
  </div>
</template>
 
 <script>
export default {
  data: () => ({
    drawer: false,

    items: [
      { title: "Home", icon: "mdi-home", path: "/Home" },
      {
        title: "About",
        icon: "mdi-account",
        path: "/About",
      },
      {
        title: "Store",
        icon: "mdi-forum",
        children: [
          { title: "Child 1", path: "/Home" },
          { title: "Child 2", path: "/About" },
          { title: "Child 3", path: "/Home" },
        ],
      },
      {
        title: "Store 2",
        icon: "mdi-forum",
        children: [
          { title: "Child 1", path: "/Home" },
          { title: "Child 2", path: "/About" },
          {
            title: "Child 3",
            path: "/Home",
            children: [
              { title: "Child 1", path: "/Home" },
              { title: "Child 2", path: "/About" },
              { title: "Child 3", path: "/Home" },
            ],
          },
        ],
      },
    ],
  }),
  methods: {
    hasChildren(item) {
      return item.children?.length > 0;
    },
  },
  computed: {
    console: () => console,
    window: () => window,
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
