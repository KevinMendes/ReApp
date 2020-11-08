import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem
} from '@ionic/react';
import { useHistory } from 'react-router';

import './Home.css';


interface Props {

}

export const Home: React.FC<Props> = (props) => {

  const history = useHistory();

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle size={'large'}>ReApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <div>
            <IonButton onClick={(e) => {
              e.preventDefault();
              history.push('/reanimation')
              }}>Réanimation</IonButton>
        </div>
        <div>
            <IonButton>Protocoles</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
