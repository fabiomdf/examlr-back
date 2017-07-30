'use strict';

module.exports = function(Category) {
  Category.beforeRemote('create', function(context, user, next) {
    context.args.data.userId = context.req.accessToken.userId;
    next();
  });
};
