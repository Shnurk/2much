function Bookmodel() {
  return `
    <!doctype html>
    <html>
      <head>
        <style>
          .booklayout {
            margin-top: 50px;
          }

          .booklogo {
            height: 30px;
            width: 100px;
            float: left;
            border: 1px solid #111;
            margin-top: 40px;
          }

          .bookmodel__measures {
            font-family: sans-serif;
            font-weight: 100;
            font-size: 15px;
            margin-top: 15px;
            text-align: center;
          }

          .bookmodel__measure {
            margin: 0 10px;
            display: inline-block;
          }

          .bookmeasure__title {
            margin-right: 5px;
            display: inline-block;
            font-size: 11px;
          }

          .bookmeasure__value {
            font-size: 11px;
            display: inline-block;
          }

          .bookmodel__name {
            font-family: sans-serif;
            margin-top: 40px;
            width: 200px;
            text-align: center;
            margin: 20px auto 0;
          }

          .bookmodel__firstname {
            margin-right: 10px;
            font-size: 20px;
            font-weight: 400;
          }

          .bookmodel__lastname {
            font-size: 20px;
            font-weight: 400;
          }

          .booknewsItem__photos {
            width: 800px;
            text-align: center;
            margin: 10px auto;
          }

          .booknewsItem__photo {
            width: 100%;
          }
          .bookfooter__rights {
            font-family: sans-serif;
            font-size: 9px;
            color: #505050;
            letter-spacing: .5px;
            font-weight: 400;
            margin: 30px 0 0;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="booklayout">
          <div class="bookmodel__name">
            <span class="bookmodel__firstname">Dick</span>
            <span class="bookmodel__lastname">Senior</span>
          </div>
          <div class="booknewsItem__photos">
            <img class="booknewsItem__photo" src="/images/2.jpg" />
          </div>
          <div class="bookmodel__measures">
            <div class="bookmodel__measure model__height">
              <div class="bookmeasure__title">height:</div>
              <div class="bookmeasure__value">188/6'2''</div>
            </div>
            <div class="bookmodel__measure model__chest">
              <div class="bookmeasure__title">chest:</div>
              <div class="bookmeasure__value">98/38'1/2''</div>
            </div>
            <div class="bookmodel__measure model__waist">
              <div class="bookmeasure__title">waist:</div>
              <div class="bookmeasure__value">76/30''</div>
            </div>
            <div class="bookmodel__measure model__hips">
              <div class="bookmeasure__title">hips:</div>
              <div class="bookmeasure__value">92/36''</div>
            </div>
            <div class="bookmodel__measure model__shoe">
              <div class="bookmeasure__title">shoe:</div>
              <div class="bookmeasure__value">38/7</div>
            </div>
            <div class="bookmodel__measure model__hair">
              <div class="bookmeasure__title">hair:</div>
              <div class="bookmeasure__value">Brown</div>
            </div>
            <div class="bookmodel__measure model__eyes">
              <div class="bookmeasure__title">eyes:</div>
              <div class="bookmeasure__value">Green</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

module.exports = Bookmodel;
