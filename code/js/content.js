/*jslint browser:true */
console.log('Removing MetaBar (upper)');
document.getElementsByClassName('metabar u-clearfix js-metabar metabar--top metabar--postArticle')[0].remove();
console.log('Removing postActionsBar (lower)');
document.getElementsByClassName('postActionsBar js-postActionsBar')[0].remove();
console.log('Removing promoCardWrapper (lower right)');
document.getElementsByClassName('promoCardWrapper js-promoCardWrapper')[0].remove();
