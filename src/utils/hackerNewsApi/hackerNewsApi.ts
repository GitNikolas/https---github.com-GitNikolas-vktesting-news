export async function fetchNewsArray(){
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`);
    let data = await res.json();
    data = data.slice(0,100);
    let newsArr = [];
    for(let i = 0; i < data.length; i++){
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
      const news = await res.json();
      newsArr.push(news);
    }
    return newsArr;
  }

  export async function getLastestNews(){
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`);
    let data = await res.json();
    return data[0];
  }