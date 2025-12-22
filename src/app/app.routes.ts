import { Routes } from '@angular/router';
import { TrialOne } from './trial-one/trial-one';
import { TrialThree } from './trial-three/trial-three';
import { TrialTwo } from './trial-two/trial-two';
import { TrialZero } from './trial-zero/trial-zero';
import { DynamicSection } from './dynamic-section/dynamic-section';

export const routes: Routes = [
  { path: '', redirectTo: 'trial-one', pathMatch: 'full' },

  { path: 'trial-zero', component: TrialZero },
  { path: 'trial-one', component: TrialOne },
  { path: 'trial-two', component: TrialTwo },
  { path: 'trial-three', component: TrialThree },
  { path: 'dynamic-section', component: DynamicSection },
];
