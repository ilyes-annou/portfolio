import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Intro } from "./intro/intro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Intro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'thrift-saver-webFront';
  public blabla ="Bienvenue ! Je m'appelle Ilyès \n Actuellement en recherche d'une mission en tant que développeur Mobile ou FullStack après une experience de 3 ans chez IBM. \n En parallèle, je réalise des projets de développemnt afin d'acquerir de nouvelle compétences et de réaliser une veille technologique active. \n Passioné de photographie, un autre domaine créatif que le développemnt, je profite de mon temps libre pour capturer la beauté de notre monde.";



}

