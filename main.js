//fetch("https://newsapi.org/v2/sources?apiKey=fdea17a5cd69425dbca772afe260f452").then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.error(error));


const apikey = 'fdea17a5cd69425dbca772afe260f452';
const everything = document.getElementById('container');
const p=document.getElementById('failed')

fetchdata();

async function fetchdata() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`);

    if (!response.ok) {
      throw new Error("Could not fetch resources");
    }

    const datas = await response.json();
    console.log(datas);

    datas.articles.forEach(article => {
      const div = document.createElement('div');
      div.classList.add('headline-styling');  // Add CSS class

      const title = document.createElement('p');
      title.textContent = article.title;

      const description = document.createElement('p');
      description.textContent = article.description;

      const image = document.createElement('img');
      image.src = article.urlToImage;
      image.alt = article.title;

      const link = document.createElement('a');
      link.href = article.url;
      link.textContent = "Read more";
    

      div.append(image, title, description, link);
      everything.append(div);
    });

  } catch (error) {
    console.error(error);
    p.textContent=error;
  }
}