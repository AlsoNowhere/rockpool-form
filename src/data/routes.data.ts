
import { Routes } from '@angular/router';

import { FeedbackForm } from 'src/components/pages/feedback-form/feedback.component';

import { Home } from 'src/components/pages/home/home.component';
import { ThankYou } from 'src/components/pages/thank-you/thank-you.component';

import { NgRoute } from 'src/models/NgRoute.model';

export const routes: Routes = [
    new NgRoute("", Home),
    new NgRoute("feedback", FeedbackForm),
    new NgRoute("thank-you", ThankYou)
];
