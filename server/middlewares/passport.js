const User = require('../models/user');
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.APP_CLIENT_ID,
    clientSecret: process.env.APP_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    // Here, find or create a user in your database
    const email = profile.emails[0].value;
    const username = profile.displayName;
    let user = await User.findOne({ email: email });
    if (!user) {
      user = await new User({ email: email, googleId: profile.id,  username: username /* other fields */ }).save();
    }
    return cb(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

