export function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  }

  export const reArrangeData = ({general,technology,sports,entertainment,business, everything}) => {
    const arrCollection = [...entertainment, ...technology, ...business, ...everything];
    let newGeneral = [];
    const popularContent = [
      ...general,
      ...technology,
      ...sports,
      ...entertainment,
      ...business,
      ...everything
    ];
    let popularMain = [];
  
    shuffle(arrCollection);
  
    arrCollection.forEach((article) => {
      if (article.mediaUrl) {
        newGeneral.push(article);
      }
    });
  
    shuffle(newGeneral);
    shuffle(popularContent);
  
    popularContent.forEach((article) => {
      if ( article.mediaUrl) {
        popularMain.push(article);
      }
    });
  
    newGeneral.length = 6;
    popularMain.length = 10;

    return {
        newGeneral,
        popularMain
    }
  }