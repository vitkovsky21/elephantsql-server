module.exports = (sequelize, Sequelize) => {
  const Forum = sequelize.define("forum", {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    updateTime: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    comments: {
        type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });

  return Forum;
};
