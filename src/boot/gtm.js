
import gtm from 'src/components/gtm';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ( { app, router, Vue } ) => {
  // something to do
  router.afterEach((to, from) => {
    gtm.logPage(to.path);
  })
}
