<template>
  <div class="bg-white">
    <header class="custom__header-variant2 column justify-center items-center">
      <h3 class="text-white text-h2 text-weight-bolder custom__heading-white">
        <span class="text-light-green-13">Donate</span>
      </h3>
      <span
        class="text-white text-subtitle1 text-weight-light q-mt-md q-px-xl text-center"
      >
        Our sisters, wives, daughters and new born still die preventable deaths
        due to poverty, ignorance and inadequate reproductive healthcare
        delivery throughout the country especially in rural areas - Maternal
        mortality is a monster that we can jointly defeat. <br />-
        <span class="text-h6 text-weight-light"> Joe Adejo</span></span
      >
    </header>
    <section class="section__about-us">
      <div class="custom__container">
        <div class="row">
          <div class="col">
            <h3
              class="text-center text-h5 text-weight-light custom__heading-black"
            >
              Every
              <span class="text-weight-bolder">Penny Counts</span>
            </h3>
            <div class="text-subtitle1 text-weight-light text-center q-pa-md">
              Through our experience and research we have created educational
              materials to bring people to the knowledge of God and His desire
              concerning living a healthy life by addressing health and maternal
              health from conception to postpartum without complication, with
              scriptural and medical references written in Hausa language and
              English language. One of our missions is to get these materials to
              every home in the Northern States of Nigeria as records show high
              rates of maternal mortality and child morbidity in these areas.
              Your
              <span class="text-green text-weight-bolder">Donations</span> will
              go a long way in helping us achieve our goals.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3
              class="text-center text-h5 text-weight-light custom__heading-black"
            >
              Our
              <span class="text-weight-bolder">Books</span>
            </h3>
            <div class="row">
              <div class="col-md-3 col-sm-6 col-xs-12 q-py-md">
                <q-img height="300px" src="/images/book1.jpg" contain />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12 q-py-md">
                <q-img height="300px" src="/images/book2.jpg" contain />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12 q-py-md">
                <q-img height="300px" src="/images/book3.jpg" contain />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12 q-py-md">
                <q-img height="300px" src="/images/book4.jpg" contain />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-9 col-sm-12 col-xs-12">
            <div class="text-center">
              <q-btn class="q-mt-xl text-primary" no-caps small color="primary" icon="money" type="a" href="https://paystack.com/pay/safemotherhoodfdn/" target="_blank">
                <span class="q-pl-sm">Click Here to Donate</span>
              </q-btn> 
            </div>
            <h3
              class="text-center text-h5 text-weight-light custom__heading-black"
            >
              Our
              <span class="text-weight-bolder">Details</span>
            </h3>
            <div class="text-subtitle1 text-weight-light q-pa-sm">
              <ul>
                <li>
                  <span class="text-weight-bolder q-mr-sm">Account Name:</span>
                  <span class="text-weight-light"
                    >Safe Motherhood Foundation (Naira)</span
                  >
                </li>
                <li>
                  <span class="text-weight-bolder q-mr-sm"
                    >Account Number:</span
                  >
                  <span class="text-weight-light">4212000127</span>
                </li>
                <li>
                  <span class="text-weight-bolder q-mr-sm">Bank Name:</span>
                  <span class="text-weight-light">Ecobank</span>
                </li>
              </ul>
            </div>
            <div class="text-subtitle1 text-weight-light q-pa-sm">
              <ul>
                <li>
                  <span class="text-weight-bolder q-mr-sm">Account Name:</span>
                  <span class="text-weight-light">
                    Safe Motherhood Foundation (Dollar)
                  </span>
                </li>
                <li>
                  <span class="text-weight-bolder q-mr-sm"
                    >Account Number:</span
                  >
                  <span class="text-weight-light">3842020903</span>
                </li>
                <li>
                  <span class="text-weight-bolder q-mr-sm">Bank Name:</span>
                  <span class="text-weight-light">Ecobank</span>
                </li>
                <li>
                  <span class="text-weight-bolder q-mr-sm">Sort Code:</span>
                  <span class="text-weight-light">050110652</span>
                </li>                
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12 row items-center">
            <q-card flat square :style="{ height: '300px' }">
              <img src="/images/donate.svg" height="100%" width="100%" />
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: "style",
    lorem: "Lorem ipsum dolor,",
  }),
};
</script>

<style lang="scss" scoped>
.custom__header-variant2 {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
    url("/images/donate1.jpg");
  -webkit-background: linear-gradient(
      rgba(0, 148, 50, 0.9),
      rgba(0, 148, 146, 0.7)
    ),
    url("/images/preg5.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 52px);
}

.custom__heading-white::after {
  display: block;
  height: 2px;
  width: 10%;
  background-color: #ffffff;
  content: " ";
  margin: 0 auto;
  margin-top: 20px;
  /* margin-bottom: 30px; */
}

.custom__heading-black::after {
  display: block;
  height: 2px;
  width: 10%;
  background-color: #000;
  content: " ";
  margin: 0 auto;
  margin-top: 20px;
  /* margin-bottom: 30px; */
}

.my-card {
  width: 100%;
  max-width: 650px;
}

a {
  text-decoration: none;
  color: #520131;
}
</style>
