const Slider = require('../Slider/Slider');

function Model() {
  return `
  <div class="model">
    <div class="model__name">
      <span class="model__firstname">Dick</span>
      <span class="model__lastname">Senior</span>
    </div>
    <div class="model__menu">
      <a href="/model" class="model__menuItem">book</a>
      <a href="/polaroids" class="model__menuItem">polaroids</a>
      <a href="https://www.instagram.com/imkrist/" target="_blank" class="model__menuItem">instagram</a>
      <a href="/bookmodel" class="model__menuItem">pdf</a>
    </div>

    <div class="model__book">
      ${Slider()}
    </div>

    <!--
    <div class="model__book">
      <div class="model__info">some info</div>
      <div class="model__photos">
      </div>
    </div>
    -->
    <div class="model__measures">
      <div class="model__measure model__height">
        <div class="measure__title">height:</div>
        <div class="measure__value">188/6'2''</div>
      </div>
      <div class="model__measure model__chest">
        <div class="measure__title">chest:</div>
        <div class="measure__value">98/38'1/2''</div>
      </div>
      <div class="model__measure model__waist">
        <div class="measure__title">waist:</div>
        <div class="measure__value">76/30''</div>
      </div>
      <div class="model__measure model__hips">
        <div class="measure__title">hips:</div>
        <div class="measure__value">92/36''</div>
      </div>
      <div class="model__measure model__shoe">
        <div class="measure__title">shoe:</div>
        <div class="measure__value">38/7</div>
      </div>
      <div class="model__measure model__hair">
        <div class="measure__title">hair:</div>
        <div class="measure__value">Brown</div>
      </div>
      <div class="model__measure model__eyes">
        <div class="measure__title">eyes:</div>
        <div class="measure__value">Green</div>
      </div>
    </div>
  </div>
  `
}

module.exports = Model;



// <div class="viewer">
//   <div class="viewer__photos">
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//   </div>
//   <div class="viewer__controls">
//     <div class="viewer__prev"></div>
//     <div class="viewer__next"></div>
//   </div>
// </div>
// <style>
//   .viewer {
//     margin-top: 80px;
//     height: 600px;
//   }

//   .viewer__photos {
//     height: 100%;
//     display: flex;
//     width: 100%;
//     overflow: scroll;
//   }

//   .viewer__photo {
//     width: 600px;
//     height: 100%;
//     margin-right: 10px;
//     background: gray;
//     flex-shrink: 0;
//   }
// </style>
// <script>
// </script>
