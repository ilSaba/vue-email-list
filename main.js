Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
    mail: [],
},
mounted:
  function () {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
      this.mail.push(response.data.response);
      console.log(this.mail);
      });
    }
  },
});