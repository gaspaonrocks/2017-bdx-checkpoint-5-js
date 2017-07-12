let algo1 = {
  templateUrl: './js/components/algo/algo1/algo1.html',
  controller: [function () {
    'use  strict';

    this.persons = [];
    this.results = [];

    this.$onInit = () => {}

    this.addPerson = () => {
      this.persons.push(this.person);
      this.person = '';
    }

    this.runAlgo = () => {
      this.results = ((friends) => {
        let realFriends = [];
        if (friends.length)
          for (let i = 0, len = friends.length; i < len; i++) {
            if (friends[i].length == 4) {
              realFriends.push(friends[i]);
            }
          }
        return realFriends;
      })(this.persons);
      console.log(this.results);
    }

    this.clearTables = () => {
      this.persons = [];
      this.results = [];
    }
  }]
}

export default algo1