// 1
// coздать элемент с тегом h1
// задать ему любой текст и любой класс
//добавить внутри элемента с классом block
const block = document.querySelector(".block")

const h1 = document.createElement('h1')
h1.classList.add('title')
h1.textContent = 'hello'

block.append(h1)

//////////////////////////////////
//2
// создать элемент с тегом h3
// задать ему любой текст
// добавить после элемента h1

const h3 = document.createElement('h3')
h3.textContent = 'world'
h1.append(h3)

// 3
// получить элемент с классом row
// добавить атрибут title

const row = document.querySelector('.row')
row.setAttribute('title', 'course')

// 4
// получить элемент с тегом button
// удалить класс данного  элемента

const btn = document.querySelector('button')
btn.removeAttribute('class')

const block2 = document.createElement('div')
const span = document.createElement('span')
const title = document.createElement('h3')
const btn2 = document.createElement('button')
let body = document.body
block2.classList.add('block')

span.textContent = 'Hello span'
title.textContent = 'Hello h3'
btn2.textContent = 'send'

block2.append(span)
block2.append(title)
block2.append(btn2)

body.append(block2)







