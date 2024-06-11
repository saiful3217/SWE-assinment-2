let click = false;

const fetchallcatagories = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await res.json();
    // console.log(data.data);
    showAllcatagories(data.data);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

fetchallcatagories();

// this is for showing catagories button
const showAllcatagories = (all_data) => {
  const catagories = document.getElementById("buttons-container");
  all_data.forEach((data) => {
    // console.log(data);
    // const btn = document.createElement("div");
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-secondary ");
    // btn.innerHTML = `<button type="button" onclick="singleCatagoriesfetch(${data.category_id})" class="btn btn-secondary">${data.category}</button>`;
    btn.setAttribute("onclick", `singleCatagoriesfetch(${data.category_id})`);
    btn.innerText = data.category;
    catagories.appendChild(btn);
  });
};
const singleCatagoriesfetch = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${
        id ? id : 1000
      }`
    );
    const data = await res.json();
    console.log(data.data);

    showSingleCatagories(data.data);
    // transferSorteddata(data.data)
    // if (data.data.length > 0) {

    // }
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

// const transferSorteddata = ( unsorted) => {
//   click=true
// console.log(unsorted);
//   console.log("transferSorteddata clicked ");

// };

singleCatagoriesfetch();
const showSingleCatagories = (data) => {
  // console.log(data);

  const cardContainer = document.getElementById("show-contents");
  document.getElementById("data-notfound").innerHTML = "";
  document.getElementById("data-notfound").removeAttribute("class");
  // const b= data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views))
  if (click == true) {
    data.sort(
      (a, b) => parseFloat(b.others.views) - parseFloat(a.others.views)
    );
    click = false;
  }
  //     console.log(b);
  cardContainer.innerHTML = "";
  if (data.length > 0) {
    data.forEach((singleData) => {
      const card = document.createElement("div");
      card.setAttribute("class", "col");
      card.innerHTML = `
      <div class="card border border-0 h-100">
        <img class="bd-placeholder-img card-img-top" width="100%" height="180" src="${singleData.thumbnail}"  role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></img>
        <div class="card-body">
        <div class="d-flex s" >
        <div>
        <img class=" profilepic rounded-circle" src="${singleData.authors[0].profile_picture}" alt="P" srcset="">
        </div>
          <div>
          <h5 class=" align-content-center card-title">${singleData.title}</h5>
          <div class="d-flex gap-2" id="verifying " > 
        <p class="text-body-secondary" >${singleData.authors[0].profile_name}</p>
        ${(singleData.authors[0].verified == true) ? `<i class="fa-solid fa-circle-check text-blue-500"></i>` : '<p></p>'}
        </div>
        <p class="text-body-secondary" >${singleData.others.views} views</p>
        </div>
        </div>
        </div>
          </div>
            `;
      // if (singleData.authors[0].verified == true) {
      //   const icon=document.createElement("i")
      //   icon.setAttribute("class","fa-solid fa-circle-check text-blue-500")
      //   document.getElementById("verifying").append(icon)
      // }
      cardContainer.append(card);
    });
  } else {
    document
      .getElementById("data-notfound")
      .setAttribute(
        "class",
        "d-flex w-100 align-content-center justify-content-center mt-5"
      );
    document.getElementById("data-notfound").innerHTML = `
    
    <div class="text-center " >
<img class="mb-4" src="./data/Icon.png"" alt="" srcset="">
    <h1>Oops!! Sorry, There is no <br>Content here</h1>
    </div>
    
    `;
  }
};

const transferSorteddata = async () => {
  let data = null;
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/1000`
    );
    const udata = await res.json();
    console.log(udata.data);
    data = udata.data;
  } catch {
    (err) => {
      console.log(err);
    };
  }

  data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views));

  const cardContainer = document.getElementById("show-contents");
  document.getElementById("data-notfound").innerHTML = "";
  document.getElementById("data-notfound").removeAttribute("class");
  // const b= data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views))
  // if(click==true)
  //   {
  //     data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views))
  //     click=false
  //   }
  //     console.log(b);
  cardContainer.innerHTML = "";
  if (data.length > 0) {
    data.forEach((singleData) => {
      const card = document.createElement("div");
      card.setAttribute("class", "col");
      card.innerHTML = `
    <div class="card border border-0 h-100">
      <img class="bd-placeholder-img card-img-top" width="100%" height="180" src="${singleData.thumbnail}"  role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></img>
      <div class="card-body">
      <div class="d-flex s" >
      <div>
      <img class=" profilepic rounded-circle" src="${singleData.authors[0].profile_picture}" alt="P" srcset="">
      </div>
        <div>
        <h5 class=" align-content-center card-title">${singleData.title}</h5>
        <div class="d-flex gap-2" id="verifying " > 
        <p class="text-body-secondary" >${singleData.authors[0].profile_name}</p>
        ${(singleData.authors[0].verified == true) ? `<i class="fa-solid fa-circle-check text-blue-500"></i>` : '<p></p>'}
        </div>
        <p class="text-body-secondary" >${singleData.others.views} views</p>
        </div>
        </div>
        </div>
          </div>
          `;
      // if (singleData.authors[0].verified == true) {
      //   const icon=document.createElement("i")
      //   icon.setAttribute("class","fa-solid fa-circle-check text-blue-500")
      //   document.getElementById("verifying").append(icon)
      // }
      cardContainer.append(card);
    });
  } else {
    document
      .getElementById("data-notfound")
      .setAttribute(
        "class",
        "d-flex w-100 align-content-center justify-content-center mt-5"
      );
    document.getElementById("data-notfound").innerHTML = `
  
  <div class="text-center " >
<img class="mb-4" src="./data/Icon.png"" alt="" srcset="">
  <h1>Oops!! Sorry, There is no <br>Content here</h1>
  </div>
  
  `;
  }
};
