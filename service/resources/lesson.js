var Lesson = {
  icon: 'university',
  description: 'A thing you can learn',
  attributes: {
    name: { type: String , max: 140 },
    description: { type: String },
    events: [ { type: String , ref: 'Event' } ]
  }
};

module.exports = Lesson;
