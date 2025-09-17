import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Intro } from "./intro/intro";
import { ProjectCard } from './project-card/project-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Intro, ProjectCard, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'thrift-saver-webFront';
  protected blabla ="Bienvenue ! Je m'appelle Ilyès \n Actuellement en recherche d'une mission en tant que développeur Mobile ou FullStack après une experience de 3 ans chez IBM. \n En parallèle, je réalise des projets de développemnt afin d'acquerir de nouvelle compétences et de réaliser une veille technologique active. \n Passioné de photographie, un autre domaine créatif que le développemnt, je profite de mon temps libre pour capturer la beauté de notre monde.";
  protected projects = [
    {title: 'Thrift Saver',description: 'Application mobile de gestion des calories'},
    {title: 'Slice Em',description: "Jeu d'arène en realite Virtuelle"},
    {title: 'The Grey',description: "Jeu de survie en 3D"}
  ];


}

