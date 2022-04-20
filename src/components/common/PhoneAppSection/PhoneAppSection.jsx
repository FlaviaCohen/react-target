import appstoreButton from 'assets/appstore_button.svg';
import facebook from 'assets/facebook.svg';
import iphone6 from 'assets/iphone6.svg';
import play from 'assets/play.svg';
import twitter from 'assets/twitter.svg';

const PhoneAppSection = () => {
  return (
    <div className="signUp__right">
      <img className="signUp__svg-iphone6" src={iphone6} alt="iphone6" />
      <img className="signUp__svg-play" src={play} alt="play" />
      <img className="signUp__svg-appstore" src={appstoreButton} alt="appstore button" />
      <div className="signUp__social">
        <img className="signUp__svg-facebook" src={facebook} alt="facebook link" />
        <img className="signUp__svg-twitter" src={twitter} alt="twitter link" />
      </div>
    </div>
  );
};

export default PhoneAppSection;
