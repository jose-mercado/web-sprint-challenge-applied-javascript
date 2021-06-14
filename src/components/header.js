const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //

  const header = document.createElement("div")
  header.classList.add('header')

  const dateSpan = document.createElement("span")
  dateSpan.classList.add('date')
  header.appendChild(dateSpan)
  date.textContent = date

  const titleH1 = document.createElement('h1')
  header.appendChild(titleH1)
  titleH1.textContent = title

  const tempSpan = document.createElement('span')
  tempSpan.classList.add('temp')
  header.appendChild(tempSpan)
  tempSpan.textContent = temp


  //  XXX <div class="header">
  //   xxx <span class="date">{ date }</span>
  //   xxx <h1>{ title }</h1>
  //   xxx <span class="temp">{ temp }</span>
  //  </div>
  //
  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerApp = document.querySelector(selector)
  let headerAppe = Header('Lambda Times', 'October 18, 1999', '30')
  headerApp.appendChild(headerAppe)
}

export { Header, headerAppender }
