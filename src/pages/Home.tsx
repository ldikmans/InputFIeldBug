import { IonButton, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function isSubmitButtonEnabled() {
    return (username && username.length > 0) && (password && password.length > 0);
  }

  function readValue(){
    console.log('username: ' + username);
    console.log('password: ' + password);
  }

  function handleLoginRequest() {
    console.log('pressed the button');
    setUsername("");
    setPassword("");
  }

  return (
    <IonPage>
      <IonHeader translucent={true} className="page-back-header" >
        <IonToolbar className="ion-no-padding ion-no-margin">
          <IonItem lines="none" className="ion-no-padding" id="login-toolbar-item">
            <IonLabel>Login header</IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>

        <IonItem className="ion-no-padding" lines="none" id="login-title-item-left-aligned">
          Please login
        </IonItem>
        <IonList>
          <IonItem className="ion-no-padding ion-no-margin" lines="none" >
            <IonLabel position="floating">Username</IonLabel>
            <IonInput id="login-form-input-name"
              name="username"
              className="ion-no-padding ion-no-margin"
              value={username}
              onInput={(e: any) => setUsername(e.target.value)}
              autocomplete="on"
              required
              type="text" />
          </IonItem>
          <IonItem className="ion-no-padding ion-no-margin login-background" lines="none" id="login-form-spacing-item" />
          <IonItem className="ion-no-padding ion-no-margin login-form-item" lines="none">
            <IonLabel position="floating">Password</IonLabel>
            {/* Not using clearInput because of https://github.com/ionic-team/ionic-framework/issues/11288 */}
            <IonInput id="login-form-input-password"
              name="password"
              className="ion-no-padding ion-no-margin "
              value={password}
              onInput={(e: any) => setPassword(e.target.value)}
              autocomplete="on"
              type="password"
              clearOnEdit={false} />
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonList className="ion-no-padding login-background" id="login-footer-list">


          <IonItem className="ion-no-padding" id="login-button-item" lines="none">
            <IonButton
              shape="round"
              disabled={!isSubmitButtonEnabled()}
              onClick={event => { handleLoginRequest(); }}>
              Login
            </IonButton>
          </IonItem>
          <IonItem className="ion-no-padding" id="login-button-item" lines="none">
            <IonButton
              shape="round"
              onClick={event => { event.preventDefault(); readValue(); }}>
              Read values
            </IonButton>
          </IonItem>
        </IonList>
      </IonFooter>
    </IonPage>
  );
};

export default Home;


