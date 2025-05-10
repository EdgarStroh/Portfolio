import { Routes } from '@angular/router';
import { SingleprojectsComponent } from './main-content/projects/singleprojects/singleprojects.component';
import { ProjectDetailComponent } from './main-content/projects/project-detail/project-detail.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './site-info/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent  } from './site-info/legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'projects/:slug', component: ProjectDetailComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent  },
];


