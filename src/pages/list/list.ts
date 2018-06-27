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
  items: Array<{"title": string, "header": string, "icon": string, "description": string, "location": string, "horaire": string, "type": string, "info": any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('sport');
    //
    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask", 'wifi", 'beer", 'football", 'basketball", 'paper-plane",
    // 'american-football", 'boat", 'bluetooth", 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     "title": 'Item ' + i,
    //     note: 'This is item #' + i,
    //     "icon": this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }

    this.items =[
       {
          "header":"http://getwallpapers.com/wallpaper/full/5/e/8/913458-vertical-basketball-wallpaper-2018-2880x1800-1080p.jpg",
          "title":"Basket-Ball",
          "icon":"basketball",
          "description":"Le basket-ball ou basketball, fréquemment désigné en français par son abréviation basket, est un sport collectif opposant deux équipes de cinq joueurs sur un terrain rectangulaire. L\'objectif de chaque équipe est de faire passer un ballon au sein d\'un arceau de 46 cm de diamètre, fixé à un panneau et placé à 3,05 m du sol : le panier. Chaque panier inscrit rapporte deux points à son équipe, à l\'exception des tirs effectués au-delà de la ligne des trois points qui rapportent trois points et des lancers francs accordés à la suite d\'une faute qui rapportent un point. L\'équipe avec le nombre de points le plus important remporte la partie. Le basket-ball se pratique exclusivement à la main, et les joueurs peuvent se déplacer balle en main en la dribblant au sol ou en effectuant deux pas maximum sans dribbler. L\'équipe en possession du ballon (les attaquants) tente d\'inscrire des points en réalisant des tirs, des double-pas ou des dunks tandis que l\'équipe en défense essaie de les en empêcher en réalisant des interceptions de balle ou des contres. Si le tir échoue, les joueurs des deux équipes tentent d\'attraper la balle au rebond.",
          "info": {
              1: {
                  "location":"Av. François Mauriac",
                  "horaire":"Lundi 18h00-20h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://bsnscb.com/data/out/92/39901986-handball-wallpapers.jpeg",
          "title":"Basket Féminin",
          "icon":"basketball",
          "description":"Le basket-ball ou basketball, fréquemment désigné en français par son abréviation basket, est un sport collectif opposant deux équipes de cinq joueurs sur un terrain rectangulaire. L\'objectif de chaque équipe est de faire passer un ballon au sein d\'un arceau de 46 cm de diamètre, fixé à un panneau et placé à 3,05 m du sol : le panier. Chaque panier inscrit rapporte deux points à son équipe, à l\'exception des tirs effectués au-delà de la ligne des trois points qui rapportent trois points et des lancers francs accordés à la suite d\'une faute qui rapportent un point. L\'équipe avec le nombre de points le plus important remporte la partie. Le basket-ball se pratique exclusivement à la main, et les joueurs peuvent se déplacer balle en main en la dribblant au sol ou en effectuant deux pas maximum sans dribbler. L\'équipe en possession du ballon (les attaquants) tente d\'inscrire des points en réalisant des tirs, des double-pas ou des dunks tandis que l\'équipe en défense essaie de les en empêcher en réalisant des interceptions de balle ou des contres. Si le tir échoue, les joueurs des deux équipes tentent d\'attraper la balle au rebond.",
          "info": {
              1: {
                  "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                  "horaire":"Mardi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://getwallpapers.com/wallpaper/full/5/e/8/913458-vertical-basketball-wallpaper-2018-2880x1800-1080p.jpg",
          "title":"Basket-Ball Compét. IUT",
          "icon":"basketball",
          "description":"Le basket-ball ou basketball, fréquemment désigné en français par son abréviation basket, est un sport collectif opposant deux équipes de cinq joueurs sur un terrain rectangulaire. L\'objectif de chaque équipe est de faire passer un ballon au sein d\'un arceau de 46 cm de diamètre, fixé à un panneau et placé à 3,05 m du sol : le panier. Chaque panier inscrit rapporte deux points à son équipe, à l\'exception des tirs effectués au-delà de la ligne des trois points qui rapportent trois points et des lancers francs accordés à la suite d\'une faute qui rapportent un point. L\'équipe avec le nombre de points le plus important remporte la partie. Le basket-ball se pratique exclusivement à la main, et les joueurs peuvent se déplacer balle en main en la dribblant au sol ou en effectuant deux pas maximum sans dribbler. L\'équipe en possession du ballon (les attaquants) tente d\'inscrire des points en réalisant des tirs, des double-pas ou des dunks tandis que l\'équipe en défense essaie de les en empêcher en réalisant des interceptions de balle ou des contres. Si le tir échoue, les joueurs des deux équipes tentent d\'attraper la balle au rebond.",
          "info": {
              1: {
                  "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                  "horaire":"Lundi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://getwallpapers.com/wallpaper/full/5/e/8/913458-vertical-basketball-wallpaper-2018-2880x1800-1080p.jpg",
          "title":"Basket-Ball Compétition",
          "icon":"basketball",
          "description":"Le basket-ball ou basketball, fréquemment désigné en français par son abréviation basket, est un sport collectif opposant deux équipes de cinq joueurs sur un terrain rectangulaire. L\'objectif de chaque équipe est de faire passer un ballon au sein d\'un arceau de 46 cm de diamètre, fixé à un panneau et placé à 3,05 m du sol : le panier. Chaque panier inscrit rapporte deux points à son équipe, à l\'exception des tirs effectués au-delà de la ligne des trois points qui rapportent trois points et des lancers francs accordés à la suite d\'une faute qui rapportent un point. L\'équipe avec le nombre de points le plus important remporte la partie. Le basket-ball se pratique exclusivement à la main, et les joueurs peuvent se déplacer balle en main en la dribblant au sol ou en effectuant deux pas maximum sans dribbler. L\'équipe en possession du ballon (les attaquants) tente d\'inscrire des points en réalisant des tirs, des double-pas ou des dunks tandis que l\'équipe en défense essaie de les en empêcher en réalisant des interceptions de balle ou des contres. Si le tir échoue, les joueurs des deux équipes tentent d\'attraper la balle au rebond.",
          "info": {
              1: {
                  "location":"Av. François Mauriac",
                  "horaire":"Mardi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://bsnscb.com/data/out/92/39901986-handball-wallpapers.jpeg",
          "title":"Handball",
          "icon":"hand",
          "description":"Le handball est un sport collectif joué à la main où deux équipes de sept joueurs s\'affrontent avec un ballon en respectant plusieurs règles sur un terrain rectangulaire de dimensions 40m par 20m, séparé en deux camps. Le nom est un emprunt de l\'allemand (1912) : die Hand (« la main ») et der Ball (« la balle », mot prononcé comme en français).",
          "info": {
              1: {
                  "location":"Av. François Mauriac",
                  "horaire":"Jeudi 18h00-20h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://bsnscb.com/data/out/92/39901986-handball-wallpapers.jpeg",
          "title":"Handball Féminin",
          "icon":"hand",
          "description":"Le handball est un sport collectif joué à la main où deux équipes de sept joueurs s\'affrontent avec un ballon en respectant plusieurs règles sur un terrain rectangulaire de dimensions 40m par 20m, séparé en deux camps. Le nom est un emprunt de l\'allemand (1912) : die Hand (« la main ») et der Ball (« la balle », mot prononcé comme en français).",
          "info": {
              1: {
                  "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                  "horaire":"Jeudi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://bsnscb.com/data/out/92/39901986-handball-wallpapers.jpeg",
          "title":"Handball Compétition",
          "icon":"hand",
          "description":"Le handball est un sport collectif joué à la main où deux équipes de sept joueurs s\'affrontent avec un ballon en respectant plusieurs règles sur un terrain rectangulaire de dimensions 40m par 20m, séparé en deux camps. Le nom est un emprunt de l\'allemand (1912) : die Hand (« la main ») et der Ball (« la balle », mot prononcé comme en français).",
          "info": {
              1: {
                  "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                  "horaire":"Mardi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://desktopwallpaperbox.com/wallpapers-hd/volleyball-wallpaper-photo-On-High-Resolution-Wallpaper.jpg",
          "title":"Volley-Ball",
          "icon":"basketball",
          "description":"Le volley-ball, ou volleyball, est un sport collectif mettant en jeu deux équipes de six joueurs séparés par un filet, qui s\'affrontent avec un ballon sur un terrain rectangulaire de 18 mètres de long sur 9 mètres de large. Avec 269 millions de pratiquants, il s\'agit d\'un des sports les plus pratiqués dans le monde.",
          "info": {
              1: {
                  "location":"Avenue François Mauriac",
                  "horaire":"Mardi 18h00-20h00"
              },
              2: {
                  "location":"Campus Moulin de la Housse",
                  "horaire":"Jeudi 18h00-20h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"http://desktopwallpaperbox.com/wallpapers-hd/volleyball-wallpaper-photo-On-High-Resolution-Wallpaper.jpg",
          "title":"Volley-Ball Compétition",
          "icon":"basketball",
          "description":"Le volley-ball, ou volleyball1, est un sport collectif mettant en jeu deux équipes de six joueurs séparés par un filet, qui s\'affrontent avec un ballon sur un terrain rectangulaire de 18 mètres de long sur 9 mètres de large. Avec 269 millions de pratiquants, il s\'agit d\'un des sports les plus pratiqués dans le monde.",
          "info": {
              1: {
                  "location":"Avenue François Mauriac",
                  "horaire":"Mercredi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"https://i.pinimg.com/originals/50/66/35/506635afc4cbbdae3328e34912e8bdf3.jpg",
          "title":"Football",
          "icon":"football",
          "description":"Le football, est un sport collectif qui se joue principalement au pied avec un ballon sphérique. Il oppose deux équipes de onze joueurs dans un stade, que ce soit sur un terrain gazonné ou sur un plancher. L\'objectif de chaque camp est de mettre le ballon dans le but adverse, sans utiliser les bras, et de le faire plus souvent que l\'autre équipe.",
          "info": {
              1: {
                  "location":"Les Églantines, 51100 Reims",
                  "horaire":"Lundi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"https://i.pinimg.com/originals/50/66/35/506635afc4cbbdae3328e34912e8bdf3.jpg",
          "title":"Football Compét. -11",
          "icon":"football",
          "description":"Le football, est un sport collectif qui se joue principalement au pied avec un ballon sphérique. Il oppose deux équipes de onze joueurs dans un stade, que ce soit sur un terrain gazonné ou sur un plancher. L\'objectif de chaque camp est de mettre le ballon dans le but adverse, sans utiliser les bras, et de le faire plus souvent que l\'autre équipe.",
          "info": {
              1: {
                  "location":"Les Églantines, 51100 Reims",
                  "horaire":"Mardi 20h00-22h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"https://img00.deviantart.net/ae0e/i/2011/066/2/8/futsal_by_theseeds-d3b5zha.jpg",
          "title":"Futsal",
          "icon":"football",
          "description":"Le futsal est un sport collectif apparenté au football. Comme lui, il se joue principalement au pied avec un ballon sphérique. Il oppose deux équipes de cinq joueurs dans un gymnase, sur un terrain de handball. L\'objectif de chaque camp est de mettre le ballon dans le but adverse, sans utiliser les bras, et de le faire plus souvent que l\'autre équipe. Cette discipline est inventée par l\'Argentin Juan Carlos Ceriani Gravier, membre de la YMCA de Montevideo en Uruguay, suite à la Coupe du monde de football de 1930 dans ce même pays et le manque de terrain pour permettre aux enfants de jouer. De 1930 à 1933, il crée les règles spécifiques de ce qui est alors appelé le « football de salon ». La dénomination de « futsal » apparait dans les années 1980. Le FIFA souhaite récupérer le contrôle de ce qu\'elle voit comme un dérivé de son football. Devant le refus de la FIFUSA, elle interdit l\'utilisation du mot « football » d\'où l\'invention du diminutif « futsal ». Les deux fédérations internationales (l\'AMF prenant la suite de la FIFUSA) s\'opposent depuis pour la gouvernance de ce sport.",
          "info": {
              1: {
                  "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                  "horaire":"Mercredi 18h00-20h00"
              }
          },
          "type": "SportsCollectifs"
       },
       {
          "header":"https://img00.deviantart.net/ae0e/i/2011/066/2/8/futsal_by_theseeds-d3b5zha.jpg",
          "title":"Futsal Compétition",
          "icon":"football",
          "description":"Le futsal est un sport collectif apparenté au football. Comme lui, il se joue principalement au pied avec un ballon sphérique. Il oppose deux équipes de cinq joueurs dans un gymnase, sur un terrain de handball. L\'objectif de chaque camp est de mettre le ballon dans le but adverse, sans utiliser les bras, et de le faire plus souvent que l\'autre équipe. Cette discipline est inventée par l\'Argentin Juan Carlos Ceriani Gravier, membre de la YMCA de Montevideo en Uruguay, suite à la Coupe du monde de football de 1930 dans ce même pays et le manque de terrain pour permettre aux enfants de jouer. De 1930 à 1933, il crée les règles spécifiques de ce qui est alors appelé le « football de salon ». La dénomination de « futsal » apparait dans les années 1980. Le FIFA souhaite récupérer le contrôle de ce qu\'elle voit comme un dérivé de son football. Devant le refus de la FIFUSA, elle interdit l\'utilisation du mot « football » d\'où l\'invention du diminutif « futsal ». Les deux fédérations internationales (l\'AMF prenant la suite de la FIFUSA) s\'opposent depuis pour la gouvernance de ce sport.",
          "info": {
              1: {
                  "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                  "horaire":"Mercredi 20h00-22h00"
              }
          },

          "type": "SportsCollectifs"
       },
       {
          "header":"http://www.bhmpics.com/walls/rugby_players-other.jpg",
          "title":"Rugby Compétiton",
          "icon":"american-football",
          "description":"Le rugby à XV, qui se joue par équipes de quinze joueurs sur le terrain avec des remplaçants, est la variante la plus pratiquée du rugby, famille de sports collectifs, dont les spécificités sont les mêlées et les touches, mettant aux prises deux équipes qui se disputent un ballon ovale, joué à la main et au pied. L\'objectif du jeu est de marquer plus de points que l\'adversaire, par des essais (donnant droit à des transformations), des buts de pénalité ou encore par des drops (coups de pied tombés dans le cours du jeu). De nos jours, l\'essai vaut cinq points et sept s\'il est transformé, le drop et le but (de pénalité) valent trois points chacun.",
          "info": {
              1: {
                  "location":" Avenue de l\'Europe, Stade des Thiolettes",
                  "horaire":"Lundi 19h30-22h00"
              },
              2: {
                  "location":"Campus Moulin de la Housse",
                  "horaire":"Jeudi 13h30-15h30"
              }
          },
          "type": "SportsCollectifs"
       },


       // Fitness
       {
          "header":"https://aerobic.guiafitness.com/wp-content/uploads/sites/5/Aerobic-en-casa-1024x679.jpg",
          "title":"Cardio Fit",
          "icon":"body",
          "description":"Qu’est ce que le cardio Fit ? Le Cardio Fit combine des exercices de cardio et de renforcement musculaire avec ou sans chorégraphie (type LIA ou Step). Que va m’apporter le cardio Fit ? Amincir votre silhouette et tonifier votre corps & Augmenter votre capacité cardio-pulmonaire. Pour qui ? Le cardio Fit est une évolution des cours d’aérobic accessible à tous",
          "info": {
              1: {
                  "location":"Av. François Mauriac",
                  "horaire":"Lundi 18h00-19h00"
              }
          },
          "type": "Fitness"
      },
      {
         "header":"https://ellipsefitness.fr/wp-content/uploads/2017/12/LIA-happy-fitcbess-salle-de-sport-chalon-sur-saone.jpg",
         "title":"L.I.A",
         "icon":"body",
         "description":"Le L.I.A. est un cours chorégraphié, rythmé par une musique dynamique et motivante. Cette activité ludique est conseillée aux personnes désirant développer l\'endurance et la coordination. Un bon moyen de perdre du poids et de se défouler !!!",
         "info": {
             1: {
                 "location":"Av. François Mauriac",
                 "horaire":"Vendredi 12h15-12h45"
             },
             2: {
                 "location":"Campus Moulin de la Housse",
                 "horaire":"Vendredi 12h15-12h45"
             }
         },
         "type": "Fitness"
     },
      {
         "header":"https://www.l-appart.net/uploads/content/9/cours-collectifs-de-cuisses-abdos-fessiers-c-a-f_big_square.jpg?v=1475658774",
         "title":"C.A.F",
         "icon":"body",
         "description":"Les cours collectifs de Cuisses Abdos Fessiers (C.A.F) consistent en un travail spécifique localisé sur les zones centrales du corps, le tout en musique ! Une séance dure 45 minutes et permet de brûler environ 250 calories. Elle est composée d’exercices, avec ou sans matériel (haltères, élastiques, lestes et bâton). Vous alternez ces exercices au sol et debout, pour faire travailler les muscles des abdominaux, des cuisses et des fessiers. Votre coach L’Appart Fitness vérifie tout au long de la séance les bonnes postures prises lors de la séance, afin d’éviter toute lésion. Les mouvements des cours collectifs de Cuisses Abdos Fessiers (C.A.F) sont simples et ne nécessitent aucune connaissance particulière du fitness. C’est une activité fitness où chacun avance à son rythme ; elle est accessible à tous, y compris aux seniors ! ",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Mercredi 13h00-13h45"
             }
         },
         "type": "Fitness"
     },
      {
         "header":"http://onefitness.org.uk/wp-content/uploads/Zumba-temporary-pic.jpeg",
         "title":"Zumba",
         "icon":"walk",
         "description":"La Zumba est un programme d'entraînement physique complet, alliant tous les éléments de la remise en forme : cardio et préparation musculaire, équilibre et flexibilité. Les chorégraphies s'inspirent principalement des danses latines (salsa, merengue, cumbia, reggaeton, soca, samba, tango, flamenco…), mais aussi de styles variés comme la danse du ventre ou la Quebradita. Selon le site de la compagnie Zumba Fitness LLC, plus de 15 millions de personnes participeraient hebdomadairement à un cours de Zumba; ces cours seraient dispensés dans environ 200 000 endroits répartis dans 180 pays.",
         "info": {
             1: {
                 "location":"Av. François Mauriac",
                 "horaire":"Mardi 12h15-13h15"
             },
             2: {
                 "location":"Av. François Mauriac",
                 "horaire":"Mardi 19h00-20h00"
             },
             3: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Mardi 19h00-20h00"
             },
             4: {
                 "location":"Av. François Mauriac",
                 "horaire":"Vendredi 13h30-14h15"
             }
         },
         "type": "Fitness"
     },
      {
         "header":"http://www.mjc-centresocial-victorhugo.com/wp-content/uploads/2018/01/BBfc9nu.jpg",
         "title":"Pilates",
         "icon":"walk",
         "description":"La méthode Pilates, parfois simplement appelée Pilates, est un système d'activité physique développé au début du xxe siècle par un passionné de sport et du corps humain, Joseph Pilates. La méthode Pilates est pratiquée au tapis avec ou sans accessoires ou à l'aide d'appareils. Elle a pour objectif le développement des muscles profonds, l'amélioration de la posture, l'équilibrage musculaire et l'assouplissement articulaire, pour un entretien, une amélioration ou une restauration des fonctions physiques.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Lundi 18h00-19h00"
             },
             2: {
                 "location":"Av. François Mauriac",
                 "horaire":"Mercredi 18h00-19h00"
             }
         },
         "type": "Fitness"
     },
     {
        "header":"https://www.forest-hill.fr/images/Activity/1/7/0/402/images/activitySlider/1200x474-activite-cardio-step.jpg",
        "title":"Step",
        "icon":"walk",
        "description":"Le step est une des composantes fondamentales dans les activités du fitness. Créé en 1986 par Gin Miller, les cours de step sont aujourd'hui populaires. Le nom de cette activité est lié à l'appareil qui est utilisé et qui s'appelle le step (qu'on pourrait traduire par un pas ou une marche). La discipline détient également un enjeu compétitif depuis 2014. Le quadruple champion du monde en titre, est aujourd'hui, Rabah Yannis.",
        "info": {
            1: {
                "location":"Av. François Mauriac",
                "horaire":"Lundi 19h00-20h00 (confirmé)"
            },
            2: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Lundi 19h00-20h00 (débutant)"
            },
            3: {
                "location":"Av. François Mauriac",
                "horaire":"Mercredi 19h00-20h00 (confirmé)"
            },
            4: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Mercredi 19h00-20h00 (intermédiaire)"
            }
        },
        "type": "Fitness"
    },
    {
        "header":"https://static1.squarespace.com/static/5750d5129f72662d66448028/t/57bd2fb23e00bea28d5ade54/1472016355408/Squat+%28Female%29.jpg?format=2500w",
        "title":"Training Extrème",
        "icon":"walk",
        "description":"La musculation est un ensemble d'exercices physiques visant le développement des muscles squelettiques, afin d'acquérir plus de force, d'endurance, de puissance, d'explosivité ou de volume musculaire. Dans ces exercices, une force (par exemple la gravité, avec l'utilisation des haltères ou du poids du corps) est opposée de manière répétitive à la force générée par la contraction des muscles.",
        "info": {
            1: {
                "location":"Av. François Mauriac",
                "horaire":"Mardi 13h15-13h45"
            }
        },
        "type": "Fitness"
    },
    {
        "header":"https://skyspa.ca/wp-content/uploads/2015/03/Jour-19-D%C3%A9nouer-les-tensions-du-dos-et-lassouplir.jpg",
        "title":"Fit Zen",
        "icon":"walk",
        "description":"Les cours collectifs de Fit’zen associent yoga, taï-chi et Pilates®. Ils sont accessibles à toutes et à tous et ils plairont particulièrement aux personnes voulant travailler en douceur. Une séance dure 45 minutes et se déroule dans une ambiance détendue. Aucun saut ou impact sur le sol ne sera demandé, afin de préserver le dos et les articulations. Les exercices se font au sol, sur un tapis, et alternent contractions et étirements musculaires. Vous améliorerez votre souplesse et assurerez un équilibre indispensable à votre bien-être intérieur. Ce travail qui améliore votre flexibilité et votre force nécessite une respiration contrôlée et de la concentration.",
        "info": {
            1: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Mardi 12h15-13h15"
            },
            2: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Jeudi 12h15-13h00"
            }
        },
        "type": "Fitness"
    },
    {
        "header":"https://fitnesspark-paris.fr/generalcontent/uploads/2016/02/abdos-fessiers.jpg",
        "title":"Abdos Fessiers",
        "icon":"body",
        "description":"Les cours collectifs de Cuisses Abdos Fessiers (C.A.F) consistent en un travail spécifique localisé sur les zones centrales du corps, le tout en musique ! Une séance dure 45 minutes et permet de brûler environ 250 calories. Elle est composée d’exercices, avec ou sans matériel (haltères, élastiques, lestes et bâton). Vous alternez ces exercices au sol et debout, pour faire travailler les muscles des abdominaux, des cuisses et des fessiers. Votre coach L’Appart Fitness vérifie tout au long de la séance les bonnes postures prises lors de la séance, afin d’éviter toute lésion. Les mouvements des cours collectifs de Cuisses Abdos Fessiers (C.A.F) sont simples et ne nécessitent aucune connaissance particulière du fitness.",
        "info": {
            1: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Mardi 13h15-13h45"
            }
        },
        "type": "Fitness"
    },
    {
        "header":"https://i0.wp.com/www.agitaform.com/wp-content/uploads/2012/01/index6.jpg",
        "title":"Aéro-Combat",
        "icon":"body",
        "description":"Cocktail divertissant de boxe, karaté, taekwondo et taï chi arrangé à la sauce fitness, le cours de body combat est un véritable show gestuel et musical. Pas besoin d'avoir tâté des arts martiaux pour y participer, il suffit d'être motivé. Coups de pieds et de poings se combinent  aux déplacements sur un rythme musical soutenu. C'est un bon entraînement de résistance à la préparation d'autres sports…",
        "info": {
            1: {
                "location":"Av. François Mauriac",
                "horaire":"Mardi 18h00-19h00"
            },
            2: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Jeudi 19h00-20h00"
            }

        },
        "type": "Fitness"
    },
    {
        "header":"https://www.l-appart.net/uploads/content/6/cours-collectifs-de-body-sculpt_big_square.jpg?v=1462290358",
        "title":"Body-Scult",
        "icon":"body",
        "description":"Les cours collectifs de Body Sculpt, avec ou sans accessoires, permettent un travail ciblé sur l'ensemble des muscles du corps. Une séance dure 45 minutes et permet de brûler environ 500 calories. Comme son nom l’indique, le Body Sculpt est la discipline idéale pour sculpter votre corps. Cette activité est considérée comme un mélange entre le Step et le Body Pump. Son programme est axé sur l’endurance et le renforcement musculaire, pour une silhouette sculptée et affinée ! Vous alternerez exercices de cardio et exercices de musculation réalisés avec du matériel, tel que des élastiques, des bâtons ou encore des haltères. Un renforcement efficace sur toutes les parties du corps : les abdominaux, les jambes, les bras, le dos, les pectoraux et les fessiers. Tous les efforts sont coordonnés afin que chaque partie de votre corps soit développée harmonieusement.",
        "info": {
            1: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Mardi 18h00-19h00"
            },
            2: {
                "location":"Av. François Mauriac",
                "horaire":"Mercredi 18h00-19h00"
            }

        },
        "type": "Fitness"
    },
    {
        "header":"http://www.magicform-bordeaux.fr/images/fitness/cours-circuit-minceur-salle-de-sport-bordeaux.jpg",
        "title":"Circuit Minceur",
        "icon":"body",
        "description":"Le Circuit Minceur est une solution pour faire du sport chez soi et différents objectifs sont pris en compte. Le fonctionnement de ce type d’entraînement est d’une efficacité à toute épreuve mais pour le suivre à la maison, les opportunités sont rares ou trop compliquées. Les parcours du Circuit Minceur sont organisés autour de 6 à 10 exercices de travail musculaire à compléter les uns après les autres. Chacun d'entre eux comprend un nombre spécifique de répétitions ou une durée spécifique, sans oublier les périodes de récupération entre les exercices et entre les parcours, auquel cas ces périodes sont plus longues. Les sessions d'entraînement peuvent comprendre de 2 à 6 parcours : cela dépend de votre niveau, de la durée globale de votre entraînement (préparation ou compétition) et de vos objectifs. ",
        "info": {
            1: {
                "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                "horaire":"Jeudi 13h00-13h45"
            }

        },
        "type": "Fitness"
    },

    {
        "header":"http://www.magicformparis14.fr/images/cours-collectifs-top.jpg",
        "title":"Fit Barre",
        "icon":"body",
        "description":"Il s’agit d’un cours avec poids pour tonifier et améliorer votre condition physique Il convient à toutes les personnes souhaitant allier des exercices d’aérobic à une séance de musculation.",
        "info": {
            1: {
                "location":"Av. François Mauriac",
                "horaire":"Vendredi 12h45-13h30"
            }

        },
        "type": "Fitness"
    },

     // Sport Aquatique
    {
      "header":"http://img.over-blog-kiwi.com/1/59/98/75/20170319/ob_c3f42c_p3180098-blog.jpg",
      "title":"Baptême de Plongée",
      "icon":"body",
      "description":"La piscine offre un univers rassurant appréciable pour effectuer un baptême de plongée. Lors de vos premières immersions, vous apprendrez à nager avec une bouteille d\'air comprimée dans le dos, à respirer dans un détenteur, à faire passer les oreilles, à utiliser le gilet de stabilisation.",
      "info": {
          1: {
              "location":"Rue Raymond Poincaré",
              "horaire":"Un Mardi par mois 21h15-22h45"
          }
      },
      "type": 'SportsAquatique'
    },
    // COmbat
    {
       "header":"http://judoclubdesalberes.e-monsite.com/medias/images/an-shodan-4eme.png",
       "title":"Judo Compétition",
       "icon":"body",
       "description":"Le judo a été créé en tant que pédagogie physique, mentale et morale au japon par Jigorō Kanō en 1882. Il est généralement catégorisé comme un art martial moderne, qui a par la suite évolué en sport de combat et en sport olympique. Sa caractéristique la plus proéminente est son élément compétitif dont l\'objectif est soit de projeter, soit d\'amener l\'adversaire au sol, de l\'immobiliser (Techniques de maîtrise), ou de l\'obliger à abandonner à l\'aide de clés articulaires et d\'étranglements. Les frappes et coups à main nue ainsi que les armes font aussi partie du judo mais seulement sous la forme pré-arrangée et ne sont pas autorisés en judo de compétition ni en pratique libre.",
       "info": {
           1: {
               "location":"Route de Bezannes, 51100 Reims",
               "horaire":"Lundi 18h00-20h00"
           }
       },
       "type": "Combat"
    },
    {
       "header":"https://www.luc.asso.fr/UserFiles/Photos-2017/Sections/2017-JUDO-Adultes-2-1920.jpg",
       "title":"Judo (Confirmés)",
       "icon":"body",
       "description":"Le judo a été créé en tant que pédagogie physique, mentale et morale au japon par Jigorō Kanō en 1882. Il est généralement catégorisé comme un art martial moderne, qui a par la suite évolué en sport de combat et en sport olympique. Sa caractéristique la plus proéminente est son élément compétitif dont l\'objectif est soit de projeter, soit d\'amener l\'adversaire au sol, de l\'immobiliser (Techniques de maîtrise), ou de l\'obliger à abandonner à l\'aide de clés articulaires et d\'étranglements. Les frappes et coups à main nue ainsi que les armes font aussi partie du judo mais seulement sous la forme pré-arrangée et ne sont pas autorisés en judo de compétition ni en pratique libre.",
       "info": {
           1: {
               "location":"Av. François Mauriac",
               "horaire":"Mercredi 18h00-20h00"
           }
       },
       "type": "Combat"
    },
    {
       "header":"http://infini-jiu-jitsu.fr/img/photos/jjb-yannick.jpeg",
       "title":"Ju-Jitsu (Débutants)",
       "icon":"body",
       "description":"Le ju-jitsu, ou jūjutsu ou encore jiu-jitsu (littéralement : « art de la souplesse » ), regroupe des techniques de combat qui furent développées par les samouraïs durant l\'époque d\'Edo. Elles enseignaient aux samouraïs et aux bushis à se défendre lorsque ceux-ci étaient désarmés lors d\'un duel ou sur le champ de bataille.",
       "info": {
           1: {
               "location":"Av. François Mauriac",
               "horaire":"Jeudi 18h00-20h00"
           }
       },
       "type": "Combat"
    },
    {
       "header":"http://www.bourgogne-infos.com/medias/27739/sports-de-combat-pleins-feux-sur-le-gala-du-full-contact-creusotin-2-376756.jpg",
       "title":"Full Contact",
       "icon":"body",
       "description":"Le full-contact ou la boxe américaine est un sport de combat appartenant aux formes de boxes pieds-poings nées aux États-Unis dans les années 1960 et 1970 et surnommé dans ce pays « kick-boxing ».",
       "info": {
           1: {
               "location":"Av. François Mauriac",
               "horaire":"Mardi 18h00-20h00"
           }
       },
       "type": "Combat"
    },
    {
       "header":"http://www.efom.fr/sites/default/files/sites/default/from_editor/th._aubertin_-_combat.jpg",
       "title":"Karaté",
       "icon":"body",
       "description":"Le karaté est un art martial, dit japonais. Cependant, son origine est okinawaïenne (l\'île principale de l\'archipel des Ryūkyū), qui a longtemps constitué un royaume indépendant du Japon, au sud de l\'île de Kyūshū.",
       "info": {
           1: {
               "location":"Campus Moulin de la Housse, Chemin des Rouliers",
               "horaire":"Mercredi 18h00-20h00"
           }
       },
       "type": "Combat"
    },
    {
       "header":"http://www.ville-de-salles.com/wp-content/uploads/2016/08/rosheim_aikido_michel_erb_office_tourisme.jpg",
       "title":"Aïkido",
       "icon":"body",
       "description":"L\'aïkido est un art martial japonais (budo), fondé par Morihei Ueshiba O sensei entre 1925 et 1969. L\'aïkido a été officiellement reconnu par le gouvernement japonais en 1940 sous le nom d\’aikibudō et sous le nom aikido en 1942 donné par la « Dai Nippon Butoku Kai », organisme gouvernemental visant à regrouper tous les arts martiaux japonais pendant la guerre. Il a été créé à partir de l\'expérience que son fondateur avait de l\'enseignement des koryu (écoles d\'arts martiaux anciennes), essentiellement l\'aikijutsu de l\'école daitō ryū et le kenjutsu (art du sabre japonais). L\'aïkido est né de la rencontre entre ces techniques de combat et une réflexion métaphysique de Morihei Ueshiba sur le sens de la pratique martiale à l\'ère moderne.",
       "info": {
           1: {
               "location":"Av. François Mauriac",
               "horaire":"Mercredi 20h00-22h00"
           },
           2: {
               "location":"Av. François Mauriac",
               "horaire":"Vendredi 20h00-22h00"
           }
       },
       "type": "Combat"
    },

    //K-Danse
    {
     "header":"https://i0.wp.com/www.courteline.fr/wp-content/uploads/danse-contemporaine.jpg",
     "title":"Danse Contemporaine",
     "icon":"body",
     "description":"La danse aujourd\'hui nommée danse contemporaine naît en Europe et aux États-Unis après la Seconde Guerre mondiale. Elle fait suite à la danse moderne et débute, pour certains, avec les courants postmodernistes.",
     "info": {
         1: {
             "location":"Av. François Mauriac",
             "horaire":"Jeudi 12h15-13h45"
         }
     },
     "type": "KDanse"
    },
      {
         "header":"https://www.superprof.fr/images/formations/atelier-danse-creation-choregraphique-hebdomadaire-rabastens-tarn.jpg",
         "title":"Créa. art. pour tous types de danses",
         "icon":"body",
         "description":"Mélange de plusieurs styles de danses.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Lundi 18h00-20h00"
             }
         },
         "type": "KDanse"
      },
      {
         "header":"http://www.salsaddict.fr/ressources/images/c3be9b0a185f.jpg",
         "title":"Salsa Cubaine",
         "icon":"body",
         "description":"La salsa (mot espagnol qui signifie « sauce » et, au sens figuré, charme, piquant) désigne à la fois un genre musical et une danse ayant des racines cubaines. Cette musique de danse au tempo vif est popularisée dans le monde entier.",
         "info": {
             1: {
                 "location":"Av. François Mauriac",
                 "horaire":"Jeudi 18h00-20h00"
             }
         },
         "type": "KDanse"
      },
      {
         "header":"http://www.arlyo.com/wp-content/uploads/2016/06/pp.jpg",
         "title":"Tango Argentin",
         "icon":"body",
         "description":"Le tango est une danse de bal qui se danse à deux. C\'est une danse d\'improvisation, au sens où les pas ne sont pas prévus à l\'avance pour être répétés séquentiellement, mais où les deux partenaires marchent ensemble vers une direction impromptue à chaque instant. Un partenaire (traditionnellement l\'homme) guide l\'autre, qui suit en laissant aller naturellement son poids dans la marche, sans chercher à deviner les pas.",
         "info": {
             1: {
                 "location":"Av. François Mauriac",
                 "horaire":"Jeudi 20h00-22h00"
             }
         },
         "type": "KDanse"
      },
      {
         "header":"http://www.virginietempodanse.fr/wp-content/uploads/2014/07/Wcs.jpg",
         "title":"Rock",
         "icon":"body",
         "description":"Le dance-rock (ou dance-oriented rock) est un genre musical qui incorpore des éléments de rock et de dance.",
         "info": {
             1: {
                 "location":"Av. François Mauriac",
                 "horaire":"Mercredi 20h00-22h00"
             }
         },
         "type": "KDanse"
      },
      {
         "header":"https://www.kellysdance.co.uk/wp-content/uploads/2016/04/street-dance-lessons.jpg",
         "title":"Atelier Hip Hop et Street Dance",
         "icon":"body",
         "description":"Le Hip Hop (aussi appelé « Breakdance ») et La street dance (littéralement « danse de rue ») sont un ensemble de danses venues principalement des États-Unis.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Mercredi 12h15-13h45"
             }
         },
         "type": "KDanse"
      },



      // Bien être et forme
      {
         "header":"http://yesofcorsa.com/wp-content/uploads/2017/04/Crossfit-Desktop-Wallpaper-For-PC.jpg",
         "title":"Musculation et Espace Cardio",
         "icon":"body",
         "description":"La musculation est un ensemble d'exercices physiques visant le développement des muscles squelettiques, afin d'acquérir plus de force, d'endurance, de puissance, d'explosivité ou de volume musculaire. Dans ces exercices, une force (par exemple la gravité, avec l'utilisation des haltères ou du poids du corps) est opposée de manière répétitive à la force générée par la contraction des muscles. Cette activité est généralement pratiquée dans une salle de sport. Ses bienfaits sont conséquents, tout d'abord physiquement car on améliore sa silhouette, mais aussi mentalement. Elle permet également d'améliorer sa santé, la circulation du sang, de lutter contre le mal de dos, contre le vieillissement.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Du lundi au vendredi 12h15-13h45"
             },
             2: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Du lundi au jeuid 17h30-20h30"
             },
             3: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Vendredi 18h00-20h00"
             }
         },
         "type": "BienEtre"
      },
      {
         "header":"https://hdwallsource.com/img/2017/1/yoga-female-pose-wallpaper-background-61327-63144-hd-wallpapers.jpg",
         "title":"Yoga",
         "icon":"body",
         "description":"C’est une discipline du corps et de l’esprit qui comprend une grande variété d’exercices et de techniques. Les techniques employées utilisent des postures physiques (appelées asanas), des pratiques respiratoires (pranayama) et de méditation, ainsi que la relaxation profonde (yoga nidra).",
         "info": {
             1: {
                 "location":"Av. François Mauriac",
                 "horaire":"Lundi 18h00-19h00"
             },
             2: {
                 "location":"Av. François Mauriac",
                 "horaire":"Lundi 19h00-20h00"
             }
         },
         "type": "BienEtre"
      },
      {
         "header":"https://image.jimcdn.com/app/cms/image/transf/dimension=890x10000:format=jpg/path/s4af7b7f79555f90e/image/i179162c140c20db7/version/1459066879/image.jpg",
         "title":"Trail",
         "icon":"body",
         "description":"Le trail, la course nature ou plus rarement la course en sentier est un sport de course à pied, sur longue distance, en milieu naturel, typiquement sur des chemins de terre et des sentiers de randonnée en plaine, en forêt ou en montagne. Trail est l'abréviation, propre aux francophones, de l'anglais trail running.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Lundi 12h15-13h45"
             }
         },
         "type": "BienEtre"
      },
      {
         "header":"https://www.kellysdance.co.uk/wp-content/uploads/2016/04/street-dance-lessons.jpg",
         "title":"Course de Fond",
         "icon":"body",
         "description":"La course de fond ou course longue distance ou encore course d'endurance désigne la course à pied sur une distance d'au moins 5 kilomètres. Physiologiquement, c'est un effort impliquant principalement un processus métabolique d'aérobie (production d'énergie par consommation d'oxygène) et qui requiert des capacités physique d'endurance.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Mardi 18h30-20h00"
             }
         },
         "type": "BienEtre"
      },
      {
         "header":"http://s1.lprs1.fr/images/2016/08/02/6010867_25cb97cb5d8a9046b79c16c70e8af5103396ab3f_1000x625.jpg",
         "title":"Gymnastique",
         "icon":"body",
         "description":"La gymnastique (abrégée en « gym ») est un terme générique qui regroupe aujourd'hui des formes très diverses de disciplines sportives, pratiquées pour le loisir ou la compétition : gymnastique artistique, gymnastique rythmique, trampoline, gymnastique acrobatique, gymnastique aérobique, tumbling... Le terme est aussi appliqué à des formes d'activités dites gymniques, plus ou moins liées à la santé ou à la condition physique des personnes la pratiquant, telles que l'aquagym ou le fitness.",
         "info": {
             1: {
                 "location":"3 Imp. Léo Lagrange",
                 "horaire":"Lundi 12h00-14h00"
             },
             2: {
                 "location":"3 Imp. Léo Lagrange",
                 "horaire":"Jeudi 12h15-13h45"
             }
         },
         "type": "BienEtre"
      },



      // Sport de Raquettes

      {
         "header":"http://4everstatic.com/images/850xX/sport/tennis-de-table,-raquette,-balles,-reseau-237122.jpg",
         "title":"Tennis de Tables",
         "icon":"body",
         "description":"Le tennis de table appelé aussi « ping-pong » est un sport de raquette opposant deux ou quatre joueurs autour d'une table. Le tennis de table est une activité de loisir, mais c'est également un sport olympique depuis 1988.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Tous les jours 12h15-13h45"
             },
             2: {
                 "location":"Av. François Mauriac",
                 "horaire":"Tous les jours 12h15-13h45"
             },
             3: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Du lundi au vendredi 18h00-20h00"
             }
         },
         "type": "SportsRaquette"
      },
      {
         "header":"https://i0.wp.com/www.valleeverte-badminton.fr/wp-content/uploads/2017/07/badminton-serv-1.jpg?resize=1400%2C9999",
         "title":"Badminton",
         "icon":"body",
         "description":"Le badminton est un sport de raquette qui oppose soit deux joueurs ou joueuses (simples), soit deux paires (doubles), placés dans deux demi-terrains séparés par un filet. Les joueurs et joueuses, appelés badistes, marquent des points en frappant un volant à l'aide d'une raquette afin de le faire tomber dans le terrain adverse. L'échange se termine dès que le volant touche le sol ou reste accroché dans le filet.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Tous les jours 12h15-13h45"
             },
             2: {
                 "location":"Av. François Mauriac",
                 "horaire":"Tous les jours 12h15-13h45"
             },
             3: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Du lundi au vendredi 18h00-20h00"
             }
         },
         "type": "SportsRaquette"
      },
      {
          "header":"https://i0.wp.com/www.valleeverte-badminton.fr/wp-content/uploads/2017/07/badminton-serv-1.jpg?resize=1400%2C9999",
         "title":"Badminton Compétition",
         "icon":"body",
         "description":"Le badminton est un sport de raquette qui oppose soit deux joueurs ou joueuses (simples), soit deux paires (doubles), placés dans deux demi-terrains séparés par un filet. Les joueurs et joueuses, appelés badistes, marquent des points en frappant un volant à l'aide d'une raquette afin de le faire tomber dans le terrain adverse. L'échange se termine dès que le volant touche le sol ou reste accroché dans le filet.",
         "info": {
             1: {
                 "location":"3 Imp. Léo Lagrange",
                 "horaire":"Lundi 12h00-14h00"
             },
             2: {
                 "location":"3 Imp. Léo Lagrange",
                 "horaire":"Jeudi 12h15-13h45"
             }
         },
         "type": "SportsRaquette"
      },
      {
         "header":"http://aushop.fr/wp-content/uploads/2018/05/5affda3278d04_equipement-et-materiel-de-tennis-achetez-au-bon-prix,2018.jpg",
         "title":"Tennis",
         "icon":"body",
         "description":"Le tennis est un sport de raquette qui oppose soit deux joueurs (on parle alors de jeu en simple) soit quatre joueurs qui forment deux équipes de deux (on parle alors de jeu en double). Les joueurs utilisent une raquette cordée verticalement et horizontalement à une tension variant avec la puissance ou l'effet que l'on veut obtenir.",
         "info": {
             1: {
                 "location":"3 Imp. Léo Lagrange",
                 "horaire":"Lundi 12h00-14h00"
             },
             2: {
                 "location":"3 Imp. Léo Lagrange",
                 "horaire":"Jeudi 12h15-13h45"
             }
         },
         "type": "SportsRaquette"
      },

      // Découvertes

    {
     "header":"http://eps-medias.discipline.ac-lille.fr/poster/poster-escalade.JPG",
     "title":"Escalade",
     "icon":"american-football",
     "description":"L\’escalade, ou grimpe, parfois appelée varappe, est une pratique et un sport consistant à se déplacer le long d\'une paroi pour atteindre le haut d\'un relief ou d\'une structure artificielle, par un cheminement appelé voie et avec ou sans aide de matériel. Le terrain de pratique va des blocs de faible hauteur aux parois de plusieurs centaines de mètres en passant par les murs d\'escalade. Physiquement, l\'escalade est un sport complet sollicitant aussi bien les mains et les bras que les jambes et le tronc ainsi que des aptitudes mentales importantes. Le pratiquant est couramment appelé « grimpeur ».",
     "info": {
         1: {
             "location":"Avenue François Mauriac",
             "horaire":"Du lundi au jeudi 18h00-20h00"
         }
     },
     "type": "Decouvertes"
    },



    {
     "header":"http://resize3-doctissimo.ladmedia.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/forme/diaporamas/sports-a-pratiquer-au-printemps/l-escalade/4437788-1-fre-FR/L-escalade.jpg",
     "title":"Escalade Compétition",
     "icon":"american-football",
     "description":"L\’escalade, ou grimpe, parfois appelée varappe, est une pratique et un sport consistant à se déplacer le long d\'une paroi pour atteindre le haut d\'un relief ou d\'une structure artificielle, par un cheminement appelé voie et avec ou sans aide de matériel. Le terrain de pratique va des blocs de faible hauteur aux parois de plusieurs centaines de mètres en passant par les murs d\'escalade. Physiquement, l\'escalade est un sport complet sollicitant aussi bien les mains et les bras que les jambes et le tronc ainsi que des aptitudes mentales importantes. Le pratiquant est couramment appelé « grimpeur ».",
     "info": {
         1: {
             "location":'Avenue François Mauriac',
             "horaire":'Mardi 20h00-22h00'
         }
     },
     "type": "Decouvertes"
    },



    {
     "header":"https://nauathletics.com/s3/sidearm.sites/nau.sidearmsports.com/custompages/gallery/WomensGolf_32_0002_2/thumbs/_big_NAU_Golf_Sedona_Day_One-9.jpg",
     "title":"Golf",
     "icon":"american-football",
     "description":"Le golf est un sport de précision se jouant en plein air, qui consiste à envoyer une balle dans un trou à l\'aide de clubs. Le but du jeu consiste à effectuer, sur un parcours défini, le moins de coups possible. Précision, endurance, technicité, concentration sont des qualités primordiales pour cette activité.",
     "info": {
         1: {
             "location":'Daily Golf Bezanne',
             "horaire":'Lundi 12h15-13h45'
         },
         2: {
             "location":'Golf Champagne',
             "horaire":'Vendredi 8h30-11h30'
         }
     },
     "type": "Decouvertes"
    },



    {
     "header":"https://www.libertycountryclub.fr/wp-content/uploads/2015/06/HT8A7516.jpg",
     "title":"Squash",
     "icon":"american-football",
     "description":"Le golf est un sport de précision se jouant en plein air, qui consiste à envoyer une balle dans un trou à l\'aide de clubs. Le but du jeu consiste à effectuer, sur un parcours défini, le moins de coups possible. Précision, endurance, technicité, concentration sont des qualités primordiales pour cette activité.",
     "info": {
         1: {
             "location":'Espace Club',
             "horaire":'Du mardi au vendredi 12h15-13h45'
         },
         2: {
             "location":'Espace Club',
             "horaire":'Lundi, mercredi et vendredi 19h45-21h15'
         },

         3: {
             "location":'Espace Club',
             "horaire":'Mardi et jeudi 20h30-21h15'
         }
     },
     "type": "Decouvertes"
    },



    {
     "header":"http://www.ledeven.com/wp-content/uploads/2017/03/Fotolia_98957198_Subscription_Monthly_L-1900x950.jpg",
     "title":"Equitation",
     "icon":"american-football",
     "description":"L’équitation est la technique de la conduite du cheval sous l'action humaine. On considère l'équitation comme étant un art, un loisir ou un sport. Dans cette discipline, l'être humain a pour partenaire un équidé, le plus souvent un cheval ou un poney. Le mot vient du latin equitare, qui signifie « aller à cheval ».",
     "info": {
         1: {
             "location":"CERUC",
             "horaire":"Mardi 12h30-13h30"
         },
         2: {
             "location":"CERUC",
             "horaire":"Jeudi 12h30-13h30"
         },
         3: {
             "location":"CERUC",
             "horaire":"Jeudi 19h30-20h30"
         }
     },
     "type": "Decouvertes"
    },
    {
     "header":'http://cpsf.france-paralympique.fr/wp-content/uploads/2014/10/DSC_0079.jpg',
     "title":"Aviron",
     "icon":"american-football",
     "description":"L'aviron fait partie de la famille des sports nautiques. C'est un sport olympique depuis la création des Jeux olympiques modernes en 1896 sous l'impulsion du baron Pierre de Coubertin. Ce sport consiste à propulser une forme, étroite et allongée, de traînière à l'aide de rames, également appelées avirons, ou communément dans le milieu des pratiquants francophones « pelles ». On distingue deux catégories : l'aviron de rivière et l'aviron de mer.",
     "info": {
         1: {
             "location":"Cercle Nautique Rémois",
             "horaire":"Mardi 9, jeudi 11, mardi 16, jeudi 18, mardi 23 et jeudi 25 18h30-20h30"
         }
     },
     "type": "Decouvertes"
    },



    // Tirs

        {
         "header":'http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/sport/jo-de-rio-2016-tir-a-la-carabine-la-premiere-medaille-des-jeux-attribuee-a-une-americaine-2814697/28327126-1-fre-FR/JO-de-Rio-2016-Tir-a-la-carabine-la-premiere-medaille-des-Jeux-attribuee-a-une-americaine.jpg',
         "title":"Tir à la carabine",
         "icon":"locate",
         "description":"Le tir sportif comprend des disciplines, gérées en France par la Fédération Française de Tir et, au niveau mondial, par différentes fédérations internationales parmi lesquelles l'International Shooting Sport Federation (ISSF) pour les disciplines Olympiques1, l'International Practical Shooting Féderation (IPSC) pour le tir sportif de vitesse ou l'International Crossbow Shooting Union (IAU) pour l'arbalète.",
         "info": {
             1: {
                 "location":"12 Avenue du 29 Août 1944, 51430 Tinqueux",
                 "horaire":"Mercredi 18h30-20h30"
             }
         },
         "type": "Tirs"
        },
        {
         "header":'http://mareau-tir.fr/wp-content/uploads/2012/01/En-tete-pistolet-940x300.jpg',
         "title":"Tir au pistolet 10m",
         "icon":"locate",
         "description":"Le tir sportif comprend des disciplines, gérées en France par la Fédération Française de Tir et, au niveau mondial, par différentes fédérations internationales parmi lesquelles l'International Shooting Sport Federation (ISSF) pour les disciplines Olympiques1, l'International Practical Shooting Féderation (IPSC) pour le tir sportif de vitesse ou l'International Crossbow Shooting Union (IAU) pour l'arbalète.",
         "info": {
             1: {
                 "location":"12 Avenue du 29 Août 1944, 51430 Tinqueux",
                 "horaire":"Mercredi 18h30-20h30"
             }
         },
         "type": "Tirs"
        },
        {
         "header":'http://referentiel.nouvelobs.com/wsfile/9841343382262.jpg',
         "title":"Tir à l'arc",
         "icon":"locate",
         "description":"Le tir à l'arc est un sport de précision et de concentration dans lequel les compétiteurs tentent de tirer leurs flèches au centre d'une cible avec leur arc. Historiquement, le tir à l'arc a été utilisé pour la chasse et le combat, tandis que dans les temps modernes, son utilisation principale est celle d'une activité sportive. Une personne qui pratique le tir à l'arc est appelée un archer.",
         "info": {
             1: {
                 "location":"12 Avenue du 29 Août 1944, 51430 Tinqueux",
                 "horaire":"Jeudi 18h00-20h00"
             }
         },
         "type": "Tirs"
        },
        {
         "header":'http://mareau-tir.fr/wp-content/uploads/2012/01/En-tete-pistolet-940x300.jpg',
         "title":"Tir + pistolet vitesse",
         "icon":"locate",
         "description":"30 coups en «vitesse» se décomposant en 6 séries de 5 balles. Pour les séries en «vitesse», le tireur dispose de 3 secondes pour tirer chaque balle. La cible pivotante s'effaçant 7 secondes entre chaque coup. Ce tir s'effectue sur une cible située à 25 mètres.",
         "info": {
             1: {
                 "location":"12 Avenue du 29 Août 1944, 51430 Tinqueux",
                 "horaire":"Mercredi 18h30-20h30"
             }
         },
         "type": "Tirs"
        },
        {
         "header":'http://referentiel.nouvelobs.com/wsfile/9841343382262.jpg',
         "title":"Tir à l'arc + tir à l'arbalète",
         "icon":"locate",
         "description":"Le tir à l'arc est un sport de précision et de concentration dans lequel les compétiteurs tentent de tirer leurs flèches au centre d'une cible avec leur arc. Historiquement, le tir à l'arc a été utilisé pour la chasse et le combat, tandis que dans les temps modernes, son utilisation principale est celle d'une activité sportive. Une personne qui pratique le tir à l'arc est appelée un archer.",
         "info": {
             1: {
                 "location":"12 Avenue du 29 Août 1944, 51430 Tinqueux",
                 "horaire":"Jeudi 18h00-20h00"
             }
         },
         "type": "Tirs"
        },



        // Préparation physique aux concours de la fonction publique
        {
         "header":'https://assets.sport.francetvinfo.fr/sites/default/files/styles/large_16_9/public/import-articles/kevin-mayer-athletisme_131ab41cd849ef75544ab0139b11061e.jpg?itok=GMEEDSw6',
         "title":"Athlétisme courses et lancers",
         "icon":"walk",
         "description":"Le tir à l'arc est un sport de précision et de concentration dans lequel les compétiteurs tentent de tirer leurs flèches au centre d'une cible avec leur arc. Historiquement, le tir à l'arc a été utilisé pour la chasse et le combat, tandis que dans les temps modernes, son utilisation principale est celle d'une activité sportive. Une personne qui pratique le tir à l'arc est appelée un archer.",
         "info": {
             1: {
                 "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                 "horaire":"Mercredi 12h15-13h45"
             }
         },
         "type": "FonctionPublique"
        },
        {
           "header":"https://image.jimcdn.com/app/cms/image/transf/dimension=890x10000:format=jpg/path/s4af7b7f79555f90e/image/i179162c140c20db7/version/1459066879/image.jpg",
           "title":"Trail",
           "icon":"body",
           "description":"L’athlétisme est un sport qui comporte un ensemble de disciplines regroupées en courses, sauts, lancers, épreuves combinées et marche. L'origine du mot athlétisme vient du grec « Athlos » signifiant combat. Il s’agit de l’art de dépasser la performance des adversaires en vitesse ou en endurance, en distance ou en hauteur. Les épreuves athlétiques, individuelles ou par équipes, ont varié avec le temps et les mentalités. L'athlétisme est l'un des rares sports universellement pratiqués, que ce soit dans le monde amateur ou au cours de nombreuses compétitions de tous niveaux. La simplicité et le peu de moyens nécessaires à sa pratique expliquent en partie ce succès. Les premières traces de concours athlétiques remontent aux civilisations antiques. La discipline s'est développée au cours des siècles, des premières épreuves à sa codification.",
           "info": {
               1: {
                   "location":"Campus Moulin de la Housse, Chemin des Rouliers",
                   "horaire":"Lundi 12h15-13h45"
               }
           },
           "type": "FonctionPublique"
        },
        {
         "header":'http://ak1.picdn.net/shutterstock/videos/9976991/thumb/7.jpg',
         "title":"Prép. Phys. concours administratifs",
         "icon":"walk",
         "description":"",
         "info": {
             1: {
                 "location":'Avenue François Mauriac',
                 "horaire":"Mercredi 12h15-13h45"
             }
         },
         "type": "FonctionPublique"
        },

    ]

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SportPage, {
      sport: item
    });
  }

  onCancel(ev) {
     // Reset the field
     ev.target.value = '';
   }

   getItems(type) {
       return this.items.filter((item) => item.type === type);
   }

  filterItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}
