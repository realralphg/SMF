<template>
  <div class="bg-white">
    <header class="custom__header-variant3 column justify-center items-center">
      <h3 class="text-white text-h2 text-weight-bolder custom__heading-white">
        <span class="text-yellow-12">Contact Us</span>
      </h3>
      <span
        class="text-white text-h5 text-weight-bold q-mt-md q-px-xl text-center"
      >
        hi@safemotherhoodfdn.org</span
      >
      <span
        class="text-white text-h5 text-weight-bold q-mt-md q-px-xl text-center"
      >
        +2348034057915, +2348054464343</span
      >
      <span
        class="text-white text-h6 text-weight-bold q-mt-md q-px-xl text-center"
      >
        15B, Jolly Tanko Road, Barnawa, Kaduna - Nigeria</span
      >
    </header>
    <section class="section__about-us">
      <div class="custom__container">
        <h3 class="text-center text-h5 text-weight-light custom__heading-black">
          Consulting
          <span class="text-weight-bolder">Professionals</span>
        </h3>
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-sm">
            <div class="column items-center">
              <q-avatar size="200px">
                <img src="/images/makunjola.jpg" />
              </q-avatar>
              <span class="text-h6">Dr. Makanjuola A. Owolabi</span>
              <span class="body1">
                MBBS, D Av Med, MRAeS, FRSM MACOEM, FWACP (Int. Med -Med),
                FAsMA, FIMC
              </span>
              <span class="body2">
                Aerospace / Aviation Medicine & Human Factors
              </span>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-sm">
            <div class="column items-center">
              <q-avatar size="200px">
                <img src="/images/caleb1.jpg" />
              </q-avatar>
              <span class="text-h6">Dr. Caleb Mohammed (MBBS FWACS)</span>
              <span class="body1">
                Senior Lecturer & Consultant Obstetrician / Gynecologist
              </span>
              <span class="body2">
                Barau Dikko Teaching Hospital, Kaduna State
              </span>
            </div>
          </div>
        </div>
        <div class="row q-my-xl">
          <div class="col-md-4 col-sm-12 col-xs-sm">
            <div class="column items-center">
              <q-avatar size="200px">
                <img src="/images/placeholder.jpg" />
              </q-avatar>
              <span class="text-h6">Dr. Ejeh Paul Ogwuche</span>
              <span class="body1"
                >MBBS ; FMCOG (Fellow of the national post graduate medical
                college of Nigeria( Obstetrics & gynaecology)
              </span>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-sm">
            <div class="column items-center">
              <q-avatar size="200px">
                <img src="/images/placeholder.jpg" />
              </q-avatar>
              <span class="text-h6">Dr. Musa Philomena BmB ch Jos, 1990</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-sm">
            <div class="column items-center">
              <q-avatar size="200px">
                <img src="/images/placeholder.jpg" />
              </q-avatar>
              <span class="text-h6">Professor Lydia Airede</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3
              class="text-center text-h5 text-weight-light custom__heading-black"
            >
              We will love to hear from
              <span class="text-weight-bolder">You!</span>
            </h3>
            <div class="row justify-center q-mb-md">
              <div class="col-6">
                <q-input type="text" square outlined label="Your Name*" />
              </div>
            </div>
            <div class="row justify-center q-mb-md">
              <div class="col-6">
                <q-input type="email" square outlined label="Your Email*" />
              </div>
            </div>
            <div class="row justify-center">
              <div class="col-6">
                <q-input
                  type="textarea"
                  square
                  outlined
                  label="Your Message*"
                />
              </div>
            </div>
            <div class="row justify-center q-my-md">
              <div class="col-6">
                <q-btn outline color="black" class="text-black text-capitalize"
                  >Send Message</q-btn
                >
              </div>
            </div>
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
.custom__header-variant3 {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
    url("/images/contact1.jpg");
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
