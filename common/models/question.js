'use strict';

module.exports = function(Question) {
  /** Este remotehook inclui o id do usuario logado na tabela de questions quando uma pergunta é criada */
  Question.beforeRemote('create', function(context, user, next) {
    // context.args.data.createdAt = Date.now();
    context.args.data.userId = context.req.accessToken.userId;
    next();
  });

    // http://localhost:3000/api/Groups?filter[include][categories][questions]&filter[where][id]=5920c91012623f0b0a16e2c2
    // Question.status = function (cb) {
    //     server.models.Group.find({
    //         fields: {
    //             id: '5920c91012623f0b0a16e2c2'
    //         }
    //     }, cb);
    // }
    // Question.remoteMethod(
    //     'status', {
    //         http: {
    //             path: '/status',
    //             verb: 'get'
    //         },
    //         returns: [
    //             { arg: 'group', type: 'array' }
    //         ],
    //     }
    // )
};
