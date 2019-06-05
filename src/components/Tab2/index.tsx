import React from 'react'
import {
    IonHeader,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonIcon,
    IonList,
    IonSelectOption,
    IonSelect,
    IonItem,
    IonLabel,
    IonDatetime,
    IonContent,
    IonToolbar,
       } from '@ionic/react';

export default class Tab2 extends React.Component {
    state = {
        data: ''
    }
render() {
    return (
        <>
        <IonHeader>
            <IonToolbar color = 'primary'>
                <IonButtons slot = 'start'>
               <IonMenuButton></IonMenuButton>
               </IonButtons>      
               <IonTitle>Tab 2</IonTitle>
            </IonToolbar>
        </IonHeader>
       <IonContent>
           <div className = 'ion-padding-about-info'>
              <h4>Just a regular title Tab 2</h4>

              <IonList lines = 'none'>
                  <IonItem>
                      <IonIcon name = 'calendar' slot = 'start'></IonIcon>
                      <IonLabel> Data de nascimento</IonLabel>
                      <IonDatetime displayFormat = 'DD MMM, YYYY' max = '2056' value = {this.state.data}></IonDatetime>
                  </IonItem>

                  <IonItem>
                      <IonIcon name = 'pin' slot = 'start'></IonIcon>
                      <IonLabel> Selector</IonLabel>
                      <IonSelect>
                           <IonSelectOption value = 'madison'>Madison, WI</IonSelectOption>
                           <IonSelectOption value = 'Austin'>Austin, TX</IonSelectOption>
                           <IonSelectOption value = 'chicago'>Chicago, IL</IonSelectOption>
                           <IonSelectOption value = 'seatle'>Seatle, WA</IonSelectOption>
                      </IonSelect>
                  </IonItem>
              </IonList>
              <p>Apenas um parágrafo</p>
           </div>
       </IonContent>
       </>

    )
}
}