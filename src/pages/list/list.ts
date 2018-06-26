import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SportPage } from '../sport/sport';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('sport');
    //
    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }

    this.items =[
       {
          header:'https://i.pinimg.com/originals/50/66/35/506635afc4cbbdae3328e34912e8bdf3.jpg',
          title:'Football',
          icon:'football',
          description:'Le football, est un sport collectif qui se joue principalement au pied avec un ballon sphérique. Il oppose deux équipes de onze joueurs dans un stade, que ce soit sur un terrain gazonné ou sur un plancher. L\'objectif de chaque camp est de mettre le ballon dans le but adverse, sans utiliser les bras, et de le faire plus souvent que l\'autre équipe.'
       },
       {
          header:'http://www.bhmpics.com/walls/rugby_players-other.jpg',
          title:'Rugby',
          icon:'american-football',
          description:'Le rugby à XV, qui se joue par équipes de quinze joueurs sur le terrain avec des remplaçants, est la variante la plus pratiquée du rugby, famille de sports collectifs, dont les spécificités sont les mêlées et les touches, mettant aux prises deux équipes qui se disputent un ballon ovale, joué à la main et au pied. L\'objectif du jeu est de marquer plus de points que l\'adversaire, par des essais (donnant droit à des transformations), des buts de pénalité ou encore par des drops (coups de pied tombés dans le cours du jeu). De nos jours, l\'essai vaut cinq points et sept s\'il est transformé, le drop et le but (de pénalité) valent trois points chacun.'
       },
    ]

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SportPage, {
      sport: item
    });
  }
}
