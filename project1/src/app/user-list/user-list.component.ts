import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users;
  @Output() deletedInfo = new EventEmitter();
  @Output() editObj = new EventEmitter();
  start: number;
  end: number;
  nos = 5;
  totalPages: number;
  pageNumbers = [];
  constructor(private commonService: CommonService) {}
  searchText;
  searchUsers() {
    let tempUsers = [...this.users];

    if (this.searchText.length > 0) {
      let searchUsers = tempUsers.filter(user => {
        return user.fname.indexOf(this.searchText) > -1;
      });
      this.users = searchUsers;
    } else {
      console.log(tempUsers);
      this.users = JSON.parse(localStorage.getItem("users"));
    }
  }
  ngOnInit() {
    this.start = 0;
    this.end = this.start + this.nos;
    this.users = users;
    this.totalPages = this.users.length / this.nos;

    for (let i = 1; i <= this.totalPages; i++) {
      this.pageNumbers.push(i);
    }
    localStorage.setItem("users", JSON.stringify(this.users));

    // this.commonService.sendUsersInfo.subscribe(res => {
    // this.totalPages = res.length / this.nos;
    // for (let i = 1; i <= this.totalPages; i++) {
    //   this.pageNumbers.push(i);
    // }
    //   console.log(this.pageNumbers);
    // });
  }

  gotoPage(page) {
    console.log(page);
    this.start = page * this.nos;
    this.end = this.start + this.nos;
  }
  deleteUser(user) {
    this.commonService.deleteUser(user).subscribe(res => {
      this.deletedInfo.emit();
    });
  }

  editUser(user) {
    console.log(user);
    this.editObj.emit(user);
  }
}

const users = [
  {
    fname: "Susen",
    lname: "Hagan",
    tel: "(741)566-2936",
    address: "5274 Porttitor Ave",
    city: "Lees Summit",
    state: "MO",
    zip: 27895
  },
  {
    fname: "Anuraag",
    lname: "Bright",
    tel: "(293)616-7538",
    address: "7427 Convallis St",
    city: "Janesville",
    state: "AL",
    zip: 71848
  },
  {
    fname: "Terrance",
    lname: "Shiffman",
    tel: "(953)826-3093",
    address: "4258 Porta St",
    city: "Pine Mountain",
    state: "SC",
    zip: 57916
  },
  {
    fname: "Debra",
    lname: "Chester",
    tel: "(739)431-7954",
    address: "6421 Lectus St",
    city: "New York",
    state: "DE",
    zip: 74782
  },
  {
    fname: "Brooks",
    lname: "Women",
    tel: "(403)338-4767",
    address: "892 Donec Dr",
    city: "Seaside",
    state: "AL",
    zip: 47209
  },
  {
    fname: "Shawn",
    lname: "Prellwitz",
    tel: "(149)289-3096",
    address: "4828 Dolor Ln",
    city: "Minneapolis",
    state: "WV",
    zip: 12740
  },
  {
    fname: "Kendall",
    lname: "Deos",
    tel: "(510)026-6867",
    address: "9450 Sollicitudin Rd",
    city: "Yakima",
    state: "OK",
    zip: 71122
  },
  {
    fname: "Minnita",
    lname: "Arnold",
    tel: "(938)900-1858",
    address: "3720 Massa Ave",
    city: "Saltilo",
    state: "MI",
    zip: 81330
  },
  {
    fname: "Sharmistha",
    lname: "Karma",
    tel: "(701)016-7429",
    address: "7439 Eros Dr",
    city: "Appleton",
    state: "MT",
    zip: 97967
  },
  {
    fname: "Beth",
    lname: "Pointelin",
    tel: "(546)622-4672",
    address: "4281 Magna Dr",
    city: "Cullman",
    state: "WA",
    zip: 45867
  },
  {
    fname: "Cherise",
    lname: "Sutliff",
    tel: "(548)866-7895",
    address: "8943 Libero St",
    city: "Northwest",
    state: "MO",
    zip: 10552
  },
  {
    fname: "Emced",
    lname: "Petti",
    tel: "(939)942-1754",
    address: "7445 Lectus St",
    city: "Galveston",
    state: "ID",
    zip: 49625
  },
  {
    fname: "Derrick",
    lname: "Nicols",
    tel: "(632)083-1137",
    address: "3458 Placerat Ct",
    city: "Pawleys Island",
    state: "RI",
    zip: 83395
  },
  {
    fname: "Jerry",
    lname: "Cook",
    tel: "(609)130-5935",
    address: "4965 Neque Dr",
    city: "Durham",
    state: "MS",
    zip: 93668
  },
  {
    fname: "Ben",
    lname: "Phillips",
    tel: "(596)377-3313",
    address: "4510 Convallis Ct",
    city: "Mooresville",
    state: "RI",
    zip: 19739
  },
  {
    fname: "Vittorio",
    lname: "Absalom",
    tel: "(638)703-5949",
    address: "4995 Magna St",
    city: "Phoenix",
    state: "MN",
    zip: 10979
  },
  {
    fname: "Victoria",
    lname: "Wheeler",
    tel: "(937)463-1235",
    address: "5482 Lacus Ct",
    city: "Smithers",
    state: "OR",
    zip: 98955
  },
  {
    fname: "Clare",
    lname: "Willman",
    tel: "(758)254-6417",
    address: "6404 Non Ln",
    city: "Chambersburg",
    state: "DE",
    zip: 40002
  },
  {
    fname: "Ingrid",
    lname: "Hauler",
    tel: "(645)478-7133",
    address: "9767 Dui Ave",
    city: "Laredo",
    state: "AZ",
    zip: 48601
  },
  {
    fname: "Arvid",
    lname: "Johnson",
    tel: "(710)189-2129",
    address: "5830 Ipsum Ln",
    city: "Cheektowaga",
    state: "MI",
    zip: 93420
  },
  {
    fname: "Carmerlina",
    lname: "Kahle",
    tel: "(337)581-3800",
    address: "8910 Egestas Rd",
    city: "Waco",
    state: "NE",
    zip: 90497
  },
  {
    fname: "Kimberleigh",
    lname: "Rush",
    tel: "(768)612-8576",
    address: "8958 Neque Ct",
    city: "Riverview",
    state: "OK",
    zip: 99439
  },
  {
    fname: "Todd",
    lname: "Bias",
    tel: "(452)065-3351",
    address: "6587 Aenean St",
    city: "Union City",
    state: "MN",
    zip: 65605
  },
  {
    fname: "Harold",
    lname: "Klepsteen",
    tel: "(651)641-6485",
    address: "719 Dolor St",
    city: "Nashville",
    state: "KS",
    zip: 89017
  },
  {
    fname: "Vicky",
    lname: "Towers",
    tel: "(401)213-9625",
    address: "6143 Sit Ct",
    city: "Fort Collins",
    state: "AK",
    zip: 94802
  },
  {
    fname: "Bernadette",
    lname: "Snow",
    tel: "(217)705-7813",
    address: "5027 Egestas Ct",
    city: "Marion",
    state: "MD",
    zip: 65665
  },
  {
    fname: "Petr",
    lname: "Hatter",
    tel: "(534)845-2185",
    address: "2927 Aenean Dr",
    city: "Flushing",
    state: "PA",
    zip: 37825
  },
  {
    fname: "Jeanneth",
    lname: "Borgford",
    tel: "(196)711-0628",
    address: "7024 Molestie Ct",
    city: "Kansas City",
    state: "UT",
    zip: 55951
  },
  {
    fname: "Tonja",
    lname: "Crompton",
    tel: "(132)133-6976",
    address: "6906 Sapien St",
    city: "Tucson",
    state: "KY",
    zip: 23789
  },
  {
    fname: "Armando",
    lname: "Yach",
    tel: "(497)335-6346",
    address: "1961 Egestas Dr",
    city: "Castle Rock",
    state: "FL",
    zip: 77684
  }
];
