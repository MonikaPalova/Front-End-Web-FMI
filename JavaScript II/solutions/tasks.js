// task1

var person = {
  _salary: 1000,
  getSecretSalaryInfo: function() {
    return this._salary;
  }
};

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo());
console.log(stoleSalaryInfo);

// task2

function Person(Name) {
  this.name = Name;
  this.print = function() {
    console.log(`Здравей [${this.name}] от планетата [${Person.planet}]`);
  }
}
Person.planet = "Земя";

var person1 = new Person("Jim");
var person2 = new Person("Tim");
var person3 = new Person("Tom");
person1.print();
person2.print();
person3.print();

// task3

function Item(name, discountPercentage) {
  this.name = name;
  this.discountPercentage = discountPercentage;
  this.findDiscountedPrice = function() {
    return (100 - this.discountPercentage) * (Item.prototype.getUsualPrice()) / 100;
  }
}
Item.prototype.getUsualPrice = function() {
  return 1000;
}

var item = new Item("Pesho", 15);
console.log(item.findDiscountedPrice()); //850

//task4

class Person2 {
  getSecretSalaryInfo() {
    const _salary = 1000;
    return _salary;
  }
};
var person = new Person2();
var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo());
console.log(stoleSalaryInfo);

//task5

function task5(sColor1, sColor2) {
  var pTags = document.getElementsByTagName("p");
  var headerTitleClassElements = document.getElementsByClassName("headertitle");

  var pTagsCount = pTags.length;
  var headerTitleCount = headerTitleClassElements.length;
  document.title = `${pTagsCount} параграфа, ${headerTitleCount} елемента с клас <headertitle>`;

  function changeBackgroundColor(sColor, element) {
    element.style.background = sColor;
  }
  for (let i = 0; i < pTagsCount; i++) {
    changeBackgroundColor(sColor1, pTags[i]);
  }
  for (let i = 0; i < headerTitleCount; i++) {
    changeBackgroundColor(sColor2, headerTitleClassElements[i]);
  }
}

//task6

function createPage() {
  var html = `<table border='1'>
           <caption>table caption</caption>
           <thead>
              <tr>
                 <th>Evidence Rating</th>
                 <th>Effect</th>
                 <th>Efficacy</th>
                 <th>Consensus</th>
                 <th>Comments</th>
              </tr>
           </thead>
           <tbody>
              <tr>
                 <td>A</td>
                 <td>Power Output</td>
                 <td>3 Stars</td>
                 <td>80%<br>18 studies</td>
                 <td>Loremips eaque exce[turi fuga in ipsa laudsadna moll consectetur adipisicing elit. Ab ad corporis cumque, dignissimos eaque exce[turi fuga in ipsa laudsadna mollita obadesa odio offica.</td>
              </tr>
              <tr>
                 <td>B</td>
                 <td>Weight</td>
                 <td>4 Stars</td>
                 <td>80%<br>65 studies</td>
                 <td>Loremipsumdolor sit amet, consectetur adipisicing elit. Ab ad corporis cumque.</td>
              </tr>
           </tbody>
        </table>`;
  var iframe = document.createElement('iframe');
  iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
  iframe.frameBorder = `0`;
  iframe.style = `overflow:hidden;
         display:block;
         position: absolute;
          height: 100%;
           width: 100%;`
  document.body.appendChild(iframe);
}

//task7
