import React from 'react'
import {
    IonApp,
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonButton,
       } from '@ionic/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Tab1 from '../Tab1'      
import Tab2 from '../Tab2'      
import Tab3 from '../Tab3'      

 
class Home extends React.Component {
    render() {
        return (
            <IonApp>
                <IonPage>
                    <IonTabs>
                        <IonRouterOutlet>
                             <Route path = "/:tab(Tab1)" component = {Tab1} exact/>
                             <Route path = "/:tab(Tab2)" component = {Tab2} exact/>
                             <Route path = "/:tab(Tab3)" component = {Tab3} exact/>
                        </IonRouterOutlet>
                        <IonTabBar slot= 'bottom'>
                             <IonTabButton tab = 'home' href = '/tab1'>
                                 <IonIcon name = 'home'/>
                                 <IonLabel>Tab 1</IonLabel>
                             </IonTabButton>
                             <IonTabButton tab = 'settings' href = '/tab2'>
                                 <IonIcon name = 'settings'/>
                                 <IonLabel>Tab 2</IonLabel>
                             </IonTabButton>
                             <IonTabButton tab = 'about' href = '/tab3'>
                                 <IonIcon name = 'information-circle'/>
                                 <IonLabel>Tab 3</IonLabel>
                             </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonPage>
            </IonApp>
        )
    }
}
export default Home