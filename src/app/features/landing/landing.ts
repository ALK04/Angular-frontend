import { Component } from '@angular/core';
import { SiteHeader } from '../../shared/components/site-header/site-header';
import { SiteFooter } from '../../shared/components/site-footer/site-footer';
import { Hero } from './components/hero/hero';
import { Manifesto } from './components/manifesto/manifesto';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Catalogue } from './components/catalogue/catalogue';
import { FeatureList } from './components/feature-list/feature-list';
import { GeneratorPreview } from './components/generator-preview/generator-preview';
import { Output } from './components/output/output';
import { Faq } from './components/faq/faq';
import { Closing } from './components/closing/closing';

@Component({
  selector: 'app-landing',
  imports: [
    SiteHeader,
    Hero,
    Manifesto,
    HowItWorks,
    Catalogue,
    FeatureList,
    GeneratorPreview,
    Output,
    Faq,
    Closing,
    SiteFooter,
  ],
  templateUrl: './landing.html',
})
export class Landing {}
