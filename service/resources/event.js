var Event = {
  public: false,
  icon: 'clock',
  description: 'A step in a Lesson',
  attributes: {
    time: { type: Number },
    resource: { type: String , ref: 'Molecule' }
  }
};

module.exports = Event;
