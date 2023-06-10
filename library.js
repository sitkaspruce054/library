
let cancel_entry = document.getElementById('cancel')
let library = []
let addbtn = document.querySelector('.addbk')
let bookshelf = document.querySelector('.container')
let bookform = document.querySelector('.form-container')

let form = document.getElementById('form_container')

bookform.style.visibility = 'hidden'

function Book(author,title,pagecount,read){
    this.author = author
    this.title = title
    this.pagecount = pagecount
    this.read = read;
}


function addToLib(Book){


}



addbtn.addEventListener('click',() =>{
    console.log('ds')

    bookform.classList.toggle('fade');
    bookform.style.visibility = 'visible'
    
    
})

cancel_entry.addEventListener('click',() =>{
    console.log('ds')

    
    bookform.style.visibility = 'hidden'
    
    
})

/** this function will only be called when  */

form.addEventListener('submit',addbook);


function addbook(event){
    
    event.preventDefault();
    const bookdata = new FormData(event.target);
    const book = new Book();
    book.internal_id = library.length 
    bookdata.forEach((value,key)=> (book[key] = value));
    library.push(book)
    
    populate_display(book)
    console.log(library)
}



function populate_display(book){
    
    const newitem = document.createElement('div')
    const del_but = document.createElement('button')
    del_but.textContent = 'Remove'
   
   
    
    newitem.classList.add('card')
    console.log(book)
    newitem.textContent = book.internal_id


        
    bookshelf.appendChild(newitem)
    newitem.appendChild(del_but)

        
        
        
    
    console.log('end')
    
}

function delete_book(){

}



