/* global q */
/* global skin */

;(() => {

skin.join = {
  render: renderJoin
}

function renderJoin(success) {
  if (success) {
    return html(`
      <div class="titleBlock" style="
        font-weight: 300;
        text-align: center;
        height: 400px;
        line-height: 400px;
      ">
        Thank you :)
      </div>
    `)
  }

  return html(`
    <form class="join" action="/join" method="POST" onsubmit="Join._onSubmit(event)">
      <div class="titleBlock">Application</div>
      <div class="join__requirements">
        We are open to anyone who over 14 years old.<br/>
        Your height should be above 170cm for women and 182 for men.
      </div>
      <div class="join__blocks">
        <div class="join__leftBlock">
          <div class="join__infoLine">
            <div class="join__titleLine">Name</div>
            <input class="join__input" maxlength="50" name="name" required />
          </div>
          <div class="join__infoLine">
            <div class="join__titleLine">City</div>
            <input class="join__input" maxlength="50" name="city" required />
          </div>
          <div class="join__infoLine">
            <div class="join__titleLine">Phone</div>
            <input class="join__input" maxlength="50" type="tel" name="phone" required />
          </div>
          <div class="join__infoLine">
            <div class="join__titleLine">Mail</div>
            <input class="join__input" maxlength="50" type="email" name="email" required />
          </div>
          <div class="join__infoLine join__infoLine_socials">
            <div class="join__titleLine">Social</div>
            <input class="join__input" maxlength="50" name="social" placeholder="instagram / fb / vk" required />
          </div>
          <!--
          <div class="join__infoLine">
            <div class="join__titleLine">Gender</div>
            <label>
              <input class="join__inputGender" maxlength="10" name="gender" value="male" type="radio" required />
              <span class="gender">male</span>
            </label>
            <label>
              <input class="join__inputGender" maxlength="10" name="gender" value="female" type="radio" required />
              <span class="gender">female</span>
            </label>
          </div>
          -->
        </div>
        <div class="join__measureBlock">
          <div class="join__measure">
            <div class="join__titleLine">Height</div>
            <input class="join__input join__inputNumber" maxlength="3" name="height" required />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Chest</div>
            <input class="join__input join__inputNumber" maxlength="2" name="chest" required />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Age</div>
            <input class="join__input join__inputNumber" maxlength="2" name="age" required />
          </div>
        </div>
        <div class="join__measureBlock">
          <div class="join__measure">
            <div class="join__titleLine">Waist</div>
            <input class="join__input join__inputNumber" maxlength="2" name="waist" required />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Hips</div>
            <input class="join__input join__inputNumber" maxlength="2" name="hips" required />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Shoe</div>
            <input class="join__input join__inputNumber" maxlength="2" name="shoe" required />
          </div>
        </div>
      </div>
      <div class="uploadPhotos">
        <div class="upload__photo">
          <div class="upload__imgSample" style="background-image: url('/images/join_0.jpg')"></div>
          <div class="upload__button">Upload</div>
        </div>
        <div class="upload__photo">
          <div class="upload__imgSample" style="background-image: url('/images/join_1.jpg')"></div>
          <div class="upload__button">Upload</div>
        </div>
        <div class="upload__photo">
          <div class="upload__imgSample" style="background-image: url('/images/join_2.jpg')"></div>
          <div class="upload__button">Upload</div>
        </div>
        <div class="upload__photo">
          <div class="upload__imgSample" style="background-image: url('/images/join_3.jpg')"></div>
          <div class="upload__button">Upload</div>
        </div>
      </div>
      <div class="join__titleRequirements">
        Things to keep in mind:</br>
      </div>
      <div class="join__requirements">
        1. Do not pose</br>
        2. Shoot with a simple background behind you</br>
        3. Wear a swimsuit</br>
        4. Keep your hair pulled back</br>
        5. Be natural, no make up!</br>
        <button class="button__submit" type="submit">Submit</button>
      </div>
    </form>
  `)
}

function html (str) {
  return str
}

})()
