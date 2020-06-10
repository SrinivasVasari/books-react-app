import React, { useContext } from "react";

export const useBooksContext = () => useContext(BooksContext);

const BooksContext = React.createContext({
  currentBook: null,
  books: [
    {
      id: 1,
      books: {
        bookName: "The Lord of the Rings: The Fellowship of the Ring",
        bookAuthor: "J. R. R. Tolkien",
        bookDesc:
          "<b><i>All three parts of the epic masterpiece The Lord of the Rings – The Fellowship of the Ring, The Two Towers & The Return of the King.</i></b> <br>Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins. <br>In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as the Ring is entrusted to his care. He must leave his home and make a perilous journey across the realms of Middle-earth to the Crack of Doom, deep inside the territories of the Dark Lord. There he must destroy the Ring forever and foil the Dark Lord in his evil purpose. <br>Since it was first published in 1954, ‘The Lord of the Rings’ has been a book people have treasured. Steeped in unrivalled magic and otherworldliness, its sweeping fantasy has touched the hearts of young and old alike.",
      },
    },
    {
      id: 2,
      books: {
        bookName: "The Story of My Life",
        bookAuthor: "Helen Keller",
        bookDesc:
          "is family, which give charming and vivid accounts of these trips. My Grandmother Keller was a daughter of one of Lafayette's aides, Alexander Moore, and granddaughter of Alexander Spotswood, an early Colonial Governor of Virginia. She was also second cousin to Robert E. Lee. <br>My father, Arthur H. Keller, was a captain in the Confederate Army, and my mother, Kate Adams, was his second wife and many years younger. Her grandfather, Benjamin Adams, married Susanna E. Goodhue, and lived in Newbury, Massachusetts, for many years. Their son, Charles Adams, was born in Newburyport, Massachusetts, and moved to Helena, Arkansas. When the Civil War broke out, he fought on the side of the South and became a brigadier-general. He married Lucy Helen Everett, who belonged to the same family of Everetts as Edward Everett and Dr. Edward Everett Hale. After the war was over the family moved to Memphis, Tennessee.",
      },
    },
    {
      id: 3,
      books: {
        bookName: "Alice in Wonderland",
        bookAuthor: "Lewis Carroll",
        bookDesc:
          "The story of a girl named Alice who falls down a rabbit hole into a fantasy world populated by peculiar and anthropomorphic creatures. The tale is filled with allusions to Dodgson's friends. The tale plays with logic in ways that have given the story lasting popularity with adults as well as children. It is considered to be one of the most characteristic examples of the genre of literary nonsense, and its narrative course and structure have been enormously influential, especially in the fantasy genre",
      },
    },
    {
      id: 4,
      books: {
        bookName: "When We Believed in Mermaids",
        bookAuthor: "Barbara O'Neal",
        bookDesc:
          "Josie Bianci was killed years ago on a train during a terrorist attack. Gone forever. It’s what her sister, Kit, an ER doctor in Santa Cruz, has always believed. Yet all it takes is a few heart-wrenching seconds to upend Kit’s world. Live coverage of a club fire in Auckland has captured the image of a woman stumbling through the smoke and debris. Her resemblance to Josie is unbelievable. And unmistakable. With it comes a flood of emotions—grief, loss, and anger—that Kit finally has a chance to put to rest: by finding the sister who’s been living a lie. <br>After arriving in New Zealand, Kit begins her journey with the memories of the past: of days spent on the beach with Josie. Of a lost teenage boy who’d become part of their family. And of a trauma that has haunted Kit and Josie their entire lives. <br>Now, if two sisters are to reunite, it can only be by unearthing long-buried secrets and facing a devastating truth that has kept them apart far too long. To regain their relationship, they may have to lose everything.",
      },
    },
  ],
});
export default BooksContext;
