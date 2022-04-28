 <template>
  <div class="menuContainer">
    <div class="menuLinks">
      <v-list>
        <template v-for="(item, index) in items">
          <template v-if="hasChildren(item)">
            <v-list-group
              :key="index"
              prepend-icon="mdi-account-circle"
              no-action
              color="bluemoon"
            >
              <template v-if="hasChildren(item)" v-slot:activator>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </template>
              <template v-for="(child, indexChild) in item.children">
                <template v-if="hasChildren(child)">
                  <sub-group-menu
                    :key="indexChild"
                    :title="child.title"
                    :icon="child.icon"
                    :children="child.children"
                  />
                </template>
                <template v-else>
                  <v-list-item
                    :key="indexChild"
                    @click="$router.push(item.path)"
                    class="children"
                  >
                    <v-list-item-icon>
                      <v-icon>{{ child.icon }} </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ child.title }}</v-list-item-title>
                  </v-list-item>
                </template>
              </template>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item :key="index" @click="$router.push(item.path)">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "MenuListNew",
  props: {
    items: {
      type: Array,
    },
  },
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
.children {
  padding-left: 40px;
}
.menuHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  height: 80px;
}
</style>
