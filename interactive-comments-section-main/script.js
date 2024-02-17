async function GetData() {
  try {
    const Response = await fetch('./data.json');
    const Data = await Response.json();
    return Data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


let Comment_1 = document.querySelector('#Comment-1')
let Comment_2 = document.querySelector('#Comment-2')
let Comment_3 = document.querySelector('#Comment-3')
let Comment_4 = document.querySelector('#Comment-4')

console.log(Comment_1, Comment_2, Comment_3, Comment_4);
const FetchData = async () => {
  try {
    let Data = await GetData();
    let Message1 = Data.comments[0].content
    let Message2 = Data.comments[1].content

    Comment_1.innerHTML = Message1;
    Comment_2.innerHTML = Message2;

    let Message3 = Data.comments[1].replies[0].content;
    let Message4 = Data.comments[1].replies[1].content;

    Comment_3.innerHTML = Message3;
    Comment_4.innerHTML = Message4;
  } catch (error) {
    console.error(error);
  }
}

function PuchData() {

}

FetchData();