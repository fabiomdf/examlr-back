'use strict';

module.exports = function(Group) {
  /** Este remotehook inclui o id do usuario logado na tabela de grupos quando um grupo é criado */
  Group.beforeRemote('create', function(context, user, next) {
    // context.args.data.createdAt = Date.now();
    context.args.data.userId = context.req.accessToken.userId;
    next();
  });
};
