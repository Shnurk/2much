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
        Thank you
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
            <input class="join__input" maxlength="50" name="name" />
          </div>
          <div class="join__infoLine">
            <div class="join__titleLine">City</div>
            <input class="join__input" maxlength="50" name="city" />
          </div>
          <div class="join__infoLine">
            <div class="join__titleLine">Phone</div>
            <input class="join__input" maxlength="50" type="tel" name="phone" />
          </div>
          <div class="join__infoLine">
            <div class="join__titleLine">Mail</div>
            <input class="join__input" maxlength="50" type="email" name="email" />
          </div>
          <div class="join__infoLine join__infoLine_socials">
            <div class="join__titleLine">Social</div>
            <input class="join__input" maxlength="50" name="social" />
          </div>
          <div class="join__infoLine">
            <div class="join__titleLine">Gender</div>
            <label>
              <input class="join__inputGender" maxlength="10" name="gender" value="male" type="radio" />
              <span class="gender">male</span>
            </label>
            <label>
              <input class="join__inputGender" maxlength="10" name="gender" value="female" type="radio" />
              <span class="gender">female</span>
            </label>
          </div>
        </div>
        <div class="join__measureBlock">
          <div class="join__measure">
            <div class="join__titleLine">Height</div>
            <input class="join__input join__inputNumber" maxlength="3" name="height" />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Chest</div>
            <input class="join__input join__inputNumber" maxlength="2" name="chest" />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Age</div>
            <input class="join__input join__inputNumber" maxlength="2" name="age" />
          </div>
        </div>
        <div class="join__measureBlock">
          <div class="join__measure">
            <div class="join__titleLine">Waist</div>
            <input class="join__input join__inputNumber" maxlength="2" name="waist" />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Hips</div>
            <input class="join__input join__inputNumber" maxlength="2" name="hips" />
          </div>
          <div class="join__measure">
            <div class="join__titleLine">Shoe</div>
            <input class="join__input join__inputNumber" maxlength="2" name="shoe" />
          </div>
        </div>
      </div>
      <div class="uploadPhotos">
        <div class="upload__photo">
          <img class="upload__imgSample" src="/images/snap1.jpg" />
          <div class="upload__button">Upload</div>
          <!--
          <input class="upload__input" type="file" onchange="onUploadImageChange(this)" accept="image/jpeg,image/jpg,image/png" />
          -->
        </div>
        <div class="upload__photo">
          <img class="upload__imgSample" src="/images/snap2.jpg" />
          <div class="upload__button">Upload</div>
          <!--
          <input class="upload__input" type="file" onchange="onUploadImageChange(this)" accept="image/jpeg,image/jpg,image/png" />
          -->
        </div>
        <div class="upload__photo">
          <img class="upload__imgSample" src="/images/snap3.jpg" />
          <div class="upload__button">Upload</div>
          <!--
          <input class="upload__input" type="file" onchange="onUploadImageChange(this)" accept="image/jpeg,image/jpg,image/png" />
          -->
        </div>
        <div class="upload__photo">
          <img class="upload__imgSample" src="/images/snap4.jpg" />
          <div class="upload__button">Upload</div>
          <!--
          <input class="upload__input" type="file" onchange="onUploadImageChange(this)" accept="image/jpeg,image/jpg,image/png" />
          -->
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
