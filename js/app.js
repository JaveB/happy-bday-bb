const BirthdayView = Backbone.View.extend({
  el: '#birthday-card',

  events: {
    'click button': 'showWish'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    const html = `
      <h1>🎉❤️Happy Birthday Bibe Lobs!!❤️🎉</h1>
      <p>I am still practicing how to cod cod, but me made something simpol hehe alabyows!</p>
      <button>Click for a surprise 🎁</button>
      
    `;
    this.$el.html(html);
  },

  showWish: function () {
      window.location.href = './suprise.html';
  }
});

new BirthdayView();
