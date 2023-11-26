exports.ConvertChosenTime = (str) => {
  const date = new Date(str);
  date.setHours(date.getHours() + 5.5);
  date.setMinutes(date.getMinutes() + 30);
  let hour = date.getHours();
  const minutes = date.getMinutes();
  let end = 'AM';
  if (hour >= 12) {
    hour -= 12;
    end = 'PM';
  }
  const JoinedTime = [hour, minutes].join(':');
  return `${JoinedTime} ${end}`;
};



exports.convert = (str) => {
  const date = new Date(str);
  date.setHours(date.getHours() + 5);
  date.setMinutes(date.getMinutes() + 30);
  const mnth = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return [day, mnth, date.getFullYear()].join('-');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('back');
};

 

exports.isAuthorizedDoctor = (req, res, next) => {
  if (
    req.isAuthenticated() &&
    req.params.doctorid.toString() === req.user._id.toString()
  ) {
    return next();
  }

  return res.redirect('back');
};

exports.isAuthorizedPatient = (req, res, next) => {
  if (
    req.isAuthenticated() &&
    req.params.patientid.toString() === req.user._id.toString()
  ) {
    return next();
  }

  return res.redirect('back');
};


