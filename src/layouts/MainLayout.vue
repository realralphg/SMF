<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-black">
      <q-toolbar class="bg-white text-brown">
        <img
          src="/images/mail.jpeg"
          class="cursor-pointer"
          width="60px"
          height="60px"
          alt=""
        />

        <q-toolbar-title class="text-h6 text-weight-light gt-sm">
          <router-link to="/" tag="span" style="cursor: pointer">
            Safe Motherhood Foundation
          </router-link>
        </q-toolbar-title>

        <q-space />

        <q-btn
          no-caps
          flat
          class="gt-xs row"
          color="grey-9"
          v-for="link in essentialLinks"
          :key="link.id"
          :to="link.to"
          exact
          clickable
        >
          <div class="column q-mr-md text-weight-light">
            <q-item-label>{{ link.label }}</q-item-label>
          </div>
        </q-btn>

        <q-btn
          class="button"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-footer>
      <div class="q-pa-xl bg-black">
        <footer>
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12 q-pt-md">
              <div class="text-body1">
                © 2020 Safe Motherhood Foundation. All rights reserved.
              </div>
              <div class="text-body1">
                <img
                  src="/images/mail.jpeg"
                  class="cursor-pointer"
                  width="150px"
                  height="150px"
                  alt=""
                />
              </div>
              <div class="text-body1">Greysoft Technologies ©</div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                  <div class="text-body1 text-bold text-yellow-12">
                    NAVIGATION
                  </div>
                  <div
                    @click="$router.push('/')"
                    class="text-body1 q-mt-md cursor-pointer"
                  >
                    Home
                  </div>
                  <div
                    @click="$router.push('/about')"
                    class="text-body1 q-mt-md cursor-pointer"
                  >
                    About Us
                  </div>
                  <div
                    @click="$router.push('/product')"
                    class="text-body1 q-mt-md cursor-pointer"
                  >
                    Products
                  </div>
                  <div
                    @click="$router.push('/donate')"
                    class="text-body1 q-mt-md cursor-pointer"
                  >
                    Donate
                  </div>
                  <div
                    @click="$router.push('/contact')"
                    class="text-body1 q-mt-md cursor-pointer"
                  >
                    Contact Us
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                  <div
                    class="text-body1 typo1 text-bold my-font text-yellow-12"
                  >
                    CONNECT
                  </div>
                  <div class="text-body1 typo1 q-mt-md">
                    hi@safemotherhoodfdn.org
                  </div>
                  <div class="text-body1 typo1 q-mt-md">+234 803 405 7915</div>
                  <div class="text-body1 typo1 q-mt-md">+234 805 446 4343</div>
                  <q-btn class="q-mt-sm text-primary" no-caps small outline icon="mail" type="a" href="https://safemotherhoodfdn.org:2096/" target="_blank">
                    <span class="q-pl-sm">Check Mail</span>
                  </q-btn> 
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" :width="250">
      <q-list>
        <q-item-label header class="text-brown text-h5 text-weight-light">
          SMF
        </q-item-label>

        <q-item
          active-class="bg-brown"
          class="text-brown"
          v-for="link in essentialLinks"
          :key="link.id"
          :to="link.to"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,

      essentialLinks: [
        {
          label: "Home",
          icon: "home",
          to: "/",
        },

        {
          label: "About Us",
          icon: "groups",
          to: "/about",
        },
        {
          label: "Products",
          icon: "money",
          to: "/product",
        },

        {
          label: "Donate",
          icon: "favorite",
          to: "/donate",
        },

        {
          label: "Contact Us",
          icon: "phone",
          to: "/contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 600px) {
  .button {
    display: none;
  }
}

@media (max-width: 600px) {
  #breadcrumbs {
    display: none;
  }

  .toolbar-title {
    display: none;
  }
}

.q-router-link--exact-active {
  color: white !important;
}

.fixed-bottom {
  position: absolute;
}

a {
  text-decoration: none;
  color: #26a69a;
}
</style>
