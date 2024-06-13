<template>
  <div class="container">
    <h1 style="text-align: center">EB-2 NIW Timeline</h1>

    <div class="row">
      <div class="col-lg-4">
        <img style="width: 100%" src="../assets/resources/greenStamp.webp" />
      </div>

      <div class="col-lg-5"> 
        <h6 style="margin-bottom: 2rem; font-weight: 600">We submitted our application through concurrent filing:</h6>

        <h6 style="font-weight: 600">10-14-2019 (received date) 10-22-2019 (notice date)</h6>

        <ul class="features-list">
            <li><vue-feather type="check"></vue-feather>I-140 received from USCIS, with priority date given</li>
            <li><vue-feather type="check"></vue-feather>I-485 received from USCIS</li>
            <li><vue-feather type="check"></vue-feather>I-765 received from USCIS (EAD)</li>
            <li><vue-feather type="check"></vue-feather>I-131 received from USCIS (travel)</li>
        </ul>

        <h6 style="font-weight: 600">11-01-2019</h6>
        <ul class="features-list">
            <li><vue-feather type="check"></vue-feather>Notice date for biometrics to take place on 18th November</li>
        </ul>

        <h6 style="font-weight: 600">11-18-2019</h6>
        <ul class="features-list">
            <li><vue-feather type="check"></vue-feather>Biometrics appointment</li>
        </ul>

        <h6 style="font-weight: 600">12-23-2019</h6>
        <ul class="features-list">
            <li><vue-feather type="check"></vue-feather>EAD approved</li>
            <li><vue-feather type="check"></vue-feather>Travel document approved</li>
        </ul>

        <h6 style="font-weight: 600">3-5-2020</h6>
        <ul class="features-list">
            <li><vue-feather type="check"></vue-feather>I-140 approved</li>
        </ul>

        <h6 style="font-weight: 600">7-30-2020</h6>
        <ul class="features-list">
            <li><vue-feather type="check"></vue-feather>I-485 approved</li>
        </ul>

        <h6 style="font-weight: 600">8-19-2020</h6>
        <ul class="features-list">
            <li><vue-feather type="check"></vue-feather>Received green card</li>
        </ul>    
      </div>

      <div class="col-12" style="margin-top: 2rem">
          <div><span style="font-weight: 600">NOTE: </span>Keep in mind that the waiting times in 2019/2020 differed from what they are currently. Future processing times are unpredictable, so it's essential to plan accordingly. Additionally, premium processing wasn't an option back then. While personal interview with USCIS officer was typically required, it was waived in our case.</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTimeline',
}
</script>
