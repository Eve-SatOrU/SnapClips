// get audio
exports.getAudio =(req, res, next) => {
  const user = req.session.user;
  res.render('audio', {
    path: '/audio',
    pageTitle: 'audio',user
  });
}
// lessssssss gooo this is sooo ezz XDDD the eaziest thing i have ever done in my life