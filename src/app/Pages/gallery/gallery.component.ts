import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent
{
  images = [
    { src: 'assets/image (1).jpg', description: 'Ador sa lucrez cu tine si cand nu stim ce facem :))', isDescriptionVisible: false },
    { src: 'assets/image (2).jpg', description: 'Calatoriile sunt mai frumoase impreuna', isDescriptionVisible: false },
    { src: 'assets/image (3).jpg', description: 'Berile cu tine imi fac weekendurile muuult mai frumoase', isDescriptionVisible: false },
    { src: 'assets/image (4).jpg', description: 'Plimbarile cu tine creeaza mult amintiri', isDescriptionVisible: false },
    { src: 'assets/image (5).jpg', description: 'Escapadele in echipa sunt cele mai tari cand te am acolo', isDescriptionVisible: false },
    { src: 'assets/image (6).jpg', description: 'Cursurile sunt mai dragute cu tine', isDescriptionVisible: false },
    { src: 'assets/image (7).jpg', description: 'Morti si tu si eu', isDescriptionVisible: false },
    { src: 'assets/image (8).jpg', description: 'LA MULTI ANI!!!', isDescriptionVisible: false },
    { src: 'assets/image (9).jpg', description: 'Ce copilas fericit <3 Love you', isDescriptionVisible: false },
    { src: 'assets/image (10).jpg', description: 'Cand refuzi sa fii cute, esti MEGA cute', isDescriptionVisible: false },
    { src: 'assets/image (11).jpg', description: 'Pic si Poc stricand usi :))', isDescriptionVisible: false },
    { src: 'assets/image (12).jpg', description: 'Dupa o nopate de codat', isDescriptionVisible: false },
    { src: 'assets/image (13).jpg', description: 'Am mai mult chef sa nu fiu atent cu tine acolo', isDescriptionVisible: false },
    { src: 'assets/image (14).jpg', description: 'Meny-i iscusitii. Imi plac proiectele noastre', isDescriptionVisible: false },
    { src: 'assets/image (15).jpg', description: 'Nu cred ca eram de acord aici :))', isDescriptionVisible: false },
    { src: 'assets/image (16).jpg', description: 'Movie nights are the best', isDescriptionVisible: false },
    { src: 'assets/image (17).jpg', description: 'Calatorie cu tine = timp cu multe amintiri ^^', isDescriptionVisible: false },
    { src: 'assets/image (18).jpg', description: 'Arati ca la serbare ma, mancate-as', isDescriptionVisible: false },
    { src: 'assets/image (19).jpg', description: 'Doua printele. SLAAAAAY QUEEN', isDescriptionVisible: false },
    { src: 'assets/image (20).jpg', description: 'Ca baietii la mare. Ce viata usoara', isDescriptionVisible: false },
    { src: 'assets/image (21).jpg', description: 'Frumusete MAXIMA. Nu stiu cum nu se aliniaza fetele :)) As fi fost a ta de mult', isDescriptionVisible: false },
    { src: 'assets/image (22).jpg', description: 'Blup Blup', isDescriptionVisible: false },
    { src: 'assets/image (23).jpg', description: 'Chiar te distrai nebunule <3', isDescriptionVisible: false },
    { src: 'assets/image (24).jpg', description: 'Tu vs Cod. Nu mai mentionam scorul :))', isDescriptionVisible: false },
    { src: 'assets/image (25).jpg', description: 'Om bogat, dar si la sufelt <3', isDescriptionVisible: false },
    { src: 'assets/image (26).jpg', description: 'Diminetile cu tine parca nici nu mai sunt groaznice', isDescriptionVisible: false },
    { src: 'assets/image (27).jpg', description: 'Mamaaa, cand am reparat (incercat) mobila de buacatarie', isDescriptionVisible: false },
    { src: 'assets/image (28).jpg', description: 'Plimbari cu tine = cele mai cool', isDescriptionVisible: false },
    { src: 'assets/image (29).jpg', description: 'Nici n am simtit cum au trecut 3h cu tine acolo, chit ca stateam pe bagaj :))', isDescriptionVisible: false },
    { src: 'assets/image (30).jpg', description: 'Tu vs Cod. Nu e mai bine :))', isDescriptionVisible: false },
    { src: 'assets/image (31).jpg', description: 'Contampland asupra vietii de programator', isDescriptionVisible: false },
    { src: 'assets/image (32).jpg', description: 'Pure happiness', isDescriptionVisible: false },
    { src: 'assets/image (33).jpg', description: 'Fericire maxima. Asa ma simt cand sunt cu tine', isDescriptionVisible: false },
    { src: 'assets/image (34).jpg', description: 'Just shilling. Ador ca pot sa fac asta cu tine. Just vibing', isDescriptionVisible: false },
    { src: 'assets/image (35).jpg', description: 'Eviti sa fii cute. Adorabil', isDescriptionVisible: false },
    { src: 'assets/image (36).jpg', description: 'Laburile alea de CN... Amintiri neplacute daca n ai fi fost acolo', isDescriptionVisible: false },
    { src: 'assets/image (37).jpg', description: 'Cute <3', isDescriptionVisible: false },
    { src: 'assets/image (38).jpg', description: 'Niste zambete de copii onesti', isDescriptionVisible: false },
    { src: 'assets/image (39).jpg', description: 'Ah, prima data cand te am vazut cu ochelari. Ce scumpete', isDescriptionVisible: false },
    { src: 'assets/image (40).jpg', description: 'PEIMA DATA CAND TE AM VAZUT LA VOLAN. Ce m am distrat. Inca cred ca cpnduci prea prudent :))', isDescriptionVisible: false },
    { src: 'assets/image (41).jpg', description: 'Cred ca aici tu nu erai de acord :))', isDescriptionVisible: false },
    { src: 'assets/image (42).jpg', description: 'Ce greutati la sala, asta e antrenament :))', isDescriptionVisible: false },
    { src: 'assets/image (43).jpg', description: 'Hehe <3', isDescriptionVisible: false },
    { src: 'assets/image (44).jpg', description: 'And I waited 20 yers to find you ;))', isDescriptionVisible: false },
    { src: 'assets/image (45).jpg', description: 'Ultimul electrolit', isDescriptionVisible: false },
    { src: 'assets/image (46).jpg', description: 'Morti dar cum sa nu zambesc cand erau acolo?', isDescriptionVisible: false },
    { src: 'assets/image (47).jpg', description: 'Mort la cursuri ca de obicei :))', isDescriptionVisible: false },
    { src: 'assets/image (48).jpg', description: 'Viata de sef :)) Tiktok in timp ce altii lucreaza', isDescriptionVisible: false },
    { src: 'assets/image (49).jpg', description: 'Coolest boyzzzzz on the street', isDescriptionVisible: false },
    { src: 'assets/image (50).jpg', description: 'Hehe, te am facut sa razi pana la urma', isDescriptionVisible: false },
    { src: 'assets/image (51).jpg', description: 'Ultimul neuron existand in pace', isDescriptionVisible: false },
    { src: 'assets/image (52).jpg', description: 'Nu primii, dar fericiti ca am fost impreuna', isDescriptionVisible: false },
    { src: 'assets/image (53).jpg', description: 'In ochii se vede lipsa vietii ;))', isDescriptionVisible: false },
    { src: 'assets/image (54).jpg', description: 'Ah, laburile de ADIV. M ai vazut doar in vise la lea :))', isDescriptionVisible: false },
    { src: 'assets/image (55).jpg', description: 'Inceputurile aventurii mele minunate cu tine <3', isDescriptionVisible: false },
  ];

  toggleDescription(index: number) {
    this.images[index].isDescriptionVisible = !this.images[index].isDescriptionVisible;
  }
}
