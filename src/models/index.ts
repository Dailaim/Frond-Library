type book = {
  id: number;
  title: string;
  image: string;
  resume: string;
  reviews: review[];
  categories: category[];
  authors: author[];
  categories_id: number;
  authors_id: number;
};

type review = {
  id: number;
  comment: string;
  book_id: number;
  book: book;
  score: number;
  user_id: number;
  user: user


};

type author = {
  id: number;
  name: string;
  books: book[];
};

type category = {
  id: number;
  name: string;
  books: book[];
};
type image = {
  image: string;
};
type user = {
  id: number;
  email: string;
  name: string;
  password: string;
  photo: string;
  reviews: review[];
};

type error = {
	code:   number    
	message: string 
	error: any 
}

export type { user, image, category, author, review, book, error };
