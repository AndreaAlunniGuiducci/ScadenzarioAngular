import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from './item';
@Injectable({
  providedIn: 'root',
})
export class ScadenzarioService {
  items: Item[] = [];
  user = JSON.parse(localStorage.getItem('user')!);
  itemObj = { items: this.items };
  super = {
    "items": [
      {
        "expired": "2022-10-01",
        "item": "Yoga s/z pera 200x3"
      },
      {
        "expired": "2022-10-02",
        "item": "Piadina loriana riminese"
      },
      {
        "expired": "2022-10-03",
        "item": "Pane grano duro mulino bianco"
      },
      {
        "item": "Craker fiori d'acqua mulino bianco",
        "expired": "2022-10-04"
      },
      {
        "expired": "2022-10-10",
        "item": "Pan carre 18 fette"
      },
      {
        "expired": "2022-10-11",
        "item": "Taralloro limone"
      },
      {
        "expired": "2022-10-13",
        "item": "Grissini fiocchi farro conad"
      },
      {
        "item": "Miniburger roberto",
        "expired": "2022-10-15"
      },
      {
        "expired": "2022-10-16",
        "item": "Pane bianco mulino bianco"
      },
      {
        "expired": "2022-10-17",
        "item": "Pane integrale conad "
      },
      {
        "expired": "2022-10-18",
        "item": "Pangotta grano duro conad "
      },
      {
        "expired": "2022-10-19",
        "item": "Filone rustico conad "
      },
      {
        "expired": "2022-10-19",
        "item": "Sfilatini mulino bianco "
      },
      {
        "expired": "2022-10-21",
        "item": "Piadelle integrali "
      },
      {
        "item": "Pan carre barilla 24 fette",
        "expired": "2022-10-23"
      },
      {
        "expired": "2022-10-24",
        "item": "Panini latte conad "
      },
      {
        "expired": "2022-10-25",
        "item": "Panini hamburger integrali"
      },
      {
        "expired": "2022-10-25",
        "item": "Panini hamburger x6"
      },
      {
        "item": "Pane segale conad",
        "expired": "2022-10-26"
      },
      {
        "expired": "2022-10-26",
        "item": "Baguette crm"
      },
      {
        "item": "Pane integrale mulino bianco",
        "expired": "2022-10-26"
      },
      {
        "expired": "2022-10-26",
        "item": "Craker mulino bianco integrali"
      },
      {
        "expired": "2022-10-26",
        "item": "Pane mulino bianco cereali"
      },
      {
        "item": "Pane 8 cereali conad ",
        "expired": "2022-10-28"
      },
      {
        "item": "Pane rustic conad 500g",
        "expired": "2022-10-30"
      },
      {
        "expired": "2022-10-30",
        "item": "Pane grano duro conad"
      },
      {
        "expired": "2022-11-01",
        "item": "Valfrutta pera 125x3 "
      },
      {
        "item": "Pane farro conad ",
        "expired": "2022-11-01"
      },
      {
        "item": "Tarallini conad 400g",
        "expired": "2022-11-01"
      },
      {
        "item": "Croissant salato dal colle",
        "expired": "2022-11-01"
      },
      {
        "expired": "2022-11-01",
        "item": "Pane bianco conad"
      },
      {
        "expired": "2022-11-01",
        "item": "Piadelle clasiche"
      },
      {
        "item": "Grissini pane alba nostrani integrali",
        "expired": "2022-11-01"
      },
      {
        "item": "Tigelle mulino bianco ",
        "expired": "2022-11-08"
      },
      {
        "expired": "2022-11-09",
        "item": "Pane soffice conad integrale"
      },
      {
        "expired": "2022-11-09",
        "item": "Pane soffice conad"
      },
      {
        "expired": "2022-11-09",
        "item": "Piadina crm "
      },
      {
        "item": "Grissini rubata conad S&D",
        "expired": "2022-11-12"
      },
      {
        "item": "Panini hamburger maxi conad",
        "expired": "2022-11-12"
      },
      {
        "expired": "2022-11-13",
        "item": "Pan carre barilla 16 fette"
      },
      {
        "item": "Pane party toast",
        "expired": "2022-11-15"
      },
      {
        "item": "Ghiottina classica ",
        "expired": "2022-11-16"
      },
      {
        "expired": "2022-11-20",
        "item": "Santal albicocca 3x200"
      },
      {
        "item": "Tarallini conad peperoncino S&D",
        "expired": "2022-11-20"
      },
      {
        "expired": "2022-11-21",
        "item": "Panpiuma grano tenero"
      },
      {
        "item": "Pane tramezzini conad",
        "expired": "2022-11-22"
      },
      {
        "item": "Craker scotti integrali",
        "expired": "2022-11-22"
      },
      {
        "item": "Piadina classica conad ",
        "expired": "2022-11-22"
      },
      {
        "expired": "2022-11-22",
        "item": "Piadina loriana olio"
      },
      {
        "item": "Panpiuma integrale",
        "expired": "2022-11-22"
      },
      {
        "expired": "2022-11-27",
        "item": "Tarallini conad finocchio S&D"
      },
      {
        "expired": "2022-11-28",
        "item": "Pane kamut conad "
      },
      {
        "expired": "2022-11-28",
        "item": "Piadina olio conad "
      },
      {
        "item": "Grissini integrali conad S&I",
        "expired": "2022-12-01"
      },
      {
        "expired": "2022-12-01",
        "item": "Panini hamburger conad sesamo"
      },
      {
        "item": "Piadina loriana sfogliatissima",
        "expired": "2022-12-02"
      },
      {
        "expired": "2022-12-04",
        "item": "Panini hotdog conad"
      },
      {
        "item": "Piadina integrale conad ",
        "expired": "2022-12-05"
      },
      {
        "item": "Panini hamburger conad maxi x4",
        "expired": "2022-12-06"
      },
      {
        "expired": "2022-12-13",
        "item": "Tocchetti miss pavesi"
      },
      {
        "item": "Taralloro pizza ",
        "expired": "2022-12-14"
      },
      {
        "expired": "2022-12-14",
        "item": "Taralloro peperoncino"
      },
      {
        "expired": "2022-12-17",
        "item": "Fagoloso sesamo"
      },
      {
        "item": "Craker mulino bianco non salati",
        "expired": "2022-12-17"
      },
      {
        "expired": "2022-12-20",
        "item": "Ghiottina rosmarino"
      },
      {
        "expired": "2022-12-27",
        "item": "Schiacciatine conad"
      },
      {
        "expired": "2023-01-01",
        "item": "Fagolosi rosmarino"
      },
      {
        "item": "Bocconcini kamut consd",
        "expired": "2023-01-04"
      },
      {
        "item": "Grissini mulino bianco sgranocchi integrali",
        "expired": "2023-01-04"
      },
      {
        "expired": "2023-01-05",
        "item": "Garnett Muldoon bianco"
      },
      {
        "expired": "2023-01-05",
        "item": "Granetti integrali mulino bianco "
      },
      {
        "item": "Stuzzichina rosmarino",
        "expired": "2023-01-05"
      },
      {
        "item": "Craker gran pavesi",
        "expired": "2023-01-10"
      },
      {
        "expired": "2023-01-10",
        "item": "Grissini mulino bianco pangri"
      },
      {
        "expired": "2023-01-15",
        "item": "Tarallini conad olio S&D"
      },
      {
        "expired": "2023-01-24",
        "item": "Crostini san carlo 75g"
      },
      {
        "expired": "2023-01-24",
        "item": "Pane sandwich conad"
      },
      {
        "expired": "2023-01-24",
        "item": "Grissini rustici conad"
      },
      {
        "item": "Grissini fagolosi classici",
        "expired": "2023-01-24"
      },
      {
        "expired": "2023-01-25",
        "item": "Craker gran pavesi non salati"
      },
      {
        "expired": "2023-01-27",
        "item": "Crostini dorati conad"
      },
      {
        "item": "Bruschettine rosmarino conad",
        "expired": "2023-01-28"
      },
      {
        "item": "Pane integrale pema ",
        "expired": "2023-01-28"
      },
      {
        "expired": "2023-01-29",
        "item": "Grissini friabili conad"
      },
      {
        "expired": "2023-01-31",
        "item": "Crack doria zucca rosmarino"
      },
      {
        "item": "Tuc integrale 267g",
        "expired": "2023-01-31"
      },
      {
        "expired": "2023-01-31",
        "item": "Crostini conad integrali 250g"
      },
      {
        "item": "Pane carasau S&D",
        "expired": "2023-02-01"
      },
      {
        "item": "Crostini panealba paprika",
        "expired": "2023-02-01"
      },
      {
        "item": "Crostino buitoni multicereali",
        "expired": "2023-02-01"
      },
      {
        "item": "Craker riso soffiato integrale conad ",
        "expired": "2023-02-03"
      },
      {
        "expired": "2023-02-04",
        "item": "Schiacciatine conad rosmarino"
      },
      {
        "item": "Grissini torinesi conad",
        "expired": "2023-02-09"
      },
      {
        "expired": "2023-02-12",
        "item": "Crack risk su riso integrali"
      },
      {
        "item": "Grissini sesamo conad S&I",
        "expired": "2023-02-13"
      },
      {
        "expired": "2023-02-13",
        "item": "Grissini mulino bianco sgranocchi"
      },
      {
        "expired": "2023-02-17",
        "item": "Craker conad senza  lievito"
      },
      {
        "expired": "2023-02-28",
        "item": "Crack doria spinach teff"
      },
      {
        "item": "Craker doria riso nero",
        "expired": "2023-02-28"
      },
      {
        "item": "Craker doria grano saraceno",
        "expired": "2023-02-28"
      },
      {
        "expired": "2023-02-28",
        "item": "Bruschettine olive conad 150g "
      },
      {
        "item": "Pane proteico pema ",
        "expired": "2023-02-28"
      },
      {
        "expired": "2023-02-28",
        "item": "Tuc sfoglie paprika"
      },
      {
        "item": "Tuc crisp ",
        "expired": "2023-02-28"
      },
      {
        "expired": "2023-03-01",
        "item": "Pane azimo nattura integrale"
      },
      {
        "item": "Pane azimo nattura",
        "expired": "2023-03-01"
      },
      {
        "item": "Craker misura multigrain",
        "expired": "2023-03-01"
      },
      {
        "expired": "2023-03-01",
        "item": "Craker galbusera legumi"
      },
      {
        "expired": "2023-03-03",
        "item": "Craker conad soia"
      },
      {
        "item": "Cracker belle e buone galbusera avena",
        "expired": "2023-03-04"
      },
      {
        "item": "Sfoglie gran pavesi mais",
        "expired": "2023-03-04"
      },
      {
        "item": "Craker scotti venere ",
        "expired": "2023-03-11"
      },
      {
        "item": "Grissini kamut conad",
        "expired": "2023-03-16"
      },
      {
        "item": "Crack risk su riso",
        "expired": "2023-03-21"
      },
      {
        "item": "Craker scotti",
        "expired": "2023-03-21"
      },
      {
        "item": "Craker conad kamut",
        "expired": "2023-03-22"
      },
      {
        "item": "Crack galbusera integrali",
        "expired": "2023-03-23"
      },
      {
        "item": "Craker riso soffiato conad ",
        "expired": "2023-03-26"
      },
      {
        "expired": "2023-03-28",
        "item": "Pane segale pema "
      },
      {
        "expired": "2023-03-30",
        "item": "Tuc sfoglie"
      },
      {
        "expired": "2023-03-31",
        "item": "Tuc bacon 100g"
      },
      {
        "item": "Crostino integrale buitoni",
        "expired": "2023-04-01"
      },
      {
        "expired": "2023-04-02",
        "item": "Croccantelle bacon"
      },
      {
        "expired": "2023-04-02",
        "item": "Croccantelle prosciutto"
      },
      {
        "item": "Crack magretti",
        "expired": "2023-04-04"
      },
      {
        "expired": "2023-04-09",
        "item": "Cracker belle e buone galbusera 5 cereali"
      },
      {
        "expired": "2023-04-10",
        "item": "Craker conad integrali"
      },
      {
        "expired": "2023-04-20",
        "item": "Bocconcini croccanti conad"
      },
      {
        "expired": "2023-04-27",
        "item": "Conad sfoglia riso mais "
      },
      {
        "item": "Craker pomodoro grana conad ",
        "expired": "2023-04-28"
      },
      {
        "item": "Mini crostini conad 100g",
        "expired": "2023-05-01"
      },
      {
        "item": "Craker misura fibrextra viola",
        "expired": "2023-05-01"
      },
      {
        "item": "Grissini panealba nostrani",
        "expired": "2023-05-01"
      },
      {
        "expired": "2023-05-01",
        "item": "Craker misura soia "
      },
      {
        "expired": "2023-05-01",
        "item": "Craker misura fibrextra"
      },
      {
        "item": "Craker rosmarino conad ",
        "expired": "2023-05-11"
      },
      {
        "item": "Sfoglie conad multicereali",
        "expired": "2023-05-19"
      },
      {
        "item": "Friselle integrali",
        "expired": "2023-05-25"
      },
      {
        "expired": "2023-05-29",
        "item": "Sfoglie gran pavesi"
      },
      {
        "item": "Tuc 100g",
        "expired": "2023-05-30"
      },
      {
        "expired": "2023-05-31",
        "item": "Was a sesame"
      },
      {
        "expired": "2023-05-31",
        "item": "Wasa original"
      },
      {
        "item": "Crostini classici conad 75g",
        "expired": "2023-06-01"
      },
      {
        "expired": "2023-06-13",
        "item": "Craker conad leggeri (simil fiori d'acqua)"
      },
      {
        "item": "Friselle classiche",
        "expired": "2023-06-30"
      },
      {
        "expired": "2023-06-30",
        "item": "Wasa chia"
      },
      {
        "expired": "2023-06-30",
        "item": "Wasa semi lino"
      },
      {
        "expired": "2023-06-30",
        "item": "Wasa integrale "
      },
      {
        "expired": "2023-07-01",
        "item": "Pane azimo conad "
      },
      {
        "expired": "2023-07-01",
        "item": "Cracker snack conad (simil tuc)"
      },
      {
        "item": "Craker conad",
        "expired": "2023-07-12"
      },
      {
        "expired": "2023-07-13",
        "item": "Taralloro oliva"
      },
      {
        "expired": "2023-07-14",
        "item": "Craker conad non salati"
      },
      {
        "item": "Taralloro classico",
        "expired": "2023-07-21"
      },
      {
        "item": "Taralloro finocchio",
        "expired": "2023-07-21"
      },
      {
        "expired": "2023-07-31",
        "item": "Tuc 250g"
      },
      {
        "expired": "2023-07-31",
        "item": "Cracker tuc rosmarino 250g"
      },
      {
        "expired": "2023-07-31",
        "item": "Wasa avena"
      },
      {
        "item": "Tarallini taralloro MPK 210g",
        "expired": "2023-08-06"
      },
      {
        "expired": "2023-08-31",
        "item": "Tuc pomodoro grana 250g"
      },
      {
        "item": "Crostino dorato buitoni",
        "expired": "2023-10-01"
      },
      {
        "expired": "2023-10-30",
        "item": "Pan carre conad 6+6"
      },
      {
        "expired": "2022-09-27",
        "item": "Yogurt"
      }
    ]
  }
  constructor(private db: AngularFirestore) {
    JSON.parse(localStorage.getItem('item')!) === null || undefined
      ? localStorage.setItem('item', JSON.stringify(this.itemObj))
      : (this.itemObj = JSON.parse(localStorage.getItem('item')!));
  }

  setData = async (items: object) => {
    this.db.collection('users').doc(this.user.uid).set(items);
  };
  updateData = async (items: object) => {
    this.db.collection('users').doc(this.user.uid).update(items);
  };
  getData = async () => {
    this.db
      .collection('users')
      .doc(this.user.uid)
      .ref.get()
      .then((doc: any) => {
        let userObject = doc.data();
        if (userObject.items) {
          localStorage.setItem('item', JSON.stringify(doc.data()));
        }
      });
  };

  addItem(item: Item) {
    this.itemObj.items.unshift(item);
    localStorage.setItem('item', JSON.stringify(this.itemObj));
    this.setData(this.super);
    this.getData()
    window.alert(`${JSON.stringify(item.item)} aggiunto`);
  }

  removeItem(i: number) {
    let itemToRemove = this.itemObj.items[i].item;
    if (confirm(`vuoi cancellare ${itemToRemove}?`)) {
      this.itemObj.items.splice(i, 1);
      localStorage.setItem('item', JSON.stringify(this.itemObj));
      debugger;
      this.setData(this.itemObj);
      this.getData()
    }
  }

  expiredItem(i: number) {
    this.itemObj.items.splice(i, 1);
    localStorage.setItem('item', JSON.stringify(this.itemObj));
    this.setData(this.itemObj);
    this.getData()
  }

  getItems() {
    return this.itemObj.items;
  }
}
