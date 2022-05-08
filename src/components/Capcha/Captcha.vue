 <template>
  <div class="wrapper">
    <header>Captcha in JavaScript</header>
    <div class="captcha-area">
      <div class="captcha-img">
        <!-- <img src="captcha-bg.png" alt="Captch Background" /> -->
        <span class="captcha">{{captchaValue}}</span>
      </div>
      <button class="reload-btn"><i class="fas fa-redo-alt"></i></button>
    </div>
    <v-form action="#" class="input-area">
      <v-text-field
        type="text"
        placeholder="Enter captcha"
        maxlength="6"
        spellcheck="false"
        required
        v-model="inputValue"
        
      />
      <v-btn class="check-btn" v-on:click="checkCaptcha">Check</v-btn>
    </v-form>
    <span>{{inputValue}}</span>
    <div class="status-text"></div>
  </div>
</template>
 
 <script>
export default {
  data: () => ({
    allCharacters: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ],

    captchaValue: '',
    inputValue: ""
  }),
  methods: {
    getCaptcha() {
      for (var i = 0; i < 6; i++) {
        const randomCharacter = this.allCharacters[Math.floor(Math.random() * this.allCharacters.length)];
        this.captchaValue += randomCharacter;
          // console.log(randomCharacter)
          // console.log(this.captchaValue)
      }
    },
    checkCaptcha(e) {
         e.preventDefault();
         if(this.inputValue === this.captchaValue) {
              return console.log('true')
         } else console.log('false')
    }
  },

    created() {
         this.getCaptcha()
    },
};
</script>
 
 <style>
 .wrapper {
      background-color: antiquewhite;
      width: 300px;
      margin: 0 auto;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
 }
 .captcha-img {
      display: flex;
      justify-content: center;
      background-color: brown;
      color: white;
      height: 50px;
      align-items: center;
 }
</style>