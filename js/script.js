var app = new Vue({
  el: '#root',
  data:{
    header:{
      menuData:[
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
      selectedId: 0,
    },
    form:{
      inputs:{
        name: '',
        email: '',
        telephone: '',
        location: '',
      },
      style:{
        name: '',
        email: '',
        telephone: ''
      },
      bookings: [],
    },
    progressRingData:[
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
    slider:{
      testimonials: [
        {
          name: 'Sophia Vergara',
          photo: 'testimonial-sophia.png',
          statement: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
        },
        {
          name: 'Harold Saxon',
          photo: 'testimonial-harold.png',
          statement: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
        },
        {
          name: 'Alan Grant',
          photo: 'testimonial-grant.png',
          statement: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
        },
        {
          name: 'Kate Blanchett',
          photo: 'testimonial-kate.png',
          statement: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
        },
        {
          name: 'Kelly Shaddock (087)',
          photo: 'testimonial-kelly.png',
          statement: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
        }
      ],
      index: 0,
      intervalSeconds: 4
    },
    news: [
      {
        title: 'What Car to Start With?',
        image: 'blog-choosecar-700x441.jpg',
        date: 'February 7th, 2019',
        comments: [],
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
      },
      {
        title: 'Avada Driving School Expanding',
        image: 'blogpost-10and2-700x441.jpg',
        date: 'February 7th, 2019',
        comments: [],
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
      }
    ],
    footerData:[
      {
        title: 'contact details',
        subheadings: [
          {
            icon: 'fas fa-home',
            content: '12345 North Main Street, New York, NY 555555'
          },
          {
            icon: 'fas fa-phone',
            content:'1.800.555.6789'
          },
          {
            icon: 'far fa-envelope',
            content:'info@your-domain.com'
          },
          {
            icon: 'fas fa-link',
            content:'Theme-Fusion.com'
          }
        ]
      },
      {
        title: 'courses',
        subheadings: [
          {
            icon: 'far fa-arrow-alt-circle-right',
            content:'Pass Plus'
          },
          {
            icon: 'far fa-arrow-alt-circle-right',
            content:'Intensive Course'
          },
          {
            icon: 'far fa-arrow-alt-circle-right',
            content:'Automatic'
          },
          {
            icon: 'far fa-arrow-alt-circle-right',
            content:'Instructor Training'
          }
        ]
      }
    ]
  },
  mounted() {
    let that = this;

    setInterval(function () {
      if (that.slider.index >= (that.slider.testimonials.length - 1)) {
        that.slider.index = 0;
      }else {
        that.slider.index++;
      }
    }, (this.slider.intervalSeconds * 1000));
  },
  methods:{
    hasNumber:function(string) {
      return /\d/.test(string);
    },
    formValidation: function() {
      let validationFlag = true;

      if (this.form.inputs.name === '') {
        this.form.style.name = 'required';

        validationFlag = false;
      }

      if (this.hasNumber(this.form.inputs.name)) {
        this.form.style.name = 'required';

        validationFlag = false;
      }

      if (this.form.inputs.email === '') {
        this.form.style.name = 'required';

        validationFlag = false;
      }

      if (!this.form.inputs.email.includes('@')) {
        this.form.style.email = 'required';

        validationFlag = false;
      }

      if (isNaN(this.form.inputs.telephone) && this.form.inputs.telephone !== '') {
        this.form.style.telephone = 'required';

        validationFlag = false;
      }

      if (validationFlag) {
        this.form.style.name = '';

        this.form.style.email = '';

        this.form.style.telephone = '';

        return true;
      }

      return false;
    },
    sendBooking: function() {
      if (this.formValidation()) {
        this.form.bookings.push({
          name: this.form.inputs.name,
          email: this.form.inputs.email,
          telephone: this.form.inputs.telephone,
          location: this.form.inputs.location
        });

        alert('Book done')
      }else{
        alert('Check the entered data');
      }

    },
    isIconFull: function(index) {
      if (index === this.slider.index) {
        return 'fas';
      }

      return 'far';
    },
    returnTop: function() {
      window.scrollTop = 0;
      alert()
    }
  }
});

Vue.config.devtools = true;
