'use strict';

module.exports = function(Answer) {
  Answer.beforeRemote('create', function(context, user, next) {
    context.args.data.userId = context.req.accessToken.userId;
    next();
  });
};
