// import mdfiles
import UXCheckList from './UXCheckList.md';
import Colors from './Colors.md';

let mdList = [];

// fetch mdfiles
try {
  fetch(UXCheckList)
    .then((response) => response.text())
    .then((text) => {
      mdList = [
        ...mdList,
        { title: text.match(/^(.*)$/m)[0].substring(3), text },
      ];
      //   console.log(sorc);
      //   console.log(sorc[0].match(/^(.*)$/m)[0].substring(3));
    });
} catch (error) {
  console.log('waiting');
}

try {
  fetch(Colors)
    .then((response) => response.text())
    .then((text) => {
      mdList = [
        ...mdList,
        { title: text.match(/^(.*)$/m)[0].substring(3), text },
      ];
      //   console.log(sorc);
      //   console.log(sorc[0].match(/^(.*)$/m)[0].substring(3));
    });
} catch (error) {
  console.log('waiting');
}

// export mdfiles' list
console.log(mdList);
export { mdList };
