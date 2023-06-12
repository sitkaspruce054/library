
let cancel_entry = document.getElementById('cancel')
let library = []
let addbtn = document.querySelector('.addbk')
let bookshelf = document.querySelector('.container')
let bookform = document.querySelector('.form-container')

let form = document.getElementById('form_container')

let counter = 0

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
    event.stopPropagation();
    event.preventDefault();
    event.stopPropagation();
    const bookdata = new FormData(event.target);
    const book = new Book();
    book.internal_id = counter
    counter ++
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
    

    const info = document.createElement('ul')
    
    for (const property in book){
        
        if(property != 'internal_id'){

            var item = document.createElement('li')
            item.textContent = `${property}: ${book[property]}`
        }

        info.appendChild(item)
    }



        
    bookshelf.appendChild(newitem)
    newitem.appendChild(info)
    newitem.appendChild(del_but)

    del_but.addEventListener('click', ()=>{
        newitem.remove()
        for (let index = 0; index < library.length; index++) {
            const element = library[index];
            if(element.internal_id == book.internal_id){
                library.splice(index,1)
                break
            }
            
        }
        console.log(library)
    })

        
        
        
    
    console.log('end')
    
}





