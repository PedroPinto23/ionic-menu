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
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


export default class Tab3 extends React.Component {
    render() {
        return (
            <>
          <IonHeader>
              <IonToolbar color = 'primary'>
                  <IonButtons slot = 'start'>
                 <IonMenuButton></IonMenuButton>
                 </IonButtons>      
                 <IonTitle>Tab 3</IonTitle>
              </IonToolbar>
          </IonHeader>
         <IonContent>
             <div className = 'ion-padding-about-info'>
                <h4>Just a regular title Tab 3</h4>

                <IonList lines = 'none'>
                    <IonItem>
                        <IonIcon name = 'calendar' slot = 'start'></IonIcon>
                        <IonLabel> Data de nascimento</IonLabel>
                        <IonDatetime displayFormat = 'DD MMM, YYYY' max = '2056' value = {null}></IonDatetime>
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