package com.newproject;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    SplashScreen.show(this);
  }

  @Override
  protected String getMainComponentName() {
    return "NewProject";
  }

}
