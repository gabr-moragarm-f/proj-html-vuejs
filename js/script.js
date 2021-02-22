var app = new Vue({
  el: '#root',
  data:{
    headerMenuData:[
      {
        name: 'home',
        subMenu: [],
        new: false
      },
      {
        name: 'about',
        subMenu: [],
        new: false
      },
      {
        name: 'prices',
        subMenu: [],
        new: false
      },
      {
        name: 'courses',
        subMenu: [],
        new: true
      },
      {
        name: 'locations',
        subMenu: [],
        new: false
      },
      {
        name: 'blog',
        subMenu: [],
        new: false
      }
    ],
    percentageData:[
      {
        name: 'pass rate',
        percentage: '95'
      },
      {
        name: 'referral rate',
        percentage: '100'
      },
      {
        name: 'accident rate',
        percentage: '0'
      },
    ],
    selectedHeaderNavId: 0,
    userBookingName: '',
    userBookingEmail: '',
    userBookingTelephone: '',
    userBookingLocation: '',
    bookings: [],
    inputNameStyle: '',
    inputEmailStyle: '',
    inputTelephoneStyle: '',
    inputLocationStyle: ''
  },
  methods:{
    hasNumber:function(string) {
      return /\d/.test(string);
    },
    formValidation: function() {
      let validationFlag = true;

      if (this.userBookingName === '') {
        this.inputNameStyle = 'required';

        validationFlag = false;
      }

      if (this.hasNumber(this.userBookingName)) {
        this.inputNameStyle = 'required';

        validationFlag = false;
      }

      if (this.userBookingEmail === '') {
        this.inputNameStyle = 'required';

        validationFlag = false;
      }

      if (!this.userBookingEmail.includes('@')) {
        this.inputEmailStyle = 'required';

        validationFlag = false;
      }

      if (validationFlag) {
        return true;
      }

      return false;
    },
    sendBooking: function() {
      if (this.formValidation()) {
        return;
      }

      this.bookings.push({
        name: this.userBookingName,
        email: this.userBookingEmail,
        telephone: this.userBookingTelephone,
        location: this.userBookingLocation
      });
    },
  }
});

Vue.config.devtools = true;
