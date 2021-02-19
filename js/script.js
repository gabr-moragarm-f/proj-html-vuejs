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
    selectedHeaderNavId: 0,
    userBookingName: '',
    userBookingEmail: '',
    userBookingTelephone: '',
    userBookingLocation: '',
    bookings: {}
  },
  methods:{

  }
});

Vue.config.devtools = true;
